const btnwhite = document.querySelector('.btn-white');
const notifycontainer = document.querySelector('.notify-container');
const bluesmall = document.querySelector('.blue-small')

btnwhite.addEventListener('click', () =>{
    notifycontainer.style.display = 'block';
})
bluesmall.addEventListener('click', () =>{
    notifycontainer.style.display = 'none'
})