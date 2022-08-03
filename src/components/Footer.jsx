import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useContentful from "../helpers/useContentful";

export default function Footer () {

    const [footerSection, setFooterSection] = useState([]);
    const { getFooterSection } = useContentful();
    useEffect(() => {
        getFooterSection().then((response) => response && setFooterSection(response));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const FooterBlock = ({content}) =>{
        return(
            <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{content.section}</h3>
                <ul className="text-gray-500 dark:text-gray-400">
                {content.links.map((item, index) => (
                    <li key={index} className="mb-4">
                        <Link
                            to={item.url} className="hover:underline">{item.title}
                        </Link>
                    </li>
                ))}    
                </ul>
            </div>
        )
    }

    return (
        footerSection.map((item, index) => (
            <footer className="bg-white dark:bg-gray-800">
                <div key={index} className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
                        {item.links.map((link, index) => (
                            <FooterBlock key={index} content={link} />
                        ))}
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <div className="text-center">
                        <Link
                            to="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img src={item.logo.file.url} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            {item.title}
                        </Link>
                        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">{item.copyright}</span>
                    </div>
                </div>
            </footer>
        ))
    )
}
