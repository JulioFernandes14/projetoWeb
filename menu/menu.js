document.addEventListener("DOMContentLoaded",function(){

    const menu = document.querySelector('.menu');
    const menuOpen = document.querySelector('.menu-open');

    let controlador = false;

    menu.addEventListener('click',function(){

        if (controlador) {

            menuOpen.style.display = 'none';
            controlador = false;

        }else{
            
            menuOpen.style.display = 'block';
            controlador = true;

        }

    });

});