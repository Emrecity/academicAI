import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css"
import { Pagination,Autoplay } from 'swiper/modules';



const scrollCarousel = () => {
  return (
    <div className='p-5 flex items-center border-t-slate-400 border-t-2 justify-center rounded shadow-md sm:mt-10 bg-slate-100'>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src='word_one.png'/></SwiperSlide>
        <SwiperSlide><img src='word_two.png'/></SwiperSlide>
        <SwiperSlide><img src='word_three.png'/></SwiperSlide>
        <SwiperSlide><img src='word_four.png'/></SwiperSlide>
        <SwiperSlide><img src='word_five.png'/></SwiperSlide>
        <SwiperSlide><img src='word_six.png'/></SwiperSlide>
        <SwiperSlide><img src='word_seven.png'/></SwiperSlide>
        <SwiperSlide><img src='word_eight.png'/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default scrollCarousel