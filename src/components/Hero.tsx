"use client";
import Image from "next/image";
import Container from "./Container";
import CustomButton from "./CustomButton";

const Hero = () => {
  // const handleScroll = () => {
  //   const nextSection = document.getElementById("discover");

  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <Container className="flex xl:flex-row flex-col gap-5 relative z-0">
      <div className="flex-1 mt-24 lg:pt-32 padding-x">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[36px] font-extrabold">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="text-lg sm:text-[27px] text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-[#2B59FF] text-white rounded-full mt-10"
          // handleClick={handleScroll}
        />
      </div>
      <div className="xl:flex-1 flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-full xl:h-full h-[450px] sm:h-[590px] z-0">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden">
          <Image
            src="/hero-bg.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
