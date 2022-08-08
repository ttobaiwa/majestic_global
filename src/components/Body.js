import { Suspense, lazy, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ErrorBanner from './sections/ErrorBanner'
import Home from './sections/Home'
import '../assets/css/loader.css'

export default function Body ({ siteConfigs }) {
	const { page } = useParams()
	const params = useParams()
	const [pageSections, setPageSections] = useState()
	const sectionsPath = './sections'
	const navigate = useNavigate()

	const LoadingAnimation = () => {
		return (
			<div className='full-page-loader'>
				<img width='200' src={process.env.PUBLIC_URL + '/assets/images/crown_purple.svg'} alt='majestic' />
			</div>
		)
	}
	useEffect(() => {
		try {
			siteConfigs.map((config) => {
				// console.log('config -> ', config)
				if (config.status[0].status === 'active') {
					const pageProps = config.contentStructure[0].pages.find(element => element.url === ((page === undefined) ? '/' : `/${page}`))
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
						// const startDate = config.maintainanceSchedule[0].startDate
						// const endDate = config.maintainanceSchedule[0].endDate
						const sections = []
						let Section = <></>
						config.maintainanceSchedule[0].sections.map((sectionProps) => {
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
			if (('*' in params)) {
				console.log('maybe its best to get some configs at this point', siteConfigs)
				//navigate('/home')
				setPageSections(<Home />)
			}
		} catch (error) {
			// console.log('error -> ', error)
			document.title = 'Oops'
			setPageSections(<ErrorBanner/>)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page])

	return (
		<Suspense fallback={<LoadingAnimation />}>
			{pageSections}
		</Suspense>
	)
}
