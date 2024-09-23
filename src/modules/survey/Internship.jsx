import { Box, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import ContactSection from "../../features/contact-section/Contact-Section";
import RelativeWrapper from "../../components/other/RelativeWrapper";
import ServiceSection from '../../features/services/Service-Section';
import Header from '../../components/header/Header';
import Form from './Form';
import SectionWrapper2 from '../../components/other/SectionWrapper2';

const Internship = () => {

  const iframeUrl = "https://tally.so/embed/wv4vXg?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
  // useEffect(() => {
  //   const d = document;
  //   const w = "https://tally.so/widgets/embed.js";

  //   const v = function () {
  //     if (typeof Tally !== "undefined") {
  //       Tally.loadEmbeds();
  //     } else {
  //       d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
  //         e.src = e.dataset.tallySrc;
  //       });
  //     }
  //   };

  //   if (typeof Tally !== "undefined") {
  //     v();
  //   } else if (d.querySelector(`script[src="${w}"]`) === null) {
  //     const s = d.createElement("script");
  //     s.src = w;
  //     s.onload = v;
  //     s.onerror = v;
  //     d.body.appendChild(s);
  //   }
  // }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

  return (
    <Box>
      <Header/>

      <SectionWrapper2>
        <Form url={iframeUrl}/> 
      </SectionWrapper2>
      {/* <Center>
        <Box w="50%">
          <Form url={iframeUrl}/>
        </Box>
      </Center> */}

      <RelativeWrapper>
        {/* <CurvyBackground /> */}
        <ServiceSection />
      </RelativeWrapper>
      <RelativeWrapper>
        <ContactSection />
      </RelativeWrapper>
      <Footer />
    </Box>
  );
};

export default Internship;
