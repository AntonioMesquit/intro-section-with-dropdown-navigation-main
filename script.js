const abrir = document.querySelector(".list1");
const abrir2 = document.querySelector(".list2")
const menu = document.querySelector(".nav-list")
const burguer = document.querySelector(".burguer")
const sidebar = document.querySelector(".sidebar");
abrir.addEventListener('click' , () => {
 
    abrir.classList.toggle("active")
})
abrir2.addEventListener('click' , () => {
  
    abrir2.classList.toggle("active")
})

menu.addEventListener('click' , () => {
    menu.classList.toggle("active");
    
})
burguer.addEventListener('click' , () => {
    burguer.classList.toggle("active");
    sidebar.classList.toggle("active");
})