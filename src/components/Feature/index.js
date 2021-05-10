import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";
import product1 from "../../images/IMG_6500-1-300x300.jpg";
import product2 from "../../images/IMG_6511-1-400x400.jpg";
import product3 from "../../images/hong-rut-long-401x400.jpg";
import product4 from "../../images/f1b4bc6dd23ad0a82852619d30fb5a80.jpg";
const Feature = () => {
  return (
    <FeatureContainer>
    <div
  
      className="bg-dark"
    >
      <div className="carousel-inner">
        <div className="carousel-item active ml-40">
          <img
            className="h-20 ml-10 "
            magin={40}
            src={product1}
            alt="First slide"
            height={200}
          />
          <a>
            <i class="fa fa-arrow-alt-circle-right"></i>
          </a>
          <img className="h-20" src={product2} alt="First slide" height={200} />
          <a>
            <i class="fa fa-arrow-alt-circle-right"></i>
          </a>
          <img className="h-20" src={product3} alt="First slide" height={200} />
          <a>
            <i class="fa fa-arrow-alt-circle-right"></i>
          </a>
          <img className="h-20" src={product4} alt="First slide" height={200} />
        </div>

      </div>
    </div>



      <div> <FeatureButton>Đến với page của chúng tôi</FeatureButton></div>

     
     </FeatureContainer>
  );
};

export default Feature;
