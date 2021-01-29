// Import Swiper React components
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, animateScroll as scroll } from "react-scroll";
// Import Swiper styles
import 'swiper/swiper.scss';
import  s from'./comon.module.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { connect } from 'react-redux';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

let SwiperComponent = (props) => {

 let SwiperItem = props.images.map(i => {
 return <SwiperSlide key={i.id}><img className={s.swiperPhoto} src={i.photo} alt="slider"/>
 <div>
     <h1>Attenition</h1>
     <p>Hello </p>
     <Link to="section1"
       smooth={true}
       offset={-70}
       duration={500}
       className={s.btn}>
       Перейти в меню
     </Link>
 </div>
 </SwiperSlide> 

})
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
    //   onSlideChange={null}
      // navigation
      // pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      className={s.swiper}
    >
        {SwiperItem}
    </Swiper>
  );
};


let mapStateToProps = (state) => {
    return {
        images: state.swiper.images
    }
}

let SwiperContainer = connect(mapStateToProps)(SwiperComponent)


export default SwiperContainer