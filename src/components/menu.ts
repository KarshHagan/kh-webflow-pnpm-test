import { menuMotion } from '$motion/menuMotion';

export const menu = () => {
  const menuButton = document.querySelector('#navMenuButton') as HTMLElement;
  const menuAnimation = menuMotion();

  let menuOpen = false;
  menuButton.addEventListener('click', (e) => {
    menuOpen = !menuOpen;

    if (menuOpen === true) {
      // open animation
      menuAnimation.play();
    } else {
      // close animation
      menuAnimation.reverse();
    }
  });
};
