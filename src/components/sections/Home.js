import { Suspense, lazy, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useContentful from '../../helpers/useContentful'
import ErrorBanner from './ErrorBanner'

export default function Home () {
	const [siteConfig, setSiteConfig] = useState([])
	const { getSiteConfig } = useContentful()
	const [pageSections, setPageSections] = useState()
	const sectionsPath = '.'
	const navigate = useNavigate()

	useEffect(() => {
		try {
			getSiteConfig().then((response) => response && setSiteConfig(response))
		} catch (error) {
			console.log('error parsing -> ', error)
		}
	}, [])

	useEffect(() => {
		siteConfig.map((config) => {
			console.log('config -> ', config)
			if (config.status[0].status === 'active') {
				const pageProps = config.contentStructure[0].pages.find(element => element.url === ('/'))
				// console.log('pageProps -> ', pageProps)
				if (pageProps !== undefined) {
					document.title = pageProps.title
					const sections = []
					let Section = <></>
					pageProps.sections.map((sectionProps, index) => {
						const elm = sectionsPath.concat('/', sectionProps.element)
						Section = lazy(() => import(`${elm}`))
						sections.push(<Section key={index} {...sectionProps} />)
					})
					setPageSections(sections)
				} else {
					document.title = 'Oops'
					setPageSections(<ErrorBanner/>)
				}
			}
			if (config.status[0].status === 'maintanance') {
				const redirect = config.maintainanceSchedule[0].redirect
				if (!redirect.enabled) {
					document.title = config.maintainanceSchedule[0].title
					let Section = <></>
					const sections = config.maintainanceSchedule[0].sections.map((sectionProps) => {
						const elm = sectionsPath.concat('/', sectionProps.element)
						Section = lazy(() => import(`${elm}`))
						sections.push(<Section {...sectionProps} />)
					})
					setPageSections(sections)
				} else {
					// console.log('redirect to -> ', redirect.url)
					navigate(redirect.url)
				}
			}
		})
	}, [siteConfig])

	return (
		<Suspense fallback={<div>Loading...</div>}>
			{pageSections}
		</Suspense>
	)
}
