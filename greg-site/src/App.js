import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Footer from './Footer';
import Main from './Main';
import About from './About';
import { Navbar } from './Navbar';
import { pages } from './pageInfo';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const rename = function () {
    return (document.title = 'Lienhard Law');
  };
  rename();
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Main
              imgText={pages.main.imgText}
              img={pages.main.img}
              subtitle={pages.main.subtitle}
              smallText={pages.main.smallText}
              features={pages.main.features}
            />
          }
        />
        <Route
          exact
          path="/about"
          element={
            <About imgText={pages.about.imgText} img={pages.about.img} />
          }
        />
        <Route
          exact
          path="/practice-areas/family-law"
          element={
            <Main
              imgText={pages.familyLaw.imgText}
              img={pages.familyLaw.img}
              subtitle={pages.familyLaw.subtitle}
              smallText={pages.familyLaw.smallText}
              features={pages.familyLaw.features}
            />
          }
        />
        <Route
          exact
          path="/practice-areas/wills-estates"
          element={
            <Main
              imgText={pages.wills.imgText}
              img={pages.wills.img}
              subtitle={pages.wills.subtitle}
              smallText={pages.wills.smallText}
              features={pages.wills.features}
            />
          }
        />
        <Route
          exact
          path="/practice-areas/property"
          element={
            <Main
              imgText={pages.property.imgText}
              img={pages.property.img}
              subtitle={pages.property.subtitle}
              smallText={pages.property.smallText}
              features={pages.property.features}
            />
          }
        />
        <Route path="*" element={'todo'} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}
