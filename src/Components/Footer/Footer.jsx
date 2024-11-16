import React from "react";
import FooterItem from "../FooterItem/FooterItem";
import { Link } from "react-router-dom";
import { SiMicrosoftacademic } from "react-icons/si";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlinePhone } from "react-icons/hi2";
import { LiaTelegram } from "react-icons/lia";
import { SlSocialInstagram } from "react-icons/sl";


export default function Footer() {
  return (
    <footer className="mt-40 sm:mt-60 bg-white dark:bg-darkBox text-darkBox dark:text-white/70 py-10 md:pt-24 md:pb-10">
      <div className="container">
        <div className="pb-5 mb-5 sm:pb-8 sm:mb-8 border-b border-b-neutral-200 dark:border-b-dark">
          <div className="flex items-center justify-between">
            <Link to={"/"} className="flex-center text-light-blue-700">
              <SiMicrosoftacademic className="w-16 sm:w-20 h-16 sm:h-20" />
              <span className="font-MikhakWoff2one text-5xl sm:text-6xl font-bold mr-2">Cyan</span>
            </Link>
            <div className="flex gap-x-4 sm:gap-x-5">
              <a href="https://" className="flex-center text-[2.1rem] text-darkColor bg-gray-400 p-1 rounded-full w-12 h-12 sm:w-16 sm:h-16" rel="nofollow">
              <SlSocialInstagram />
              </a>
              <a href="https://" className="flex-center text-5xl text-darkColor bg-gray-400 p-1 rounded-full w-12 h-12 sm:w-16 sm:h-16 child:mt-0.5 child:mr-0.5" rel="nofollow">
                <LiaTelegram />
              </a>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-y-4 gap-x-12 mt-14 sm:mt-8">
            <a
              href="tel:02191030926"
              className="flex items-center flex-grow md:flex-grow-0 gap-x-2.5 sm:gap-x-3 text-2xl sm:text-[1.7rem]"
            >
              <div className="text-3xl sm:text-4xl">
                <HiOutlinePhone />
              </div>
              02191030926
            </a>
            <a
              href="mailto:info@sabzlearn.ir"
              className="flex items-center flex-grow md:flex-grow-0 gap-x-2.5 sm:gap-x-3 text-2xl sm:text-[1.7rem]"
            >
              <div className="text-3xl sm:text-4xl">
                <HiOutlineEnvelope />
              </div>
              info@sabzlearn.ir
            </a>
            <a
              href="https://t.me/sabzlearn_support"
              className="flex items-center flex-grow md:flex-grow-0 gap-x-2.5 sm:gap-x-3 text-2xl sm:text-[1.7rem]"
            >
              <div className="text-3xl sm:text-4xl">
                <LiaTelegram />
              </div>
              sabzlearn_support@
            </a>
          </div>
        </div>
        <div className="flex items-start justify-between flex-wrap gap-5 text-3xl/10">
          <div>
            <span className="inline-block font-EstedadBold mb-3 sm:mb-4">
              درباره سبزلرن
            </span>
            <p className="max-w-100"></p>
            <div>
              <p className="max-w-100">
                شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی، با خیال
                راحت و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر
                به دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه
                زحمات مون لذت ببریم.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-6 sm:gap-x-7">
            <div>
              <span className="inline-block font-EstedadBold mb-3 sm:mb-4">
                دوره های پرطرفدار
              </span>
              <div className="flex flex-col items-start gap-y-3 sm:gap-y-4 text-sm sm:text-base">
                <a href="https://sabzlearn.ir/course/python/">آموزش پایتون</a>
                <a href="https://sabzlearn.ir/course/java-script-zero-to-hero/">
                  آموزش جاوااسکریپت
                </a>
                <a href="https://sabzlearn.ir/course/html-tutorial/">
                  آموزش Html
                </a>
                <a href="https://sabzlearn.ir/course/css-tutorial/">
                  آموزش Css
                </a>
              </div>
            </div>
            <div>
              <span className="inline-block font-EstedadBold mb-3 sm:mb-4">
                دسترسی سریع
              </span>
              <div className="flex flex-col items-start gap-y-3 sm:gap-y-4 text-sm sm:text-base">
                <a href="https://sabzlearn.ir/terms-conditions/">
                  قوانین و مقررات
                </a>
                <a href="https://sabzlearn.ir/my-account/tickets/">
                  ارسال تیکت
                </a>
                <a href="https://sabzlearn.ir/courses/">همه دوره ها</a>
              </div>
            </div>
          </div>
          <a href="https://trustseal.enamad.ir/?id=445206&amp;code=SgLtG6QTvIyffV2cjuiTe4sSPvMqsNSf">
            <img
              src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/enamad.png"
              className="w-36 sm:w-auto"
              alt=""
            />
          </a>
        </div>
        <div className="flex items-center justify-center text-center sm:text-right sm:justify-between flex-wrap gap-y-2 gap-x-4 mt-8 sm:mt-10">
          <span>کلیه حقوق مادی و معنوی سایت برای سبز لرن محفوظ است.</span>
          <span>ساخته شده با ❤️ در سبزلرن</span>
        </div>
      </div>
    </footer>
  );
}
