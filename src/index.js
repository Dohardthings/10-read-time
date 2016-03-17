'use strict';
/* globals numWords, readTime */
const entries = document.querySelectorAll(`.entry`);
const bodyEl = document.querySelector(`body`);
const nav = document.createElement(`nav`);
bodyEl.appendChild(nav);
const info = document.querySelectorAll(`.entry__info`);
const posts = document.querySelectorAll(`.entry__content`);
const postTitles = document.querySelectorAll(`.entry__title`);

for (let i = 0; i < info.length; i++) {
  const timeEl = document.createElement(`li`);
  const link = document.createElement(`a`);
  const currentInfo = info[i];
  const currentPost = posts[i];

  timeEl.classList.add(`read-time`);
  currentInfo.appendChild(timeEl);
  nav.appendChild(link);
  link.setAttribute(`href`, `#${entries[i].id}`);
  link.innerText = `${postTitles[i].innerText}`;

  timeEl.innerText = `${readTime(currentPost.innerText, 200)} mins`;
}
