let prevY = window.pageYOffset;
let count= 0;
let currPageH = document.querySelector("nav[curr-page-h]");
let currPageA = document.querySelector("nav[curr-page-a]");
let currPageG = document.querySelector("nav[curr-page-g]");

if(currPageH){
  document.querySelector('a[href="/"]').style.borderBottom= "1px solid rgb(90,90,90)";
}else if(currPageA){
  document.querySelector('a[href="/about/"]').style.borderBottom= "1px solid rgb(90,90,90)";
}else if(currPageG){
  document.querySelector('a[href="/guides/"]').style.borderBottom= "1px solid rgb(90,90,90)";
}

/*let winWidth = window.innerWidth;*/
window.onscroll= function (){
  let currY = window.pageYOffset;
  count+=1;
  if(count%10===0){
    if(prevY>currY || currY< 500){
      document.querySelector("header").style.top= "0";
      }else{
        document.querySelector("header").style.top = "-3.5em";
      }
    prevY = currY;
  }
};