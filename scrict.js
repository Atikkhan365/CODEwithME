let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click",()=>{
    ul.classList.toggle("icon_active");

    let icon_fst = icon.firstElementChild;
    if(ul.classList.contains('icon_active')){

        icon_fst.classList.replace('ri-menu-3-line','ri-close-large-line');
    }
    else{
        icon_fst.classList.replace('ri-close-large-line','ri-menu-3-line');
    }

});