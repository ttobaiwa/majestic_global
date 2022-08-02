import { useEffect, useState } from "react";
import {Route, Routes} from 'react-router-dom';
import useContentful from "./helpers/useContentful";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";

export default function App() {

  const [siteConfig, setSiteConfig] = useState([]);
  const { getSiteConfig } = useContentful();
  useEffect(() => {
    getSiteConfig().then((response) => response && setSiteConfig(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/:page" element={<Body siteConfigs={siteConfig} />}/>
        <Route path="*" element={<Body siteConfigs={siteConfig} />} />
      </Routes>
      <Footer/>
    </>
  )
}