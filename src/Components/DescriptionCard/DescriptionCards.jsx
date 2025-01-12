import React from "react";
import {
  HiOutlineClock,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";

export default function DescriptionCards() {
  return (
    <div className="container">
      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap child:shadow-md child:sm:w-[263px] md:child:w-[326px] lg:child:w-[297px] xl:child:w-96 2xl:child:w-[467px] items-center child:w-full child:px-6 gap-10 sm:gap-12 child:bg-light-blue-700/30 child:backdrop-blur-[4px] text-center mt-12 mb-14 md:mb-24 md:mt-20 text-darkColor dark:text-white/90">


        <div className="flex-center text-7xl flex-col grow gap-y-3 sm:gap-y-6 rounded-lg lg:rounded-tr-[80px] h-56 sm:h-80">
          <HiOutlineClock />

          <p className="text-3xl xs:text-4xl">ساعت کاری</p>
          <span className="text-2xl xs:text-3xl tracking-tighter text-zinc-500">
            یکشنبه - پنجشنبه : ۱۰:۰۰ صبح - ۰۶:۰۰ عصر
          </span>
        </div>

        <div className="flex-center text-7xl flex-col grow gap-y-3 sm:gap-y-6 rounded-lg h-56 sm:h-80">
          <HiOutlinePhone />

          <p className="text-3xl xs:text-4xl">تلفن</p>
          <span className="text-2xl xs:text-3xl tracking-tighter text-zinc-500">
            ۰۲۱-۱۲۳۴۵۶۷۸
          </span>
        </div>

        <div className="flex-center text-7xl flex-col gap-y-3 grow sm:gap-y-6 rounded-lg lg:rounded-tl-[80px] h-56 sm:h-80">
          <HiOutlineMapPin />

          <p className="text-3xl xs:text-4xl">آدرس</p>
          <span className="text-2xl xs:text-3xl tracking-tighter text-zinc-600">
            مرکزی - اراک - خیابان شهید بهشتی - کوچه عضد ۱
          </span>
        </div>

      </div>
    </div>
  );
}
