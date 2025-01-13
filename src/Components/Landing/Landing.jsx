import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Input from "../Form/Input";
import { useForm } from "../../hooks/useForm";
import Button from "../Form/Button";
import { useNavigate } from "react-router-dom";
import { requiredValidator } from "../../validators/rules";

import Slider from "react-slick";
import { sliderImg } from "../../datas";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  HiOutlineChevronDown,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";

export default function Landing({ info }) {
  const [sliderImages, SetSliderImages] = useState(sliderImg);

  var settings = {
    dots: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [formState, onInputHandler] = useForm(
    {
      search: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const navigate = useNavigate();

  const search = (event) => {
    event.preventDefault();
    navigate(`search/${formState.inputs.search.value}`);
  };

  return (
    <section className="relative">
      <Slider className="" {...settings}>
        {sliderImages.map((img) => (
          <div key={img.id} className="relative">
            <div className="bg-purple-700/50 absolute w-full h-full"></div>
            <img
              src={img.src}
              alt="picHesder"
              className="h-[320px] md:h-[450px] lg:h-[700px] 2xl:h-[800px] object-cover w-full"
            />
          </div>
        ))}
      </Slider>

      <div className="flex-center flex-col gap-y-7 md:gap-y-12 absolute top-8 sm:top-14 md:top-28 lg:top-72 w-full">
        <h1 className="text-4xl/relaxed sm:text-5xl/relaxed lg:text-6xl/relaxed 2xl:text-8xl/relaxed 2xl:tracking-normal tracking-wider font-MikhakWoff2one w-4/5 text-center text-white font-bold md:mb-8">
          مونته‌ سوری، ایجاد شناخت و یادگیری از طریق شناخت درونی است
        </h1>
        <div className="w-[80%] sm:w-[50%] 2xl:w-[40%] md:mb-8 bg-transparent backdrop-blur-[4px] border lg:border border-white/20 rounded-3xl">
          <form className="flex items-center justify-between" action="#">
            <Input
              type="text"
              id="search"
              className="w-full h-20 lg:h-24 text-xl xs:text-2xl pr-8 outline-none placeholder-white bg-transparent"
              placeholder="چی دوست داری یاد بگیری ..."
              validations={[requiredValidator()]}
              onInputHandler={onInputHandler}
            />
            <Button
              className="flex-center border-none"
              type="submit"
              onClick={search}
            >
              <HiOutlineMagnifyingGlass className="text-5xl lg:text-5xl text-white/60 ml-5" />
            </Button>
          </form>
        </div>
        <h2 className="text-3xl/relaxed sm:text-4xl/relaxed lg:text-5xl/relaxed font-EstedadMedium w-4/5 text-center text-white font-bold">
          <Typewriter
            onInit={(typeWriter) => {
              typeWriter
                .typeString("ما به هر قیمتی محتوای آموزشی تولید نمیکنیم!")
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  "یک رویکرد آموزشی است که تمرکز خود را بر روی علایق و فعالیت‌های طبیعی و روزمره کودکان قرار میدهد"
                )
                .start()
                .pauseFor(2000);
            }}
            options={{
              loop: true,
            }}
          />
        </h2>
      </div>

      <div className="circle circle--main circle--lg">
        <div className="circle circle--md">
          <div className="circle circle--sm"></div>
        </div>
      </div>

      <svg
        id="curve"
        viewBox="0 0 100 22"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[7px] right-0 left-0 mx-auto hidden md:inline-block w-[134px] text-[#eceff1] dark:text-darkColor"
      >
        <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z"></path>
      </svg>

      <div className="absolute bottom-0 right-0 left-0 mx-auto translate-y-[6px] hidden md:flex-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full text-3xl dark:text-[#eceff1] text-darkColor">
        <HiOutlineChevronDown />
      </div>
    </section>
  );
}
