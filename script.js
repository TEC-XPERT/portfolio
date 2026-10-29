(function(){
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
  var links=document.querySelectorAll('nav a');
  if(!('IntersectionObserver' in window))return;
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){
        links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id);});
      }
    });
  },{rootMargin:'-40% 0px -55% 0px'});
  document.querySelectorAll('main section[id]').forEach(function(s){io.observe(s);});
})();
