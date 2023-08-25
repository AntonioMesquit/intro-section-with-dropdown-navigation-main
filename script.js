const abrir = document.querySelector(".list1");
const abrir2 = document.querySelector(".list2")
const featuresMobile = document.querySelector(".features-mobile")
const burguer = document.querySelector(".burguer1")
const sidebar = document.querySelector(".sidebar");
const company = document.querySelector(".company-mobile")




abrir.addEventListener('click' , () => {
 
    abrir.classList.toggle("active")
})
abrir2.addEventListener('click' , () => {
  
    abrir2.classList.toggle("active")
})


burguer.addEventListener('click' , () => {
    burguer.classList.toggle("active");
    sidebar.classList.toggle("active");
  
})
featuresMobile.addEventListener('click' , () => {
    featuresMobile.classList.toggle("active")
 })
 company.addEventListener('click' , () => {
    company.classList.toggle("active")
 })