import { Image } from "antd";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";

export default function HeroSwiper() {
  const slides = Array.from({ length: 3 }).map(
    () =>
      "Clothing the Pandemic: A Virtual Exhibition of COVID-19 Face Masks by unused big something safe for work =))",
  );

  const settings: Settings = useMemo(
    () => ({
      adaptiveHeight: true,
      infinite: true,
      dots: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      arrows: false,
      appendDots: (dots) => (
        <ul
          style={{
            position: "absolute",
            bottom: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          {dots}
        </ul>
      ),
      customPaging: () => (
        <div className={`h-2.5 w-7 rounded-full bg-gray-400`}></div>
      ),
    }),
    [],
  );

  return (
    <Slider {...settings}>
      {slides.map((item) => (
        <div key={item} className="relative !block w-fit bg-white/50 font-bold">
          <Image
            src="image.png"
            alt="img"
            rootClassName="!block w-full max-h-[480px]"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black/35"></div>
          <Link to={""}>
            <h1 className="absolute left-0 top-[55%] line-clamp-3 text-ellipsis px-4 font-poppins text-[24px] font-semibold leading-7.5 text-white">
              {item}
            </h1>
          </Link>
        </div>
      ))}
    </Slider>
  );
}
