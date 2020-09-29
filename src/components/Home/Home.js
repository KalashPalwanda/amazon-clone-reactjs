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
            title="Sony Noise Cancelling Headphones WHCH710N: Wireless Bluetooth Over the Ear Headset with Mic for phone-call, Bluetooth"
            price={13.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/419MqI3z2DL._AC_SY200_.jpg"
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
            title="Apple Watch Series 5 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band"
            price={21}
            image={
              "https://m.media-amazon.com/images/I/41kV7muKHiL._AC_SY161_.jpg"
            }
            rating={5}
          />

          <Product
            id="34567"
            title="Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Latest Model)"
            price={20}
            image={
              "https://m.media-amazon.com/images/I/41x69gTKKhL._AC_SY161_.jpg"
            }
            rating={4}
          />

          <Product
            id="34567"
            title="Bose Frames Audio Sunglasses with Open Ear Headphones, Alto M/L , Black - with Bluetooth"
            price={17}
            image={
              "https://m.media-amazon.com/images/I/31ujrm9-aGL._AC_SY161_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="54567"
            title="Sony Noise Cancelling Headphones WHCH710N: Wireless Bluetooth Over the Ear Headset with Mic for phone-call, Bluetooth"
            price={34}
            image={
              "https://m.media-amazon.com/images/I/41vMar8dgdL._AC_SY161_.jpg"
            }
            rating={3}
          />
        </div>
      </div>
    );
  }
}

export default Home;
