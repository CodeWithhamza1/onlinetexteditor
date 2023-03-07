

const textarea = document.querySelector('textarea');
const write = document.getElementById('countnos');
let key = document.getElementById('key');

setInterval(() => {
    let time = new Date().toLocaleTimeString();
    let timearea = document.getElementById('time').innerText = `Time:    ${time}`;
    console.log("Mahar Hamza")
}, 1000);

let btn_reload = document.getElementById('btn');
btn_reload.addEventListener('click', () => {
    window.location.reload()
})

function run() {
    const text = textarea.value;
    const textlength = textarea.value.length;
    write.innerText = `${textlength}`;
    localStorage.setItem('userText', text)
    key.innerText = `${event.key}`

    let userFetch = localStorage.getItem('userText')


}
let userFetch = localStorage.getItem('userText')
textarea.innerText = `${userFetch}`
window.addEventListener('load', () => {
    write.innerText = textarea.value.length;
})