import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useContentful from "../../helpers/useContentful";

export default function Hero () {

    const [heroSection, setHeroSection] = useState([]);
    const { getHeroSection } = useContentful();

    useEffect(() => {
        getHeroSection().then((response) => response && setHeroSection(response));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        heroSection.map((item, index) => (
            <section className="bg-white dark:bg-gray-900">        
                <div key={index} className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">{item.title}</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{item.subtitle.content[0].content[0].value}</p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <Link
                                to="https://github.com/themesberg/landwind" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">View on GitHub
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={item.banner.file.url} alt="hero"/>
                    </div>
                </div>
            </section>
        ))
    )
}
