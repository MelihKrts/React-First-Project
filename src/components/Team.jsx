import Slider from "react-slick";
import "../assets/slick.css";
import "../assets/slick-theme.css";
import { teamInfo } from "../data/teamText";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export const Team = () => {
  const settings = {
    dots: false,
    autoplay: true,
    autplaySpedd: 2500,
    infinite: true,
    arrows: false,
    speed: 2000,
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
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="w-full mb-8" id="teams">
      <div className="container mx-auto">
        <h1 className="text-4xl  text-center py-4 font-semibold">Meet Our Team</h1>

        <Slider {...settings}>
          {teamInfo.map((team) => (
            <div className="mx-auto my-4 w-1/3 px-3" key={team.id}>
              <div className="w-full rounded-xl flex justify-center items-center ">
                <img src={team.image} alt={team.name} title={team.name} className="object-cover h-[300px] w-full" style={{objectPosition:"right" }} ></img>
              </div>

              <div className="w-full text-center bg-yellow-400 flex flex-col">
                <span className="text-xl font-semibold mt-2">{team.name}</span>
                <span className="block my-2 text-base">{team.title}</span>
              </div>

              <div className="w-full flex justify-between items-center bg-black">

                <div className="w-1/3 flex justify-center my-2">
                <FaXTwitter className="text-white text-3xl"/>
                </div>

                <div className="w-1/3 flex justify-center my-2">
                <FaInstagram className="text-white text-3xl"/>
                </div>

                <div className="w-1/3 flex justify-center my-2">
                <FaLinkedinIn className="text-white text-3xl"/>
                </div>

              </div>

            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
