import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { teamInfo } from "../data/teamText";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export const Team = () => {
  const settings = {
    dots: false,
      infinite: true,
      speed: 2000,
      autoplay:true,
      autoplaySpeed:3000,
      arrows:false,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
return(
  <section className="w-full">

  <div className="container mx-auto">
        <h1 className="text-4xl  text-center py-4 font-semibold"> Meet Our Team</h1>
        <Slider {...settings}>
          {teamInfo.map((team)=>(
            <div key={team.id} className="p-4">
                <img src={team.image} alt={team.name} title={team.name} className="w-full rounded-t-xl"></img>

              <div className="w-full bg-team-bg text-center rounded-b-lg">
                <h4 className="font-bold p-2">{team.name}</h4>
                <h5 className="font-bold p-2">{team.title}</h5>
              </div>

            </div>
          ))}
        </Slider>
      </div>
  </section>
)
};
