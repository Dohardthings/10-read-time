'use strict';
/* globals numWords, readTime */

const info = document.querySelectorAll(`.entry__info`);
const contents = document.querySelectorAll(`.entry__content`);

for (let i = 0; i < info.length; i++) {
  const timeEl = document.createElement(`li`);
  timeEl.classList.add(`read-time`);
  const loop = info[i];
  const blogPost = contents[i];

  loop.appendChild(timeEl);

  timeEl.innerText = `${readTime(blogPost.innerText, 200)} mins`;
}
