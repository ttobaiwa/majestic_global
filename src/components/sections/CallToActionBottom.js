import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useContentful from "../../helpers/useContentful";

export default function CallToActionBottom () {

    const [ctaSection, setCTASection] = useState([]);
    const { getCTASection } = useContentful();

    useEffect(() => {
        getCTASection().then((response) => response && setCTASection(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <section className="bg-gray-50 dark:bg-gray-800">
            {ctaSection.map((item, index) => (
                <div key={index} className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                    <div className="max-w-screen-sm mx-auto text-center">
                        <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">{item.title}</h2>
                        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">{item.description}</p>
                        <Link
                            to={item.actionUrl} className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">{item.actionTitle}
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    )
}
