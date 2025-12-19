import React from 'react';
import { Navbar } from '../homePage/Navbar.jsx';
import Footer from '../homePage/Footer.jsx';
import HireUsToWork from '../aboutUs/HireUsToWork.jsx';
import aboutUsFirstIMG from "../../assets/aboutUsFirstIMG.jpeg";
import TrendingCard from './Motion.jsx';
import trendingitem01 from '../../assets/trendingitem01.jpg';
import trendingitem02 from '../../assets/trendingitem02.jpg';
import trendingitem03 from '../../assets/trendingitem03.jpg';
import trendingitem04 from '../../assets/trendingitem04.jpg';
import trendingitem05 from '../../assets/trendingitem05.jpg';
import trendingitem06 from '../../assets/trendingitem06.jpg';
import trendingitem07 from '../../assets/trendingitem07.jpg';
import trendingitem08 from '../../assets/trendingitem08.jpg';


const Trending = () => {
  const cardsData = [
    {
      image: trendingitem01,
      price: "Interior Design",
      description: "Minimalist Interior Design",
    },
    {
      image: trendingitem02,
      price: "Exterior Design",
      description: "Premium Exterior Look",
    },
    {
      image: trendingitem03,
      price: "Bedroom",
      description: "Luxury Bedroom Interior",
    },
    {
      image: trendingitem04,
      price: "Bungalow",
      description: "Modern Bungalow Design",
    },
    {
      image: trendingitem05,
      price: "Tea Table",
      description: "Elegant Tea Table",
    },
    {
      image: trendingitem06,
      price: "Interior",
      description: "Comfortable Living Space",
    },
    {
      image: trendingitem07,
      price: "Interior",
      description: "Premium Bed Design",
    },
    {
      image: trendingitem08,
      price: "Interior",
      description: "Modern Interior Look",
    },
    {
      image: trendingitem07,
      price: "Interior",
      description: "Premium Bed Design",
    },
    {
      image: trendingitem08,
      price: "Interior",
      description: "Modern Interior Look",
    },
    {
      image: trendingitem07,
      price: "Interior",
      description: "Premium Bed Design",
    },
    {
      image: trendingitem08,
      price: "Interior",
      description: "Modern Interior Look",
    },
  ];

  // images ko 3-3 ke blocks me todna
  const rows = [];
  for (let i = 0; i < cardsData.length; i += 6) {
    rows.push(cardsData.slice(i, i + 6));
  }
  
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

      <div style={{ width: "90%", margin: "70px auto" }}>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              gap: 40,
              marginBottom: 50,
            }}
          >
            {/* FIRST BLOCK */}
            <div style={{ display: "flex", gap: 30 }}>
              {row[0] && (
                <TrendingCard
                  image={row[0].image}
                  price={row[0].price}
                  description={row[0].description}
                  imageHeight={500}
                  imageWidth={300}
                />
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
                {row[1] && (
                  <TrendingCard
                    image={row[1].image}
                    price={row[1].price}
                    description={row[1].description}
                    imageHeight={235}
                    imageWidth={300}
                  />
                )}

                {row[2] && (
                  <TrendingCard
                    image={row[2].image}
                    price={row[2].price}
                    description={row[2].description}
                    imageHeight={235}
                    imageWidth={300}
                  />
                )}
              </div>
            </div>

            {/* SECOND BLOCK */}
            <div style={{ display: "flex", gap: 30 }}>
              {row[3] && (
                <TrendingCard
                  image={row[3].image}
                  price={row[3].price}
                  description={row[3].description}
                  imageHeight={500}
                  imageWidth={300}
                />
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
                {row[4] && (
                  <TrendingCard
                    image={row[4].image}
                    price={row[4].price}
                    description={row[4].description}
                    imageHeight={235}
                    imageWidth={300}
                  />
                )}

                {row[5] && (
                  <TrendingCard
                    image={row[5].image}
                    price={row[5].price}
                    description={row[5].description}
                    imageHeight={235}
                    imageWidth={300}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>


      <HireUsToWork/>
      <Footer/>
    </>
  );
};

export default Trending;
