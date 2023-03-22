/*
 * @Author: shulu
 * @Date: 2023-03-22 17:37:39
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-22 17:46:05
 * @Description: file content
 * @FilePath: /vue3-music/src/plugins/swiper.ts
 */
import { Navigation, Swiper, SwiperOptions } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const swiperParams: SwiperOptions = {
    modules:[Navigation],
    autoplay: true,
    slidesPerView: 3,
    spaceBetween: 50,
};

const swiper = new Swiper('.swiper', swiperParams);
export default swiper;