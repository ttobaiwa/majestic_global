import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import useContentful from "./helpers/useContentful";
import FooterNew from "./components/FooterNew";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  const [siteConfig, setSiteConfig] = useState([]);
  const { getSiteConfig } = useContentful();
  useEffect(() => {
    getSiteConfig().then((response) => response && setSiteConfig(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/:page" element={<Main siteConfigs={siteConfig} />} />
        <Route path="*" element={<Main siteConfigs={siteConfig} />} />
      </Routes>
      <FooterNew />
    </>
  );
}
