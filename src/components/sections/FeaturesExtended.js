import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useContentful from "../../helpers/useContentful";

export default function FeaturesExtended () {

    const [extendedFeaturesSection, setExtendedFeaturesSection] = useState([]);
    const { getExtendedFeatures } = useContentful();

    useEffect(() => {
        try {
            getExtendedFeatures().then((response) => response && setExtendedFeaturesSection(response));
        } catch (error) {
            console.log('error parsing -> ', error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        extendedFeaturesSection.map((item, index) => (
            <section key={index} className="bg-white dark:bg-gray-900">
                <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                    <div className="col-span-2 mb-8">
                        <p className="text-lg font-medium text-purple-600 dark:text-purple-500">{item.summary.preTitle}</p>
                        <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">{item.summary.title}</h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">{item.summary.description}</p>
                        <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                            {item.summary.links.map((l, l_index) => (
                                <div key={l_index}>
                                    <Link
                                        to={l.url} className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                                        {l.title}
                                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                        {item.summary.ksp.map((l, l_index) => (
                            <div key={l_index}>
                                <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                                <h3 className="mb-2 text-2xl font-bold dark:text-white">{l.title}</h3>
                                <p className="font-light text-gray-500 dark:text-gray-400">{l.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        ))
    )
}
