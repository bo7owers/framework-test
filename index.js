const body = document.querySelector('body');
const  btn = document.querySelector('button')

function changeHTML(content){
    body.innerHTML = content;
}

btn.addEventListener('click', changeHTML('hello world'))