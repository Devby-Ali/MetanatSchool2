import React from 'react'
import { HiOutlineClock, HiOutlineMapPin, HiOutlinePhone } from 'react-icons/hi2'

export default function DescriptionCards() {
  return (
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap child:shadow-md child:sm:w-[263px] md:child:w-[326px] lg:child:w-[297px] xl:child:w-96 2xl:child:w-[467px] items-center child:w-full child:px-6 gap-4 child:bg-[#333c4c] text-center mt-2 mb-14 md:mb-24 md:mt-20 text-darkColor dark:text-white">
          <div className="flex-center flex-col grow gap-y-1 sm:gap-y-4 rounded-lg lg:rounded-tr-[80px] h-32 sm:h-60">
            <div className="flex-center w-16 sm:w-14 h-11 sm:h-14 rounded-tr-2xl rounded-bl-2xl bg-light-blue-800/50">
              <HiOutlineClock/>
            </div>
            <p className="text-lg sm:text-2xl">ساعت کاری</p>
            <span className="text-sm sm:text-lg tracking-tighter text-zinc-500">
              یکشنبه - پنجشنبه : ۱۰:۰۰ صبح - ۰۶:۰۰ عصر
            </span>
          </div>

          <div className="flex-center flex-col grow gap-y-1 sm:gap-y-4 rounded-lg h-32 sm:h-60">
            <div className="flex-center w-16 sm:w-14 h-11 sm:h-14 rounded-tr-2xl rounded-bl-2xl bg-light-blue-800/50">
              <HiOutlinePhone/>
            </div>
            <p className="text-lg sm:text-2xl">تلفن</p>
            <span className="text-sm sm:text-lg tracking-tighter text-zinc-500">
              ۰۲۱-۱۲۳۴۵۶۷۸
            </span>
          </div>

          <div className="flex-center flex-col gap-y-1 grow sm:gap-y-4 rounded-lg lg:rounded-tl-[80px] h-32 sm:h-60">
            <div className="flex-center w-16 sm:w-14 h-11 sm:h-14 rounded-tr-2xl rounded-bl-2xl bg-light-blue-800/50">
              <HiOutlineMapPin />
            </div>
            <p className="text-lg sm:text-2xl">آدرس</p>
            <span className="text-sm sm:text-lg tracking-tighter text-zinc-600">
              مرکزی - اراک - خیابان شهید بهشتی - کوچه عضد ۱
            </span>
          </div>
        </div>
      </div>
  )
}
