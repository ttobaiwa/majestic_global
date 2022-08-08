import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useContentful from '../../helpers/useContentful'

export default function Pricing () {
	const [pricingSection, setPricingSection] = useState([])
	const { getPricing } = useContentful()

	useEffect(() => {
		try {
			getPricing().then((response) => response && setPricingSection(response))
		} catch (error) {
			console.log('error parsing -> ', error)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const PackageCard = ({ pricePackage }) => {
		return (
			<div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
				<h3 className='mb-4 text-2xl font-semibold'>{pricePackage.title}</h3>
				<p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>{pricePackage.description}</p>
				<div className='flex items-baseline justify-center my-8'>
					<span className='mr-2 text-5xl font-extrabold'>{pricePackage.currency}{pricePackage.price}</span>
					<span className='text-gray-500 dark:text-gray-400'>/{pricePackage.duration}</span>
				</div>
				<ul className='mb-8 space-y-4 text-left'>
					{pricePackage.features.map((f, f_index) => (
						<li key={f_index} className='flex items-center space-x-3'>
							<svg className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd'></path></svg>
							<span>{f.feature}</span>
						</li>
					))}
				</ul>
				<Link
					to={pricePackage.ctaURL}
					className='text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900'>
					{pricePackage.ctaMessage}
				</Link>
			</div>
		)
	}

	return (
		pricingSection.map((item, index) => (
			<section key={index} className='bg-white dark:bg-gray-900'>
				<div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6'>
					<div className='max-w-screen-md mx-auto mb-8 text-center lg:mb-12'>
						<h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white'>{item.summary.title}</h2>
						<p className='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'>{item.summary.subtitle}</p>
					</div>
					<div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
						{item.summary.packages.map((p, p_index) => (
							<PackageCard key={p_index} pricePackage = {p} />
						))}
					</div>
				</div>
			</section>
		))
	)
}


