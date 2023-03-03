import { menu } from '$components/menu';
import { cases } from '$pages/cases';
import { home } from '$pages/home';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// kh ///');

  // ---------------
  // Site Globals
  // ---------------
  menu();

  // ---------------
  // Page Routing
  // ---------------
  const windowLocation = window.location.pathname as string;
  if (windowLocation === '/') {
    home();
  } else if (windowLocation === '/case-studies') {
    cases();
  }
});
