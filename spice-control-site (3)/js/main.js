(function(){
var img=document.getElementById('logo'),cv=document.getElementById('gl');
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var S=document.querySelectorAll('.sc'),Y=[],GAP=12;
function meas(){var mx=document.documentElement.scrollHeight-innerHeight;Y=[].map.call(S,function(s){return Math.min(s.offsetTop+s.offsetHeight/2-innerHeight/2,mx);});}
function sec(y){var n=Y.length;if(y<=Y[0])return 0;for(var i=0;i<n-1;i++){if(y<=Y[i+1])return i+(y-Y[i])/Math.max(1,Y[i+1]-Y[i]);}return n-1;}
function fb(){img.hidden=false;cv.style.display='none';}
function init(){
try{
var RED=0xff1a1a,r=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true});
r.setPixelRatio(Math.min(devicePixelRatio||1,2));
var sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(45,1,.1,90),add=THREE.AdditiveBlending,scenes=[],spin=[],rings=[];
var tex=new THREE.Texture(img);tex.needsUpdate=true;
function mat(o){return new THREE.MeshBasicMaterial(o);}
function edges(g,c,o){return new THREE.LineSegments(new THREE.EdgesGeometry(g),new THREE.LineBasicMaterial({color:c,transparent:true,opacity:o}));}
function ring(a,w,c,o){return new THREE.Mesh(new THREE.TorusGeometry(a,w,8,140),mat({color:c,transparent:true,opacity:o}));}
function cvs(w,h){var c=document.createElement('canvas');c.width=w;c.height=h;return c;}
function rr(x,a,b,w,h,f,s){x.beginPath();if(x.roundRect)x.roundRect(a,b,w,h,12);else x.rect(a,b,w,h);x.fillStyle=f;x.fill();x.strokeStyle=s;x.lineWidth=2;x.stroke();}
function T(c){return new THREE.CanvasTexture(c);}
function label(t,w,h,fs){var c=cvs(w,h),x=c.getContext('2d');rr(x,2,2,w-4,h-4,'#0b0b0c','rgba(255,255,255,.22)');x.fillStyle='#ff1a1a';x.fillRect(0,0,10,h);x.fillStyle='#f4f4f2';x.font='600 '+fs+'px Archivo,sans-serif';x.textBaseline='middle';x.fillText(t,44,h/2);return T(c);}
function kpi(l,v,d){var c=cvs(512,340),x=c.getContext('2d');rr(x,2,2,508,336,'#0b0b0c','rgba(255,255,255,.2)');
x.fillStyle='#b5b5ba';x.font='500 30px Archivo,sans-serif';x.fillText(l,30,56);
x.fillStyle='#fff';x.font='700 54px Archivo,sans-serif';x.fillText(v,30,126);
x.fillStyle='#3ddc84';x.font='500 28px Archivo,sans-serif';x.fillText(d,30,172);
x.fillStyle='#ff1a1a';for(var i=0;i<12;i++){var b=40+((i*37)%90);x.fillRect(30+i*38,320-b,24,b);}
return T(c);}
function menu(){var c=cvs(512,420),x=c.getContext('2d');rr(x,2,2,508,416,'#0b0b0c','rgba(255,255,255,.2)');
x.font='500 34px Archivo,sans-serif';['Vendas','Clientes','Produtos','Relatórios','Configurações'].forEach(function(n,i){x.fillStyle='#ff1a1a';x.fillRect(34,50+i*72,16,16);x.fillStyle='#d8d8da';x.fillText(n,76,66+i*72);});return T(c);}
function dash(){var c=cvs(1024,640),x=c.getContext('2d'),i;x.fillStyle='#0a0a0b';x.fillRect(0,0,1024,640);x.fillStyle='#121214';x.fillRect(0,0,190,640);
x.font='600 21px Archivo,sans-serif';
['Dashboard','Operações','Financeiro','Clientes','Produtos','Relatórios','Configurações'].forEach(function(n,k){if(!k){x.fillStyle='#ff1a1a';x.fillRect(12,64,166,40);}x.fillStyle=k?'#8d8d92':'#fff';x.fillText(n,28,92+k*46);});
[['Faturamento','R$ 184.250,00'],['Lucro','R$ 61.980,00'],['Operações','248']].forEach(function(k,j){rr(x,220+j*265,30,245,120,'#101012','rgba(255,255,255,.14)');x.fillStyle='#9c9ca1';x.font='500 20px Archivo,sans-serif';x.fillText(k[0],236+j*265,62);x.fillStyle='#fff';x.font='700 32px Archivo,sans-serif';x.fillText(k[1],236+j*265,112);});
rr(x,220,170,780,230,'#101012','rgba(255,255,255,.14)');
x.beginPath();x.moveTo(240,370);for(i=0;i<=19;i++){x.lineTo(240+i*38,350-70*Math.abs(Math.sin(i/2.6))-i*4);}x.lineTo(962,370);x.closePath();x.fillStyle='rgba(255,26,26,.25)';x.fill();
x.beginPath();for(i=0;i<=19;i++){var px=240+i*38,py=350-70*Math.abs(Math.sin(i/2.6))-i*4;if(i)x.lineTo(px,py);else x.moveTo(px,py);}x.strokeStyle='#ff1a1a';x.lineWidth=4;x.stroke();
rr(x,220,420,780,200,'#101012','rgba(255,255,255,.14)');x.fillStyle='#fff';x.font='600 22px Archivo,sans-serif';x.fillText('Atividade recente',240,452);
x.font='500 19px Archivo,sans-serif';['Venda realizada','Novo usuário cadastrado','Operação concluída','Pagamento recebido'].forEach(function(t,k){x.fillStyle=k==2?'#ff1a1a':'#3ddc84';x.fillRect(240,478+k*34,10,10);x.fillStyle='#b5b5ba';x.fillText(t,264,486+k*34);});
return T(c);}
var gt=(function(){var c=cvs(256,256),x=c.getContext('2d'),gr=x.createRadialGradient(128,128,0,128,128,128);gr.addColorStop(0,'rgba(255,26,26,.55)');gr.addColorStop(1,'rgba(255,26,26,0)');x.fillStyle=gr;x.fillRect(0,0,256,256);return T(c);})();
function scene(i){var g=new THREE.Group();g.userData={i:i};var q=new THREE.Mesh(new THREE.PlaneGeometry(6,6),mat({map:gt,transparent:true,opacity:.28,blending:add,depthWrite:false}));q.position.z=-1.2;g.add(q);sc.add(g);scenes.push(g);return g;}
function card(g,t,w,h,x,y,z,ry){var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),mat({map:t,transparent:true}));m.position.set(x,y,z);m.rotation.y=ry;g.add(m);}
var SRC=["assets/img/cena-laptop.jpg", "assets/img/cena-cartoes.jpg", "", "assets/img/cena-globo.jpg"];
var ld=new THREE.TextureLoader();
SRC.forEach(function(u,i){var g=scene(i);if(i==2){var t3=tex.clone();t3.needsUpdate=true;t3.anisotropy=r.capabilities.getMaxAnisotropy();t3.repeat.set(.5104,.5104);t3.offset.set(.2368,.2727);var lm=new THREE.Mesh(new THREE.PlaneGeometry(3.2,3.2),mat({map:t3,transparent:true,blending:add,depthWrite:false}));g.add(lm);g.userData.p=lm;return;}ld.load(u,function(tx){tx.anisotropy=r.capabilities.getMaxAnisotropy();tx.minFilter=THREE.LinearMipmapLinearFilter;tx.needsUpdate=true;var a=tx.image.width/tx.image.height,hh=4.6,m=new THREE.Mesh(new THREE.PlaneGeometry(hh*a,hh),mat({map:tx,transparent:true,blending:add,depthWrite:false}));m.material.userData.o=1;m.material.userData.t=true;g.add(m);g.userData.p=m;});});
function fit(){var w=innerWidth,h=innerHeight,wide=w>=860,hw=2.24*w/h;r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();
scenes.forEach(function(g){var s=wide?Math.min(1,hw*.47/2.3):.42;g.scale.setScalar(s);g.userData.bx=wide?hw*.5:0;g.userData.by=wide?0:1.05;g.position.set(g.userData.bx,g.userData.by,0);});meas();}
addEventListener('resize',fit);addEventListener('load',meas);fit();
var tx=0,t=0,fcur=0,last=-1,dots=document.querySelectorAll('.dots a');
scenes.forEach(function(g){g.traverse(function(o){if(o.material){o.material.userData.o=o.material.opacity;o.material.userData.t=o.material.transparent;}});});
addEventListener('pointermove',function(e){tx=e.clientX/innerWidth-.5;});
(function loop(){
requestAnimationFrame(loop);
if(document.hidden)return;
if(!reduce)t+=.01;
fcur+=(sec(scrollY)-fcur)*(reduce?1:.12);cam.position.z=5.4;cam.lookAt(0,0,0);
scenes.forEach(function(g){var d=fcur-g.userData.i,k=Math.max(0,1-Math.abs(d)*2.2);g.visible=k>.01;if(!g.visible)return;g.position.x=g.userData.bx-d*.9;g.traverse(function(o){if(o.material){o.material.opacity=o.material.userData.o*k;o.material.transparent=o.material.userData.t||k<.999;}});});
var ci=Math.round(fcur);if(ci!==last){last=ci;dots.forEach(function(a,j){a.classList.toggle('on',j===ci);});}
scenes.forEach(function(g){g.rotation.y+=(tx*.25-g.rotation.y)*.05;});
rings.forEach(function(a){a.rotation.z=t*1.2;});
scenes.forEach(function(g){if(g.userData.p)g.userData.p.position.y=Math.sin(t*1.5+g.userData.i)*.06;});
r.render(sc,cam);
})();
}catch(e){fb();}
}
function start(){
if(typeof THREE==='undefined'){fb();return;}
if(!(img.complete&&img.naturalWidth)){img.onload=start;return;}
(document.fonts?document.fonts.load('600 40px Archivo'):Promise.resolve()).then(init,init);
}
start();
})();
