import { useEffect, useState } from 'react'
import useContentful from '../../helpers/useContentful'

export default function FrequentlyAskedQuestions () {
	const [faqSection, setFAQSection] = useState([])
	const { getFAQSection } = useContentful()
	useEffect(() => {
		try {
			getFAQSection().then((response) => response && setFAQSection(response))
		} catch (error) {
			console.log('error parsing -> ', error)
		}
	}, [])

	const FAQEntry = ({ question, answer }) => {
		return (
			<>
				<h3 id='accordion-flush-heading-1'>
					<button type='button' className='flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white' data-accordion-target='#accordion-flush-body-1' aria-expanded='true' aria-controls='accordion-flush-body-1'>
						<span>{question}</span>
						<svg data-accordion-icon='' className='w-6 h-6 rotate-180 shrink-0' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
					</button>
				</h3>
				<div id='accordion-flush-body-1' className='' aria-labelledby='accordion-flush-heading-1'>
					<div className='py-5 border-b border-gray-200 dark:border-gray-700'>
						<p className='mb-2 text-gray-500 dark:text-gray-400'>{answer}</p>
					</div>
				</div>
			</>
		)
	}

	return (
		faqSection.map((item, index) => (
			<section key={index} className='bg-white dark:bg-gray-900'>
				<div className='max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 '>
					<h2 className='mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white'>{item.title}</h2>
					<div className='max-w-screen-md mx-auto'>
						<div id='accordion-flush' data-accordion='collapse' data-active-classes='bg-white dark:bg-gray-900 text-gray-900 dark:text-white' data-inactive-classes='text-gray-500 dark:text-gray-400'>
							{item.entries.map((item, index) => (
								<FAQEntry key={index} question={item.question} answer={item.answer} />
							))}
						</div>
					</div>
				</div>
			</section>
		))
	)
}
