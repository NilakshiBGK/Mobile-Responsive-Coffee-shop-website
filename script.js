
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
  navibar.classList.remove('active');
}

let navibar = document.querySelector('.navibar');

document.querySelector('#menu-icon').onclick = ()=>{
  navibar.classList.toggle('active');
  search.classList.remove('active');
}
window.onscroll = ()=>{
  navibar.classList.remove('active');
  search.classList.remove('active');
}