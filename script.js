
// window.alert("This calculates only if you handle with keyboards !!")
let h1=document.createElement("h1");
h1.id="title";
h1.textContent="Calculator";
const para=document.createElement("p");
para.id="description";
para.innerHTML="My RWD <b>Calculator</b> using Javascript DOM Manupilation"
function calCulator(tagname,content,attrname,attrvalue,idvalue,classvalue){
    let Container=document.createElement(tagname);
    Container.innerText=content;
    Container.setAttribute(attrname,attrvalue)
    Container.id=idvalue;
    Container.classList.add(classvalue)
    return Container;
};
let div1=calCulator("div","","id","div1","head","container",);
let div2=calCulator("div","","id","div1","childHead","calculator");
let input1=calCulator("input","","placeholder","0","result","result");
let button1=calCulator("button","C","type","button","clear","button2");
let button2=calCulator("button","Del","type","button","delete","button3");
let button3=calCulator("button",".","type","button",".","button");
let button4=calCulator("button","*","type","button","*","button");
let button5=calCulator("button","7","type","button","7","button");
let button6=calCulator("button","8","type","button","8","button");
let button7=calCulator("button","9","type","button","9","button");
let button8=calCulator("button","/","type","button","/","button");
let button9=calCulator("button","4","type","button","4","button");
let button10=calCulator("button","5","type","button","5","button");
let button11=calCulator("button","6","type","button","6","button");
let button12=calCulator("button","-","type","button","subtract","button");
let button13=calCulator("button","1","type","button","1","button");
let button14=calCulator("button","2","type","button","2","button");
let button15=calCulator("button","3","type","button","3","button");
let button16=calCulator("button","+","type","button","add","button");
let button17=calCulator("button","0","type","button","0","button");
let button18=calCulator("button","00","type","button","00","button");
let button19=calCulator("button","=","type","button","equal","button1");

div1.append(h1,para,div2);
div2.append(input1,button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11, button12,button13,button14,button15,button16,button17,button18,button19);
document.body.append(div1);

const buttons= document.querySelectorAll(".button");
buttons.forEach(button=>button.addEventListener("click",()=>fun(button.textContent)));
function fun(num){
    input1.value += num;
}
const eql=document.querySelector(".button1");
eql.addEventListener("click",foo);
function foo(){
    try{
        input1.value = eval(input1.value);
    }
    catch(err){
        alert("only numbers are allowed");
    }
}
const clr=document.querySelector(".button2");
clr.addEventListener("click",clrFunction);
function clrFunction(){
    input1.value = "";
}
const del=document.querySelector(".button3");
del.addEventListener("click",delFunction)
function delFunction(){
    input1.value = input1.value.slice(0,-1)
}
