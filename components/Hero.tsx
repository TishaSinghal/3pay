"use client";
import Image from "next/image";
import ButtonCopy from "./ButtonCopy";

const Hero = () => {
  return (
    <section className="max-container bg-customLBlue padding-container flex flex-col pt-10 gap-20 md:gap-28 lg:pt-20 xl:flex-row ">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-37 text-customDBlue">
          3Pay : <br />
          Your Payment,
          <br /> Your Way.
        </h1>
        <p className="regular-16 text-bold mt-6 text-gray-30 xl:max-w-[520px]">
          Bringing the future of payments to the present, with secure and
          effortless cryptocurrency transactions across all your Web 2.0
          platforms.
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row mt-4">
          <ButtonCopy
            type="button"
            title="npm i 3pay"
            variant="btn_black_text"
            icon="/copy.png"
          />
        </div>
      </div>

      <div className="flexCenter max-container bg-customLBlue h-[440px] relative w-1/2">
        <div className="absolute z-30 flex bg-white py-8 pl-5 pr-16 gap-3 rounded-3xl border shadow-md md:left-[50%] lg:bottom-60 ">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-14 text-gray-20">Web2</p>
              </div>
              <p className="bold-16 mt-2">Payment Gateway</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-14 text-gray-20">Web3</p>
              <h4 className="bold-16 mt-2 whitespace-nowrap">Crypto Wallet</h4>
            </div>
          </div>
        </div>

        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <Image
            src="/blockchain.png"
            alt="camp"
            width={50}
            height={50}
            className="absolute bottom-[-120px] left-[-180px] md:left-[50px] w-[300px] h-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
