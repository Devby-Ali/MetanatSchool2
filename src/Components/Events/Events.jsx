import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { EventsData } from "../../datas"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import EventBox from "../EventBox/EventBox";

export default function Events() {

  // const [PresellCourses, setpresellCourses] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:4000/v1/courses/presell`)
  //     .then((res) => res.json())
  //     .then((allpresell) => {
  //       setpresellCourses(allpresell);
  //     });
  // }, []);


  console.log(EventsData)


  return (
    <div className="mb-48">
      <div className="container">
        <SectionHeader
          title="رویداد ها"
          desc="اخبار و اطلاعیه های دبستان متانت"
        />
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {/* {PresellCourses.map((course) => (
              <>
                <SwiperSlide>
                  <CourseBox {...course} isSlider={true} />
                </SwiperSlide>
              </>
            ))} */}
            {EventsData.map((event) => (
              <>
                <SwiperSlide>
                  <EventBox {...event} isSlider={true} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
