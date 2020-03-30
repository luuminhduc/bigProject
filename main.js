const square = document.getElementById('square');
square.addEventListener('click', openSide);
function openSide(){
  const sideMenu = document.getElementById('side-menu');
  sideMenu.style.width = '250px';
  
};

const sideMenu = document.getElementById('side-menu');
const button = sideMenu.querySelector('a');
button.addEventListener('click', closeSide);
function closeSide(){
  const sideMenu = document.getElementById('side-menu');
  sideMenu.style.width = '0';
};
