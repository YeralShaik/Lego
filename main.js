const modal = document.querySelector('.modal');
const button1 = document.querySelector('#button1');
const close = document.querySelector('.modal-content-close');



button1.addEventListener('click', ()=> {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})

close.addEventListener('click',() => {
    console.log('here')
    modal.classList.add('hidden')
    modal.classList.remove('visible')
}) 