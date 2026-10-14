
const menu=document.querySelector('.menu'),links=document.querySelector('.navlinks');
if(menu)menu.onclick=()=>links.classList.toggle('open');
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.navlinks a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
