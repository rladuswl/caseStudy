import React from 'react'
import './style.css';
import { imgState } from "./recoil/Img";
import { useRecoilState } from "recoil";
import styled, { css, keyframes } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const product = styled.div`
  border: 1px solid rgb(0, 0, 0);
  width: 196px;
  height: 276px;
  margin-right: 11px;
  margin-bottom: 11px;
  flex-grow: 1;
  display: flex;
`;

const Img = styled.img`
  width: 196px;
  height: 276px;
`;

const Product = ({img}) => {

  const [ProductImg, setProductImg] = useRecoilState(imgState);

  const imgs = ['https://media.bunjang.co.kr/product/183206594_1_1654042021_w292.jpg', 'https://media.bunjang.co.kr/product/192204136_1_1656841430_w292.jpg', 'https://media.bunjang.co.kr/product/192606348_1_1657000593_w292.jpg', 
  'https://media.bunjang.co.kr/product/192032730_1_1657001067_w292.jpg', 'https://media.bunjang.co.kr/product/192494933_1_1656902976_w292.jpg', 'https://media.bunjang.co.kr/product/192528735_1_1656923440_w292.jpg', 'https://media.bunjang.co.kr/product/192612989_1_1657004685_w292.jpg', 
  'https://media.bunjang.co.kr/product/192613001_1_1657004693_w292.jpg', 'https://media.bunjang.co.kr/product/192608325_1_1657001861_w292.jpg', 'https://media.bunjang.co.kr/product/192542170_1_1656931413_w292.jpg'];

  return (
    <product>
      <div className='product'>
      <Img src={ProductImg} />
      </div>
    </product>
  )
}

export default Product;