const B=document.body,D=B.dataset,P=[['index','Home'],['projects','Projects'],['teaching','Teaching'],['courses','Courses'],['writing','Writing'],['resume','Resume'],['contact','Contact']],cur=location.pathname.split('/').pop();
const m=document.querySelector('main');
m.insertAdjacentHTML('beforebegin','<header><a class="br" href="index.html">&lt;AK/&gt;</a><button id="mb" aria-label="Menu">\u2630</button><nav>'+P.map(([f,n])=>`<a href="${f}.html"${cur===f+'.html'||(cur===''&&f==='index')?' class="on"':''}>${n}</a>`).join('')+'</nav></header>');
m.insertAdjacentHTML('afterend','<footer>\u00a9 2026 Syed Abdullah Kazmi \u00b7 VIT Vellore</footer>');
document.getElementById('mb').onclick=()=>document.querySelector('header').classList.toggle('o');
const c=document.createElement('canvas');c.id='bg';B.prepend(c);
const x=c.getContext('2d'),S=[...(D.s||'01')],M=D.a||'rain',R=matchMedia('(prefers-reduced-motion:reduce)').matches;
let W,H,dr=[],pt=[];
function rs(){W=c.width=innerWidth;H=c.height=innerHeight;dr=Array.from({length:Math.ceil(W/18)},()=>Math.random()*H/18|0);pt=Array.from({length:36},()=>({x:Math.random()*W,y:Math.random()*H,v:.3+Math.random()*.8,s:16+Math.random()*30,c:S[Math.random()*S.length|0],r:Math.random()*6}))}
rs();addEventListener('resize',rs);
function f(){if(M==='rain'){x.fillStyle='rgba(7,13,26,.14)';x.fillRect(0,0,W,H);x.fillStyle='#00e5c3';x.font='16px monospace';dr.forEach((y,i)=>{x.fillText(S[Math.random()*S.length|0],i*18,y*18);dr[i]=y*18>H&&Math.random()>.97?0:y+1})}else{x.clearRect(0,0,W,H);x.fillStyle='#4d7cff';x.globalAlpha=.5;pt.forEach(p=>{x.font=p.s+'px serif';x.fillText(p.c,p.x+Math.sin(p.r+=.01)*20,p.y);p.y=p.y<-40?H+20:p.y-p.v});x.globalAlpha=1}if(!R)requestAnimationFrame(f)}
f();
const t=document.getElementById('ty');
if(t){const L=JSON.parse(t.dataset.l);let i=0,j=0,d=0;(function k(){const w=L[i];j+=d?-1:1;t.textContent=w.slice(0,j);if(!d&&j===w.length){d=1;return setTimeout(k,1400)}if(d&&j===0){d=0;i=(i+1)%L.length}setTimeout(k,d?35:70)})()}
const io=new IntersectionObserver(e=>e.forEach(n=>n.isIntersecting&&n.target.classList.add('v')),{threshold:.12});
document.querySelectorAll('.r').forEach(e=>io.observe(e));
