import { useMemo } from "react";
import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";

export default function HeroSwiper() {
  const slides = Array.from({ length: 3 }).map(
    () =>
      "Clothing the Pandemic: A Virtual Exhibition of COVID-19 Face Masks by unused big boobs bra",
  );

  const settings: Settings = useMemo(
    () => ({
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
        <div
          // to={""}
          key={item}
          className="relative min-h-44 w-fit overflow-hidden bg-white/50 font-bold"
        >
          <img src="image.png" alt="img" className="w-full object-cover" />
          <div className="absolute inset-0 bg-black/35"></div>
          <Link to={""}>
            <h1 className="leading-7.5 absolute left-0 top-1/2 line-clamp-3 text-ellipsis px-4 font-poppins text-[24px] font-semibold text-white">
              {item}
            </h1>
          </Link>
        </div>
      ))}
    </Slider>
  );
}
