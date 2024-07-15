import CarouselCard from "./CarouselCard";
import styles from "./newsCarousel.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function NewsCarousel({ data }) {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.articles?.slice(0, 5).map((article) => (
          <SwiperSlide key={article.dataSourceIdentifier}>
            <CarouselCard
              image={article.images[0].url}
              headline={article.headline}
              description={article.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
