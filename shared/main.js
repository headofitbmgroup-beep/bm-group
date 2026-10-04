const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const form=document.getElementById('contactform');
if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);
 location.href=`mailto:${form.dataset.to}?subject=${encodeURIComponent('Enquiry from '+d.get('name'))}&body=${encodeURIComponent(d.get('message')+'\n\n'+d.get('email'))}`;});
