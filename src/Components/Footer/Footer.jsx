import React from "react";
import FooterItem from "../FooterItem/FooterItem";
import { Link } from "react-router-dom";
import { HiOutlineDevicePhoneMobile, HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlinePhone } from "react-icons/hi2";
import { LiaTelegram } from "react-icons/lia";
import { SlSocialInstagram } from "react-icons/sl";
import Input from "../Form/Input";
import { emailValidator } from "../../validators/rules";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { FiMail } from "react-icons/fi";
import Button from "../Form/Button";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [formState, onInputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const addNewEmail = (event) => {
    event.preventDefault();
    const newEmail = {
      email: formState.inputs.email.value,
    };

    fetch("http://localhost:4000/v1/newsletters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmail),
    }).then((res) => {
      if (res.ok) {
        Swal.fire({
          title: "ایمیل شما با موفقیت در خبرنامه ثبت شد",
          icon: "success",
          confirmButtonText: "تایید",
        });
      }
    });
  };

  return (
    <footer className="mt-40 bg-white dark:bg-darkBox text-darkBox dark:text-white/70 sm:mt-60 py-10 md:pt-16 pb-12 sm:pb-16">
      <div className="container">
        <div className="pb-8 mb-8 sm:pb-16 sm:mb-16 border-b border-b-gray-400">
          <div className="flex items-center justify-between">
            <Link to={"/"} className="flex items-end text-light-blue-700">
              <div className="rotate-[30deg]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="65"
                  height="65"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-my-oppo"
                  viewBox="0 0 24 24"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path d="M18.316 5H5.684L2.266 9.019a1.09 1.09 0 0 0 .019 1.447L11.999 21l9.715-10.49a1.09 1.09 0 0 0 .024-1.444z"></path>
                  <path d="m9 11 3 3 3-3"></path>
                </svg>
              </div>
              <span className="font-EstedadBold text-6xl sm:text-7xl font-bold -mr-4">
                متانت
              </span>
            </Link>
            <div className="flex gap-x-4 sm:gap-x-5">
              <a
                href="https://"
                className="flex-center text-[2.1rem] text-darkColor bg-gray-400 p-1 rounded-full w-12 h-12 sm:w-16 sm:h-16"
                rel="nofollow"
              >
                <SlSocialInstagram />
              </a>
              <a
                href="https://"
                className="flex-center text-5xl text-darkColor bg-gray-400 p-1 rounded-full w-12 h-12 sm:w-16 sm:h-16 child:mt-0.5 child:mr-0.5"
                rel="nofollow"
              >
                <LiaTelegram />
              </a>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-y-8 gap-x-16 mt-16">
            <a
              href="tel:34222621"
              className="flex items-center flex-grow md:flex-grow-0 gap-x-2.5 sm:gap-x-3 text-2xl sm:text-[1.7rem] ltr-text"
            >
              34222621
              <div className="text-3xl sm:text-4xl">
                <HiOutlinePhone />
              </div>
            </a>
            <a
              href="tel:09184892399"
              className="flex items-center flex-grow md:flex-grow-0 gap-x-2.5 sm:gap-x-3 text-2xl sm:text-[1.7rem] ltr-text"
            >
              09184892399
              <div className="text-3xl sm:text-4xl">
                <HiOutlineDevicePhoneMobile />
              </div>
            </a>
            <a
              href="https://t.me/skytech_support"
              className="flex items-center flex-grow md:flex-grow-0 gap-x-2.5 sm:gap-x-3 text-2xl sm:text-[1.7rem] ltr-text"
            >
              @metanat5353
              <div className="text-3xl sm:text-4xl">
                <FaInstagram />
              </div>
            </a>
            <div className="flex items-center flex-wrap gap-y-6 gap-x-4 lg:gap-x-8">
              <span>
                اشتراک در خبرنامه : جهت اطلاع از آخرین اخبار و تخفیف های سایت
                عضو شوید!
              </span>
              <form action="#" className="flex flex-wrap">
                <div className="flex items-center justify-between px-4 py-3 bg-[#333c4c]/15 dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="email"
                    className="bg-transparent outline-none"
                    type="email"
                    placeholder="آدرس ایمیل"
                    validations={[emailValidator()]}
                    onInputHandler={onInputHandler}
                  />
                  <Button
                    type="submit"
                    className={` rounded-lg px-4 pb-0.5 transition-all ${
                      formState.isFormValid
                        ? "bg-light-blue-600/40 hover:bg-light-blue-600/60"
                        : "bg-white/10"
                    }`}
                    onClick={addNewEmail}
                    disabled={!formState.isFormValid}
                  >
                    تایید
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between flex-wrap gap-5 sm:mb-14 text-3xl/10">
          <div>
            <span className="inline-block sm:text-4xl font-EstedadBold mb-3 sm:mb-6">
              دبستان مونته سوری متانت
            </span>
            <div className="md:w-[50rem] lg:w-auto">
              <p className="max-w-[40rem] text-2xl sm:text-[1.65rem] leading-relaxed">
                روش مونته سوری یک روش آموزشی است که بر روی علایق و فعالیت‌های
                روزمره و طبیعی کودکان تمرکز دارد. این روش کاملاً از روش‌های خشک
                و رسمی آموزشی جدا بوده و بیشتر بر روی مهارت‌هایی تأکید می‌کند که
                در دنیای واقعی برای کودکان کاربرد دارد. این روش معمولاً در
                محیط‌های آموزشی مانند مدارس و مهدکودک‌ها اجرا می‌شود و کودکان را
                به یادگیری دانش مشتاق می‌کند. کودکان در روش مونته سوری دیگر با
                مفاهیم خشک و انتزاعی سر و کار ندارند و می‌توانند جهان اطراف خود
                را با نگاه تازه‌تری درک کنند. همچنین هیچ زور و اجباری بر روی
                کودکان نیست و آن‌ها کاملا احساس آزادی عمل دارند.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-10 sm:gap-x-14 sm:mt-7">
            <div>
              <span className="inline-block sm:text-4xl font-EstedadBold mb-8 sm:mb-12">
                دسترسی سریع
              </span>
              <div className="flex gap-x-12">
                <div className="flex flex-col items-start gap-y-5 sm:gap-y-8 text-2xl sm:text-3xl">
                  <Link
                    to={"/"}
                    className="flex items-center gap-x-2 md:gap-x-3 hover:text-light-blue-600 transition-colors"
                  >
                    <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                    صفحه اصلی
                  </Link>
                  <Link
                    to={"/aboutUs"}
                    className="flex items-center gap-x-2 md:gap-x-3 hover:text-light-blue-600 transition-colors"
                  >
                    <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                    درباره ی ما
                  </Link>
                  <Link
                    to={"/classes"}
                    className="flex items-center gap-x-2 md:gap-x-3 hover:text-light-blue-600 transition-colors"
                  >
                    <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                    کلاس ها
                  </Link>
                </div>
                <div className="flex flex-col items-start gap-y-5 sm:gap-y-8 text-2xl sm:text-3xl">
                  <Link
                    to={"/events"}
                    className="flex items-center gap-x-2 md:gap-x-3 hover:text-light-blue-600 transition-colors"
                  >
                    <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                    رویداد ها
                  </Link>
                  <Link
                    to={"/teachers"}
                    className="flex items-center gap-x-2 md:gap-x-3 hover:text-light-blue-600 transition-colors"
                  >
                    <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                    مربیان
                  </Link>
                  <Link
                    to={"/contactUs"}
                    className="flex items-center gap-x-2 md:gap-x-3 hover:text-light-blue-600 transition-colors"
                  >
                    <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                    درباره ما
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <a href="https://">
            <img
              src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/enamad.png"
              className="w-36 sm:w-auto"
              alt=""
            />
          </a>
        </div>
        <div className="flex items-center justify-center text-center sm:text-right sm:justify-between flex-wrap gap-y-2 gap-x-4 mt-8 sm:mt-10">
          <span>
            کلیه حقوق مادی و معنوی سایت برای{" "}
            <span className="text-light-blue-600">دبستان متانت</span> محفوظ است.
          </span>
          <span className="ltr-text">@Devby_Ali</span>
          <span>ساخته شده با ❤️ در متانت</span>
        </div>
      </div>
    </footer>
  );
}
