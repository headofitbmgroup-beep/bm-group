const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const form=document.getElementById('contactform');
if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);
 location.href=`mailto:${form.dataset.to}?subject=${encodeURIComponent('Enquiry from '+d.get('name'))}&body=${encodeURIComponent(d.get('message')+'\n\n'+d.get('email'))}`;});
// Shop (furniture only)
const grid=document.getElementById('products');
if(grid){
 const P=JSON.parse(grid.dataset.products),fmt=n=>'AED '+n.toLocaleString();
 let cart={};try{cart=JSON.parse(localStorage.getItem('cart')||'{}')}catch{}
 const save=()=>{try{localStorage.setItem('cart',JSON.stringify(cart))}catch{}};
 const chips=document.getElementById('chips'),cats=['All',...new Set(P.map(p=>p[1]))];let cur='All';
 const draw=()=>{chips.innerHTML=cats.map(c=>`<button class="chip ${c===cur?'on':''}" data-c="${c}">${c}</button>`).join('');
  grid.innerHTML=P.map((p,i)=>(cur==='All'||p[1]===cur)?`<div class="card"><div class="thumb"></div><small class="dom">${p[1]}</small><h3>${p[0]}</h3><div class="row"><span class="price">${fmt(p[2])}</span><button class="btn" data-i="${i}">Add</button></div></div>`:'').join('');};
 const drawCart=()=>{const ids=Object.keys(cart);let t=0;
  document.getElementById('lines').innerHTML=ids.length?ids.map(i=>{t+=P[i][2]*cart[i];return `<div class="line"><span>${P[i][0]} × ${cart[i]}</span><span>${fmt(P[i][2]*cart[i])} <button class="chip" data-r="${i}">✕</button></span></div>`}).join(''):'<p>Your cart is empty.</p>';
  document.getElementById('total').textContent=fmt(t);document.getElementById('count').textContent=Object.values(cart).reduce((a,b)=>a+b,0);save();};
 document.addEventListener('click',e=>{const t=e.target;
  if(t.dataset.c){cur=t.dataset.c;draw()}
  if(t.dataset.i){cart[t.dataset.i]=(cart[t.dataset.i]||0)+1;drawCart();document.getElementById('cart').classList.add('open')}
  if(t.dataset.r){delete cart[t.dataset.r];drawCart()}
  if(t.id==='cartbtn'||t.dataset.close)document.getElementById('cart').classList.toggle('open');
  if(t.id==='checkout'){const body=Object.keys(cart).map(i=>`${P[i][0]} x${cart[i]}`).join('\n');location.href=`mailto:${grid.dataset.to}?subject=Order&body=${encodeURIComponent(body)}`}});
 draw();drawCart();
}
