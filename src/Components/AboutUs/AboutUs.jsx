import React from "react";
import AboutUsBox from "../AboutUsBox/AboutUsBox";
import SectionHeader from "../SectionHeader/SectionHeader";
import { BiSupport } from "react-icons/bi";
import { MdOutlineContentCopy } from "react-icons/md";
import { GiCutDiamond } from "react-icons/gi";
import { IoCodeWorking } from "react-icons/io5";
import { HiBookOpen, HiMiniHeart, HiOutlineCheckCircle, HiPresentationChartLine } from "react-icons/hi2";

export default function AboutUs() {
  return (
    <div className="mb-48">
      <div className="container">
        <div className="flex flex-col lg:flex-row text-darkColor dark:text-white mb-12 lg:mb-28 gap-x-6">
          <div className="relative flex-center sm:my-10 lg:w-full">
            <div className="absolute w-[120%] 2xl:w-[160%] h-[120%] lg:h-[100%] xl:h-[120%] bg-gradient-to-l from-transparent from-30% to-light-blue-800 z-0 left-16 rounded-tl-[70px]"></div>
            <img
              src="images/aboutUs.jpg"
              alt="aboutImg"
              className="rounded-tl-[70px] z-10"
            />
          </div>

          <div className="space-y-8 md:space-y-10 lg:space-y-16 mt-20 lg:w-full mr-4 text-darkBox dark:text-white/80">
            <h3 className="font-EstedadBold text-4xl xs:mt-8 md:text-5xl xl:text-6xl md:text-center">
              چرا متانت را انتخاب کنید؟
            </h3>
            <p className="text-md/relaxed lg:text-3xl/relaxed">
              تئوری انتخاب مدرسه فرض میکند که والدین بازیگرانی منطقی هستند که
              میتوانند اطلاعات خود را جمع آوری و مصرف کنند تا مدرسه ای پیدا کنند
              که با نیاز های فرزندشان مطابقت داشته باشد.
            </p>
            <ul className="child:flex child:items-center space-y-3 md:space-y-6 lg:space-y-12 child:lg:text-3xl">
              <li>
                <div className="text-4xl ml-1.5">
                  <HiOutlineCheckCircle />
                </div>
                تقویت هوشهای گاردنر
              </li>
              <li>
                <div className="text-4xl ml-1.5">
                  <HiOutlineCheckCircle />
                </div>
                یادگیری با سرگرمی
              </li>
              <li>
                <div className="text-4xl ml-1.5">
                  <HiOutlineCheckCircle />
                </div>
                محیط دوستانه و شاد
              </li>
              <li>
                <div className="text-4xl ml-1.5">
                  <HiOutlineCheckCircle />
                </div>
                زمین بازی بزرگ با پارک کودکان
              </li>
              <li>
                <div className="text-4xl ml-1.5">
                  <HiOutlineCheckCircle />
                </div>
                سیستم آموزش مطابق با نیاز های منحصر به فرد دانش آموز
              </li>
              <li>
                <div className="text-4xl ml-1.5">
                  <HiOutlineCheckCircle />
                </div>
                پروراندن علاقه به یادگیری در دانش آموز
              </li>
              <li>
                <div className="text-4xl ml-1.5">
                  <HiOutlineCheckCircle />
                </div>
                برگزاری کارگاه فلسفه برای کودکان
              </li>
            </ul>
          </div>
        </div>

        <SectionHeader
          title="ما چه کمکی بهتون میکنیم؟"
          desc="از اونجایی که دبستان مونته سوری متانت یک آکادمی خصوصی هست"
        />

        <div className="grid grid-rows-2 md:grid-cols-2 gap-8 sm:gap-10 cursor-default">
          <AboutUsBox
            title="آموزشها آمیزه ای از اتاق بازی و کارگاه آموزشی دست ورزی هستند"
            icon={<HiMiniHeart className="text-orange-500/80" />}
          />
          <AboutUsBox
            title="آموزش های گروهی با همه ی گروه های سنی برای تقویت یادگیری همتا به همتا"
            icon={<HiBookOpen className="text-purple-500/80" />}
          />
          <AboutUsBox
            title="سراغ حرفه ای ها رفتیم"
            desc="به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده جذاب و روان بیان بشه."
            icon={<GiCutDiamond className="text-light-blue-600/80" />}
          />
          <AboutUsBox
            title="استقلال و اعتماد به نفس و کارآفرینی اصل پایه آموزش به سبک مونته سوری میباشد"
            icon={<HiPresentationChartLine className="text-green-700/80" />}
          />
        </div>
      </div>
    </div>
  );
}
