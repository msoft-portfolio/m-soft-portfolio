function typeEffect(e,n){var t=e.innerHTML;e.innerHTML="";var r=0,a=setInterval(function(){r<t.length?(e.append(t.charAt(r)),r++):clearInterval(a)},n)}var speed=75,h2=document.querySelector("h2"),delay=h2.innerHTML.length*speed+speed;typeEffect(h2,speed);