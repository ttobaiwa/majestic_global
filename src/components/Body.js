import React, { Suspense, lazy, useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import ErrorBanner from "./sections/ErrorBanner";

export default function Body ({ siteConfigs }) {

    const { page } = useParams();
    const params = useParams();
    const [siteStatus, setSiteStatus] = useState();
    const [pageSections, setPageSections] = useState();
    const sectionsPath = './sections';
    let navigate = useNavigate();

    useEffect(() => {
        try {
            siteConfigs.map((config, index) => {
                setSiteStatus(config.status);
                //console.log('config -> ', config);
                if (config.status[0].status === 'active') {
                    const pageProps = config.contentStructure[0].pages.find(element => element.url === ((page === undefined) ? '/':`/${page}`));
                    //console.log('pageProps -> ', pageProps);
                    if (pageProps !== undefined){
                        document.title = pageProps.title;
                        let sections = []; let Section = <></>;
                        pageProps.sections.map((sectionProps, index) => {
                            const elm = sectionsPath.concat('/', sectionProps.element);
                            Section = lazy(() => import(`${elm}`));
                            sections.push(<Section key={index} {...sectionProps} />);
                        });
                        setPageSections(sections);
                    } else {
                        document.title = "Oops";
                        setPageSections(<ErrorBanner/>);
                    }
                }
                if (config.status[0].status === 'maintanance') {
                    const redirect = config.maintainanceSchedule[0].redirect;
                    if (!redirect.enabled) {
                        document.title = config.maintainanceSchedule[0].title;
                        //const startDate = config.maintainanceSchedule[0].startDate;
                        //const endDate = config.maintainanceSchedule[0].endDate;
                        let sections = []; let Section = <></>;
                        config.maintainanceSchedule[0].sections.map((sectionProps, index) => {
                            const elm = sectionsPath.concat('/', sectionProps.element);
                            Section = lazy(() => import(`${elm}`));
                            sections.push(<Section {...sectionProps} />);
                        });
                        setPageSections(sections);
                    } else {
                        //console.log('redirect to -> ', redirect.url);
                        navigate(redirect.url);
                    }
                }
            });
            if (('*' in params)){
                //console.log('maybe its best to get some configs at this point', siteConfigs);
                navigate('/home');
            } 
        } catch (error) {
            //console.log('error -> ', error);
            document.title = "Oops";
            setPageSections(<ErrorBanner/>);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {pageSections}
        </Suspense>
    );
}