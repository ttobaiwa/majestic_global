import { createClient } from 'contentful'

const useContentful = () => {
	const client = createClient({
		space: process.env.REACT_APP_CONTENTFUL_SPACE,
		accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
		host: process.env.REACT_APP_CONTENTFUL_HOST
	})

	const getHeaderSection = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'header',
				select: 'fields'
			})

			const sanitizedEntries = entries.items.map((item) => {
				const logo = item.fields.logo.fields
				return {
					...item.fields,
					logo
				}
			})

			return sanitizedEntries
		} catch (error) {
			console.log(`Error fetching header section : ${error}`)
		}
	}

	const getHeroSection = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'hero',
				select: 'fields'
			})

			const sanitizedEntries = entries.items.map((item) => {
				const banner = item.fields.banner.fields
				return {
					...item.fields,
					banner
				}
			})

			return sanitizedEntries
		} catch (error) {
			console.log(`Error fetching hero section : ${error}`)
		}
	}

	const getFAQSection = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'faq',
				select: 'fields'
			})
			const sanitizedEntries = entries.items.map((item) => {
				const banner = 'placeholder'
				return {
					...item.fields,
					banner
				}
			})

			return sanitizedEntries
		} catch (error) {
			console.log(`Error fetching faq section : ${error}`)
		}
	}

	const getFooterSection = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'footer',
				select: 'fields'
			})
			const sanitizedEntries = entries.items.map((item) => {
				const logo = item.fields.logo.fields
				return {
					...item.fields,
					logo
				}
			})

			return sanitizedEntries
		} catch (error) {
			console.log(`Error fetching footer section : ${error}`)
		}
	}

	const getSiteConfig = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'siteConfig',
				select: 'fields'
			})
			const sanitizedEntries = entries.items.map((item) => {
				const banner = 'placeholder'
				return {
					...item.fields,
					banner
				}
			})
			return sanitizedEntries
		} catch (error) {
			console.log(`Error fetching config section : ${error}`)
		}
	}

	const getCTASection = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'callToActionBottom',
				select: 'fields'
			})
			const sanitizedEntries = entries.items.map((item) => {
				const banner = 'placeholder'
				return {
					...item.fields,
					banner
				}
			})
			return sanitizedEntries
		} catch (error) {
			console.log(`Error fetching config section : ${error}`)
		}
	}

	const getCustomerQuote = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'customerQuote',
				select: 'fields'
			})
			const sanitizedEntries = entries.items.map((item) => {
				const avatar = item.fields.customerRepAvatar.fields
				return {
					...item.fields,
					avatar
				}
			})
			return sanitizedEntries
		} catch (error) {
			console.log(`Error fetching customer quote section : ${error}`)
		}
	}

	const getPricing = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'pricing',
				select: 'fields'
			})
			const sanitizedEntries = entries.items.map((item) => {
				const banner = 'placeholder'
				return {
					...item.fields,
					banner
				}
			})
			return sanitizedEntries
		} catch (error) {
			console.log(`Error fetching pricing section : ${error}`)
		}
	}

	const getFeatures = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'features',
				select: 'fields'
			})
			const sanitizedEntries = entries.items.map((item) => {
				const banner = item.fields.banner.fields
				return {
					...item.fields,
					banner
				}
			})
			return sanitizedEntries
		} catch (error) {
			console.log(`Error fetching features section : ${error}`)
		}
	}

	const getExtendedFeatures = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'extendedFeatures',
				select: 'fields'
			})
			const sanitizedEntries = entries.items.map((item) => {
				const banner = 'placeholder'
				return {
					...item.fields,
					banner
				}
			})
			return sanitizedEntries
		} catch (error) {
			console.log(`Error fetching features section : ${error}`)
		}
	}

	const getContact = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'contact',
				select: 'fields'
			})
			const sanitizedEntries = entries.items.map((item) => {
				const banner = item.fields.banner.fields
				return {
					...item.fields,
					banner
				}
			})
			return sanitizedEntries
		} catch (error) {
			console.log(`Error fetching features section : ${error}`)
		}
	}

	return { getHeaderSection, getHeroSection, getFAQSection, getFooterSection, getSiteConfig, getCTASection, getCustomerQuote, getPricing, getFeatures, getExtendedFeatures, getContact }
}

export default useContentful
