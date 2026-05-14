function makesquare(){
    var time=Math.random()
time=time*5000;
setTimeout(function(){
   document.getElementById("square").style.display="block";
},time);
}
document.getElementById("square").onclick=function(){
   this.style.display="none";
   makesquare()
}
makesquare()
//alert(Date.now()/31104000000)
var x=" for start javascript";
//alert(document.getElementById("text").innerHTML+x);
document.getElementById("menu").onclick=function(){
   document.getElementById("empty").innerHTML="<ul><li>html</li><li>css</li><li>js</li></ul>";
   document.getElementById("empty").style.backgroundColor="#999";
   document.getElementById("empty").style.width="300px";
   document.getElementById("empty").style.position="absolute";
   document.getElementById("empty").style.opacity="1";
   document.getElementById("none").style.opacity="1";
   document.getElementById("menu").style.opacity="0";
}
document.getElementById("none").onclick=function(){
   document.getElementById("empty").style.opacity="0";
   document.getElementById("none").style.opacity="0";
   document.getElementById("menu").style.opacity="1";
}
document.getElementById("mybutton").onclick=function(){
   //alert("Hi!");
   document.getElementById("text").innerHTML=document.getElementById("text").innerHTML+x;
   document.getElementById("text").style.width="600px";
}
document.getElementById("circle").onclick=function(){
   document.getElementById("circle").style.backgroundColor="#7b2544";
   document.getElementById("circle").style.width="300px";
   document.getElementById("circle").style.width="300px";
   document.getElementById("box").style.backgroundColor="#7b2544";
}
var newtext=document.getElementById("newtext").value;

document.getElementById("addtext").onclick=function(){
   newtext=document.getElementById("newtext").value;
   document.getElementById("firstdiv").innerHTML=newtext;
   
}
document.getElementById("box").onclick=function(){
  document.getElementById("box").style.width="400px";
  document.getElementById("box").style.height="400px";
  document.getElementById("box").style.backgroundColor="#888";
  document.getElementById("circle").style.backgroundColor="#888";
} 
var newarray= new Array();
newarray[0]="abdo";
newarray[1]="qorany";
//alert(newarray);
myarray=["first",20,2,1999,"@#$!",Boolean(0),Boolean(1),["socend",5,Boolean(0)]];
myarray.push("deleted");
//myarray.pop();
//myarray.shift();
//myarray.splice(4,5)
//myarray.splice(0,0,Boolean(0),Boolean(1),["socend",5,Boolean(0)]);
//console.log(myarray);
//console.log(myarray[4][0]);
var x=5;
var y=6;
if(x==y){
  console.log(myarray[5]);
}
else{
console.log(myarray);
}
document.getElementById("sendbutton").onclick=function(){
if(document.getElementById("grade").value>100||document.getElementById("grade").value<0){
  alert("wrong value")
}
else if(document.getElementById("grade").value>=85){
   alert("excellent")
}
else if(document.getElementById("grade").value>=75){
   alert("very good")
}
else if(document.getElementById("grade").value>=65){
   alert("good")
}
else if(document.getElementById("grade").value>=55){
   alert("accepted")
}
else if(document.getElementById("grade").value>=50){
   alert("weak")
}
else if(document.getElementById("grade").value<50){
   alert("failed")
}
else{
   alert("wrong value")
}
}
for(var i=0;i<newarray.length;i++){
alert(newarray[i])

}
document.getElementById("guess").onclick=function(){
var x=Math.random();
x=6*x;
x=Math.floor(x)
if(document.getElementById("mynumber").value==x)
{
   alert("true guess "+x)
}
else{
   alert("false guess "+x)
}
}

function adding(a,b){
alert(a+b);
}
//adding(3,4)