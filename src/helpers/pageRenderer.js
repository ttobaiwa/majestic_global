import { lazy } from 'react'

const pageRenderer = () => {

	const sectionsPath = '.'

	const getPageSections = async pageProps => {
		const sections = []
		let Section = <></>
		pageProps.sections.map((sectionProps, index) => {
			const elm = sectionsPath.concat('/', sectionProps.element)
			Section = lazy(() => import(`${elm}`))
			sections.push(<Section key={index} {...sectionProps} />)
		})
		return sections;
	}

	return { getPageSections }
}

export default pageRenderer
