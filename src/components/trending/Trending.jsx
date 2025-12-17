import React from 'react';
import { Navbar } from '../homePage/Navbar.jsx';
import Footer from '../homePage/Footer.jsx';
import HireUsToWork from '../aboutUs/HireUsToWork.jsx';
import aboutUsFirstIMG from "../../assets/aboutUsFirstIMG.jpeg";
import TrendingCard from './Motion.jsx';
import LivingRoomImage from '../../assets/LivingRoomImage.jpg';
const Trending = () => {

  const cardsData = [
    {
      image: LivingRoomImage,
      price: "Iterior Design",
      description: "Minimalist Design Interior",
      imageHeight: 300,
      imageWidth: 400,
    },
    {
      image: aboutUsFirstIMG,
      price: "₹2,299",
      description: "Premium look with bold aesthetics",
      ImageHeight: 30,
      ImageWidth: 70,
    },
    {
      image: aboutUsFirstIMG,
      price: "₹999",
      description: "Comfortable everyday fashion",
      imageHeight: 100,
      imageWidth: 200,
    },
  ];

  return (
    <>
      <Navbar/>

      <div id='firstHalf'>
        <img
          style={{ display: 'block', overflow: 'hidden', objectFit: 'contain' }}
          src={aboutUsFirstIMG}
          height={580}
          width={1800}
        />

        <div id='MiddleTextContainer'>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div id='firstHalfFirstMiddleTextContainer'>
              <span style={{ color: '#FF565B' }}>CHECK </span>TRENDING WORKS
            </div>
            <div style={{ fontFamily: 'sans-serif', font: 'message-box', margin: 26 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod keoi tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>

      <div style={{height:1000}}>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
          {cardsData.map((card, index) => (
            <TrendingCard key={index} {...card} />
          ))}
        </div>
      </div>

      <HireUsToWork/>
      <Footer/>
    </>
  );
};

export default Trending;
