import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
 

  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide
         
          className="cursor-pointer"
        >
          <img src={"../images/category_0.jpg"} alt="Deal category" />
        </SwiperSlide>
        <SwiperSlide
           
          className="cursor-pointer"
        >
          <img src={"../images/category_1.jpg"} alt="Amazon category" />
        </SwiperSlide>
        <SwiperSlide
           
          className="cursor-pointer"
        >
          <img src={"../images/category_2.jpg"} alt="Fashion category" />
        </SwiperSlide>
        <SwiperSlide
           
          className="cursor-pointer"
        >
          <img src={"../images/category_3.jpg"} alt="Computers category" />
        </SwiperSlide>
        <SwiperSlide
           
          className="cursor-pointer"
        >
          <img src={"../images/category_4.jpg"} alt="Home category" />
        </SwiperSlide>
        <SwiperSlide
          
          className="cursor-pointer"
        >
          <img src={"../images/category_5.jpg"} alt="Mobiles category" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCategory;