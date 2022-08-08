import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useContentful from '../../helpers/useContentful'

export default function Hero () {
	const [heroSection, setHeroSection] = useState([])
	const { getHeroSection } = useContentful()

	useEffect(() => {
		try {
			getHeroSection().then((response) => response && setHeroSection(response))
		} catch (error) {
			console.log('error parsing -> ', error)
		}
	}, [])

	return (
		heroSection.map((item, index) => (
			<section key={index} className='bg-white dark:bg-gray-900'>
				<div className='grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28'>
					<div className='mr-auto place-self-center lg:col-span-7'>
						<h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>{item.title}</h1>
						<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>{item.subtitle.content[0].content[0].value}</p>
						{item.ctaButton.map((cta, c_index) => (
							<div key={c_index} className='space-y-4 sm:flex sm:space-y-0 sm:space-x-4'>
								<Link
									to={cta.url} className='text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800'>{cta.title}
								</Link>
							</div>
						))}
					</div>
					<div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
						<img src={item.banner.file.url} alt='hero'/>
					</div>
				</div>
			</section>
		))
	)
}
