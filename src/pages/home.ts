import { fixedHeader } from '$motion/fixedHeader';
import { heroScroll, heroHide } from '$motion/heroScroll';

export const home = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('home');

  // Fixed Header
  // const headerElement = document.querySelector('#homeHero') as HTMLElement;
  // fixedHeader(headerElement);

  // Hero Scroll
  // -------------
  heroScroll();
  heroHide();
};
