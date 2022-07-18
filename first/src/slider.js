import React, { Component } from "react";
import Slider from "react-slick";
import styled, { css, keyframes } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrap = styled.div`
    width: 1063px;
    height: 300px;
    background: rgb(0, 0, 0);

    .slick-prev:before {
        opacity: 1; 
        color: red;
        left: 0;
        content: "<";
        font-size: 30px;
    }
    
    .slick-next:before {
        opacity: 1;
        color: red;
        content: ">";
        font-size: 30px;
        right: 0;
    }
`;

const SlickDivAnimation = keyframes`
  from {
    background-size: 120% auto;
    
  }
  to {
    background-size: 100% auto;
  }
`;

const StyledSlider = styled(Slider)`
    position: static;
    width: 1063px;
    height: 300px;
    margin: 0px auto;
    background: white;
    display: flex;
    justify-content: center;

    .slick-list {
        width: 100%;
    }

    .slick-slide div {
        /* cursor: pointer; */
    }

    .slick-dots {
        bottom: -50px;
        margin-top: 200px;
    }

    .slick-track {
        overflow-x: hidden;
    }
`;

const SlickDiv = styled.div`
    width: 1063px;
    height: 300px;
    box-sizing: border-box;
    ${(props) => {
        const img = props.img;
        return css`
            background-image: url(${img});
            background-size: cover;
        `;
    }}

    animation-duration: 10s;
    animation-timing-function: ease-out;
    animation-name: ${SlickDivAnimation};
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;

    display: flex;
    justify-content: center;
    align-items: center;
    position: static;
    background: rgb(0, 0, 0);
`;

const img = styled.img`
    width: 1063px;
    height: 300px;
    box-sizing: border-box;
`;


const Slide = () => {
    const data = ['https://media.bunjang.co.kr/images/nocrop/844398082_w2058.jpg', 'https://media.bunjang.co.kr/images/nocrop/851515256_w2058.jpg', 'https://media.bunjang.co.kr/images/nocrop/849662045_w2058.jpg', 'https://media.bunjang.co.kr/images/nocrop/852789386_w2058.jpg'];

    //settings 부분, 슬라이더의 기능을 조정
    const settings = {
      dots: false,  // 점은 안 보이게
      infinite: true, // 무한 반복
      speed: 2000,
      slidesToShow: 1, //1장씩 보이게
      slidesToScroll: 1, //1장씩 넘어가도록
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
    //   <Wrap>
    //     <Slider>
    //       {data.map((data) => {
    //         return <img src={data} />;
    //       })}
    //     </Slider>
    //   </Wrap>

    //<div className="SlickComponent">
    <StyledSlider {...settings}>
        <button className="slide-arrow prev-arrow"></button>
        {/* <SlickDiv>
        
            {data.map((data) => {
            return <img src={data} />;
            })}
            
        </SlickDiv> */}
        
        {data.map((data) => {
        return <SlickDiv> <img src={data} /> </SlickDiv>;
        })}
        
        <button className="slide-arrow next-arrow"></button>
    </StyledSlider>
    //</div>
    );
  };
  
  export default Slide;