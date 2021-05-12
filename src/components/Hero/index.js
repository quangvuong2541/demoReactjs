import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <HeroContent>
        <HeroItems>
          <HeroH1>Yến nhà Khánh Hòa</HeroH1>
          <HeroP>100% Tổ yến nguyên thủy</HeroP>
          <a href="https://www.facebook.com/Y%E1%BA%BFn-s%C3%A0o-S%C6%A1n-H%C3%A0-Nha-Trang-Kh%C3%A1nh-Ho%C3%A0-108475904166527">
            {" "}
            <HeroBtn>Đến với fanpage của chúng tôi</HeroBtn>
          </a>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
