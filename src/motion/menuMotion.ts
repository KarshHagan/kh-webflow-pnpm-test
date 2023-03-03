import { gsap } from 'gsap';

export const menuMotion = () => {
  const body = document.body as HTMLElement;
  const navMenu = document.querySelector('#navMenu');
  const animation = gsap.timeline({ paused: true });
  animation.set(body, { overflow: 'hidden' });
  animation.to(navMenu, { display: 'block' });

  return animation;
};
