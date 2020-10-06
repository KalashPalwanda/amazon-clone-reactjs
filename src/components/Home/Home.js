import React, { Component } from "react";
import "./Home.css";
import Product from "../Product/Product";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/IMDbTV/gateway/theoutpost/GW_DHERO_TheOutpost_1500x600_EN-US_5538_v2._CB407273330_.jpg"
            // https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
            alt="homepage-image"
          />
        </div>

        <div className="home__row">
          <Product
            id="34567"
            title="Apple 13 MacBook Air Core i5 CPU, 8GB RAM (2017 Model 128GB)"
            price={1000}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71hfs3%2BFRCL._AC_SX679_.jpg"
            }
            rating={4}
          />

          <Product
            id="34567"
            title="Sony Noise Cancelling Headphones WHCH710N: Wireless Bluetooth Over the Ear Headset with Mic for phone-call, Bluetooth"
            price={23}
            image={
              "https://m.media-amazon.com/images/I/319VARM0bjL._AC_SY161_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="65454"
            title="SteveMadden Latch Black Leather Women Shoes"
            price={21}
            image={
              "https://cdn.shopify.com/s/files/1/2170/8465/products/AABTqG2u_N7JDiVjMulchQnv2HQkurH-mqYy6uATn5FHDf-e78sto44flC34INGwYT02b2rURGYOORk36NEljGUewT6zOASZHOCSyalu63eqMU7AOJTFL0h_-5zf8PRKMPwnsyymhwIjloN7Im1qvU8C22FFlL1qp7w6gdGh-llc4iPAB3moVTTe5JIYtK9KtBJlQGZN_grande.jpg?v=1569077792"
            }
            rating={5}
          />

          <Product
            id="34567"
            title="Pillow Perfect Outdoor/Indoor Rave Teal Throw Pillows, 18.5 x 18.5, Green, 2 Pack"
            price={20}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/A1Td1bQyAWL._AC_SX679_.jpg"
            }
            rating={4}
          />

          <Product
            id="34567"
            title="INTO THE AM Men's Graphic Tees for Men - Short Sleeve T-Shirts"
            price={17}
            image={
              "https://m.media-amazon.com/images/I/61LliSmjoaL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="54567"
            title="Thursday Boot Company Rugged & Resilient Captain Men's Lace-up Boot"
            price={34}
            image={
              "https://m.media-amazon.com/images/I/716Wl2uv6+L._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={3}
          />

          <Product
            id="54567"
            title="ONDAISY Black Cz Gypsy Planet Half Crescent Sailor Luna Moon Pendant Charm Chain Necklace"
            price={34}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/711etMx0LWL._AC_UX695_.jpg"
            }
            rating={3}
          />

          <Product
            id="54567"
            title="SHQUF Face Mask Disposable 51 Packs Black"
            price={34}
            image={
              "https://m.media-amazon.com/images/I/61RivWaLRiL._AC_UY436_FMwebp_QL65_.jpg"
            }
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="54567"
            title="Hanlolo Womens 50s Vintage Skirt Knee Length High Waist Pleated Midi Bow Skirts

            "
            price={34}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/512tVfkAybL._AC_UX679_.jpg"
            }
            rating={3}
          />

          <Product
            id="54567"
            title="VECRY Men's Cool Cotton Beanie Slouch Skull Cap Long Baggy Hip-hop Winter Summer Hat"
            price={34}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71Mx1anwBFL._AC_UX679_.jpg"
            }
            rating={3}
          />

          <Product
            id="54567"
            title="Practicing Mindfulness: 75 Essential Meditations to Reduce Stress, Improve Mental Health, and Find Peace in the Everyday"
            price={34}
            image={
              "https://m.media-amazon.com/images/I/71+fzuFr8wL._AC_UY436_FMwebp_QL65_.jpg"
            }
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="54567"
            title="Butterfly Candle Holder - Silver Metal Rotating Spinning Butterflies with Flowers and Bees - Spinner Scandinavian Designs - 6 ¼ Inch Tall"
            price={34}
            image={
              "https://m.media-amazon.com/images/I/717xswY3zDL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={3}
          />

          <Product
            id="54567"
            title="Simple Designs Home LF2000-BLK Mother-Daughter Floor Lamp with Reading Light, 71 x 20.47 x 11.35 inches, Black"
            price={34}
            image={
              "https://m.media-amazon.com/images/I/718H1iH6pfL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={3}
          />
        </div>
      </div>
    );
  }
}

export default Home;
