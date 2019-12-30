export const writeToScreen = () => {
    alert('Hello world from webpack!');
}

export const changeH1 = text => {
    document.querySelector('h1').innerText = text;
}