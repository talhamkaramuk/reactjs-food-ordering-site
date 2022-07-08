import React from "react";
import Delivery from "../img/delivery.png";
import Best from "../img/best.png";
import HeroBg from "../img/heroBg.png";
import { foodData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full md:mt-20"
      id="home"
    >
      {/* anasayfa sol ekran */}
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-10">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-3 justify-center bg-yellow-300 px-5 py-2 rounded-full">
            <p className="text-base text-red-500 font-semibold">
              Lezzet Ödüllü
            </p>
            <div className="w-10 h-10 bg-white rounded-full overflow-hidden drop-shadow-xl">
              <img
                src={Best}
                className="w-full h-full object-contain"
                alt="delivery"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center bg-yellow-300 px-5 py-2 rounded-full">
            <p className="text-base text-red-500 font-semibold">
              Hızlı Teslimat
            </p>
            <div className="w-10 h-10 bg-white rounded-full overflow-hidden drop-shadow-xl">
              <img
                src={Delivery}
                className="w-full h-full object-contain"
                alt="delivery"
              />
            </div>
          </div>
        </div>

        <p className="text-[2rem] lg:text-[3.5rem] font-bold tracking-wider text-headingColor">
          <span className="bg-yellow-400 text-red-600 text-[3rem] lg:text-[5rem] rounded-l-xl">
            en
          </span>
          <span className="bg-red-600 text-yellow-400 text-[3rem] lg:text-[5rem] rounded-r-xl">
            iyi
          </span>{" "}
          tat <br />
          <span className="bg-yellow-400 text-red-600 text-[3rem] lg:text-[5rem] rounded-l-xl">
            en
          </span>
          <span className="bg-red-600 text-yellow-400 text-[3rem] lg:text-[5rem] rounded-r-xl">
            hızlı
          </span>{" "}
          teslimat!
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Kurucumuz Gustavo Fring, <i>Los Pollos Hermanos</i> fast food
          zincirinin işletmecisidir. Fast food ürünler imal edip satmaktadır.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-yellow-500 to-red-500 w-full md:w-auto px-4 py-2  rounded-lg cursor-default transition-all ease-in-out duration-100"
        >
          Sipariş Ver
        </button>
      </div>
      {/* anasayfa sol ekran sonu */}

      {/* anasayfa sağ ekran */}
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
          {foodData &&
            foodData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.desc}
                </p>
              </div>
            ))}
        </div>
      </div>
      {/* anasayfa sağ ekran sonu */}
    </section>
  );
};

export default HomeContainer;
