// import React from "react";
import React, { useRef, useState } from "react";
import "./Testimonials.scss";
import i1 from "../../images/1.png";
import i2 from "../../images/2.png";
import i3 from "../../images/3.png";
import PageHeadings from "../PageHeadings/PageHeadings";
//

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <PageHeadings name="Testimonials" />
      <box-icon type="solid" name="quote-alt-left"></box-icon>
      <div className="swiper">
        {/* <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            cd<i class="bx bxs-quote-alt-left"></i>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
}
//
