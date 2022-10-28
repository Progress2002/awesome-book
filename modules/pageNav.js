/* eslint-disable */

import { list } from './navArr.js';

export const PAGE_NAVIGATION = () => {
  list.forEach((item, index) => {
    const link = document.getElementById(item.linkId);
    const page = document.getElementById(item.pageId);

    link.onclick = () => {
      if (index === 1) {
        link.style.color = 'rgb(241, 43, 43)';
        link.previousElementSibling.style.color = '#d3d3d3';
        link.nextElementSibling.style.color = '#d3d3d3';
        page.classList.remove('hiden');
        page.previousElementSibling.classList.add('hiden');
        page.nextElementSibling.classList.add('hiden');
      } else if (index === 0) {
        link.style.color = 'rgb(241, 43, 43)';
        link.nextElementSibling.style.color = '#d3d3d3';
        link.nextElementSibling.nextElementSibling.style.color = '#d3d3d3';
        page.classList.remove('hiden');
        page.nextElementSibling.classList.add('hiden');
        page.nextElementSibling.nextElementSibling.classList.add('hiden');
      } else {
        link.style.color = 'rgb(241, 43, 43)';
        link.previousElementSibling.style.color = '#d3d3d3';
        link.previousElementSibling.previousElementSibling.style.color = '#d3d3d3';
        page.classList.remove('hiden');
        page.previousElementSibling.classList.add('hiden');
        page.previousElementSibling.previousElementSibling.classList.add(
          'hiden',
        );
      }
    };
  });
};
