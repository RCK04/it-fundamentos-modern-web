const image = document.querySelector("img");

image.onclick = () => {
    let src = image.getAttribute("src");
    if(src === "./src/images/js-image.png"){
        image.setAttribute("src", "./src/images/css-image.png");
    
    } else{
        image.setAttribute("src", "./src/images/js-image.png");
    }
}
