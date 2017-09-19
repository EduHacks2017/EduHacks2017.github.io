let currTab;
let started=false;
let js=`var firstName, lastName, price, discount, fullPrice;\nfirstName = "John";\nlastName = "Doe";\nprice = 19.90;\ndiscount = 0.10;\nfullPrice = price * 100 / discount;`;
let python=`parents, babies = (1, 1)\nwhile babies < 100:\n print 'This generation has {0} babies'.format(babies)\n parents, babies = (babies, parents + babies)`;
let cpp=`#include <iostream>\nint main()\n{\nstd::cout << "Hello World!";\nstd::cout << std::endl;\nreturn 0;\n}`;
let counter =  0;
let inputStr="";
function switchSelected(obj,id){
  let tabs=document.getElementsByClassName("languageTab");

  document.getElementById("input").value="";
  counter=0;
  
  for(let i=0;i<tabs.length;i++){
    tabs[i].style.backgroundColor="#f7f7f7";
  }
  currTab=obj;
  currTab.style.backgroundColor="#d3d3d3";

  if(id==0){
    inputStr=js;
  }

  if(id==1){
    inputStr=cpp;
  }

  if(id==2){
    inputStr=python;
  }
  
}

function createSpans(str,area){
  let arr=str.split("");
  area.innerHTML="";
  for(let i=0;i<arr.length;i++){
    let curr=arr[i];
    if(curr=="\n") area.innerHTML+="<div id=i"+i+">"+curr+"</div>";
    else if(curr==" ") area.innerHTML+="<span id=i"+i+">&nbsp;</div>";
    else area.innerHTML+="<span id=i"+i+">"+curr+"</span>";
  }
}

function start(tab,id){
  switchSelected(tab,id);
  let text=document.getElementById("text");
  createSpans(inputStr,text);
  if(started) return;
  started=true;

  let container=document.getElementById("container");
  container.style.top="0px";
  container.style.left="0px";
  container.style.width="200px";
  container.style.marginTop="0px";

  let tabs=document.getElementsByClassName("languageTab");
  for(let i=0;i<tabs.length;i++){
    let tab=tabs[i];
    tab.style.height="60px";
    tab.style.width="200px";
    tab.style.fontSize="1.5em";
  }

  let main=document.getElementById("main");
  main.style.opacity=1;

  let input=document.createElement("input");
  input.setAttribute("onkeyup","validate(event)");
  input.setAttribute("id","input");
  main.appendChild(input);

  input.focus();
}

function validate(event) {

    let str = document.getElementById("input").value; // user typed in
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] !== inputStr[counter  + i]) {
            document.getElementById("result").innerHTML="Wrong!";
            document.getElementById("result").style.color="red";
            return;
        }
    }

    // Enter
    if(event.keyCode===13){
        counter += str.length + 1;
        document.getElementById("input").value="";
    }
    document.getElementById("result").innerHTML="Good.";
    document.getElementById("result").style.color="green";
}