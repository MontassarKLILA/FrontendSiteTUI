import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Styles.css';
export default function HotelImages({HotelImages}) {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      
      <Slider {...settings}>
          {HotelImages.photos && HotelImages.photos.length === 1 ? (
            <div key={0}>
              <img
                style={{ width: '100%', height: '300px', objectFit: 'contain' }}
                src={HotelImages.photos[0].url}
                alt={HotelImages.photos[0].meta_title}
              />
            </div>
          ) : HotelImages.photos && HotelImages.photos.length > 1 ? (
            HotelImages.photos.map((photo, index) => (
              <div key={index}>
                <img
                  style={{ width: '100%', height: '300px', objectFit: 'contain' }}
                  src={photo.url}
                  alt={photo.meta_title}
                />
              </div>
            ))
          ):  
          <img
              style={{ width: '100%', height: '300px', objectFit: 'contain' }}
              src={""}
              alt={""}
            />
        }

      </Slider>
    );
  }