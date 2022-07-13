window.addEventListener("scroll", event => {
    let scroll = this.scrollY;
    if(scroll >= 900){
       applyNavbarTheme(true);
    }else{
        applyNavbarTheme(false);
    }
});

window.onload = () => {
    let body = document.getElementsByTagName("body");
    setTimeout(() => {
        body[0].classList.remove("preload");
    }, 1);
}

applyNavbarTheme = (e) => {
    let navbar = document.getElementById("navbar");
    let navbarChilds = navbar.getElementsByTagName("li");
    let navbarTitle = navbar.childNodes;
    Array.from(navbarChilds).forEach(element => {
        let navbarLink = element.getElementsByTagName("a");
        if(e){
            navbarLink[0].style.color = "white";
            navbarTitle[1].childNodes[0].style.color = "white";
            navbar.style.backgroundColor = "#2678ff";
        }else{
            navbarLink[0].style.color = "#2678ff";
            navbarTitle[1].childNodes[0].style.color = "#2678ff";
            navbar.style.backgroundColor = "white";
        }
    });
}

// document.getElementById("btn-seemore").onclick = () => {
//     alert("Hi");
// }