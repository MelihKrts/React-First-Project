import React from "react";
import Slider from "react-slick";
import "../assets/slick.css";
import "../assets/slick-theme.css";
import { customerInfo } from "../data/customerReview";
import { FaStar, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useState } from "react";

const CustomPrevButton = ({ onClick }) => (
  <button className="custom-prev-button" onClick={onClick}>
    <FaAngleLeft className="custom-icon" />
  </button>
);

const CustomNextButton = ({ onClick }) => (
  <button className="custom-next-button" onClick={onClick}>
    <FaAngleRight className="custom-icon" />
  </button>
);



export const CustomerReviews = () => {

  const initialLikes = customerInfo.map(() => Math.floor(Math.random() * 100));
  const [likes, setLikes] = useState(initialLikes);

  
  const increase = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index]++;
    setLikes(updatedLikes);
  };

  const initialUnLikes = customerInfo.map(() => Math.floor(Math.random() * 100));
  const [unLikes, setUnlikes] = useState(initialUnLikes);

  
  const decrease = (index) => {
    const updatedUnLikes = [...unLikes];
    updatedUnLikes[index]++;
    setUnlikes(updatedUnLikes);
  };


  const settings = {
    prevArrow: <CustomPrevButton />,
    nextArrow: <CustomNextButton />,
    dots: false,
    autoplay: true,
    autplaySpedd: 2500,
    infinite: true,
    arrows: false,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrow:false,
          autoplay: true,
          autplaySpedd: 2500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrow:false,
          infinite:true,
          autoplay: true,
          autplaySpedd: 2500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow:false,
          infinite:true,
          autoplay: true,
          autplaySpedd: 2500,
        },
      },
    ],
  };


  return (
    <section className="w-full bg-black" id="customer">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl text-white py-4 font-semibold">Customer Reviews</h1>
        <Slider {...settings}>
          {customerInfo.map((customer,index) => (
            <div className="w-1/3 mx-auto text-white my-4" key={customer.id}>
              <div className="w-full flex justify-center items-center">
                <img
                  src={customer.portre}
                  alt={customer.name}
                  title={customer.name}
                  className="w-[5rem] h-[5rem] rounded-full object-left-top object-cover"
                ></img>
              </div>

              <div className="w-full my-2">
                <h1 className="text-center my-2 font-bold">{customer.name}</h1>

                <p className="text-center">{customer.comment}</p>
              </div>

              <div className="w-full flex justify-center items-center">
                {Array.from({ length: customer.points }, (_, index) => (
                  <FaStar className="text-star-colors mb-4" key={index} />
                ))}
              </div>
              <div className="flex justify-between">
                <div className="w-1/2 flex text-like-colors items-center">
                  <AiFillLike onClick={()=>increase(index)} />
                  <span className="block ml-2">{likes[index]}</span>
                </div>


                <div className="w-1/2 flex text-unLike-colors items-center">
                  <AiFillDislike style={{}} onClick={()=>decrease(index)} />
                  <span className="block ml-2">{unLikes[index]}</span>
                </div>

                </div>

              </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

