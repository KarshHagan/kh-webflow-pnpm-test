import { fixedHeader } from '$motion/fixedHeader';

export const caseTemplate = () => {
  // ---------------
  // Page Globals
  // ---------------

  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);
};
