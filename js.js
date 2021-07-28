const contact   = document.getElementById("contact");
const popUp     = document.getElementById("popUp_1");
const deact     = document.getElementById("deactivator");
const div_0     = document.getElementById("main-post");
const div_1     = document.getElementById("post-1-tab");
const div_2     = document.getElementById("post-2-tab");
const div_3     = document.getElementById("post-3-tab");
const div_4     = document.getElementById("post-4-tab");

contact.onclick = showpop;
deact.onclick   = showpop;

function showpop(){
    popUp.classList.toggle('show');
    deact.classList.toggle('show');
}

div_1.addEventListener('click', activator);
div_1.addEventListener('click', show);

div_2.addEventListener('click', activator);
div_2.addEventListener('click', show);

div_3.addEventListener('click', activator);
div_3.addEventListener('click', show);

div_4.addEventListener('click', activator);
div_4.addEventListener('click', show);


function activator(){
    div_1.classList.remove("active");
    div_2.classList.remove("active");
    div_3.classList.remove("active");
    div_4.classList.remove("active");
    this.classList.add("active");
}

function show(){
    const image = this.firstElementChild.firstElementChild.firstElementChild.src;
    const title = this.firstElementChild.lastElementChild.firstElementChild.innerHTML;
    div_0.firstElementChild.firstElementChild.firstElementChild.innerHTML = title;
    div_0.firstElementChild.style.backgroundImage = `url(${image})`;
    
}
