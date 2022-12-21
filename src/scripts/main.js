import AOS from "aos";
import 'aos/dist/aos.css'; 
(() => {
    AOS.init();
    document.addEventListener("click", e => {
        // const hBtn = document.querySelector('.hamburguer-button');
        const menuList = document.getElementById('menu-list');
        console.log(e.target.matches('.hamburguer-button'))
        if(e.target.matches('.hamburguer-button') && !menuList.hasAttribute("hidden")) {
            console.log('has not hiddent')
            return menuList.setAttribute("hidden", "true")            
        }

        if(e.target.matches('.hamburguer-button') && menuList.hasAttribute("hidden")) {
            console.log('has hiddent')
            return menuList.removeAttribute("hidden")           
        }

   
    })
})();