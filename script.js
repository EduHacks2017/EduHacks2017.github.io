let currTab;
let started=false;
let inputStr=`def myfunction() some text \n  some other text`;
let counter =  0;

function switchSelected(obj){
  let tabs=document.getElementsByClassName("languageTab");
  for(let i=0;i<tabs.length;i++){
    tabs[i].style.backgroundColor="#f7f7f7";
  }
  currTab=obj;
  currTab.style.backgroundColor="#d3d3d3";
}

function createSpans(str,area){
  let arr=str.split("");
  for(let i=0;i<arr.length;i++){
    let curr=arr[i];
    if(curr=="\n") area.innerHTML+="<div id=i"+i+">"+curr+"</div>";
    else if(curr==" ") area.innerHTML+="<span id=i"+i+">&nbsp;</div>";
    else area.innerHTML+="<span id=i"+i+">"+curr+"</span>";
  }
}

function start(tab){
  switchSelected(tab);
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

  let text=document.getElementById("text");

  createSpans(inputStr,text);

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
            console.log('fail!');
            return;
        }
    }

    // Enter
    if(event.keyCode===13){
        counter += str.length + 1;
        document.getElementById("input").value="";
    }
    console.log('pass!');
}