const convidado = document.querySelectorAll('.convidado'); 
const shortbio = document.querySelectorAll('.short-bio');

convidado.forEach((el,index) => {
    el.addEventListener('click', () => {
        shortbio[index].classList.toggle('is-active');
    });    
}); 


