let dicionarioLinks = {
    "pYux8zKyVX4": "https://www.youtube.com/embed/pYux8zKyVX4?si=soMljqxUo2PITZi9",
    "sv9dDtYnE1g": "https://www.youtube.com/embed/sv9dDtYnE1g?si=ZLWzBqqL1DN3EZnC",
    "WRlfwBof66s": "https://www.youtube.com/embed/WRlfwBof66s?si=WKkLBKaaYCKDcue1",
    "4p7axLXXBGU": "https://www.youtube.com/embed/4p7axLXXBGU?si=rt0qPZzpEDOYHSkP",
    "OFLMhFuArXQ": "https://www.youtube.com/embed/OFLMhFuArXQ?si=Jm4VmLTOguSqOTzD",
    "8DhQG27oLPs": "https://www.youtube.com/embed/8DhQG27oLPs?si=ttcv9csMvWUkHPo_",
}


function mudarVideo(elemento){
    let videoIframe = document.getElementById('iframe-video');
    let srcAntigo = videoIframe.src;
    let chave = Object.entries(dicionarioLinks).find(([key, val]) => val === srcAntigo)?.[0];
    videoIframe.src = dicionarioLinks[elemento.dataset.info];
    elemento.dataset.info = chave;
    elemento.firstElementChild.src = `https://img.youtube.com/vi/${chave}/maxresdefault.jpg`;
}
