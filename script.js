var currTab;

function switchSelected(obj){
  var tabs = document.getElementsByClassName("languageTab");
  for(var i=0;i<tabs.length;i++){
    tabs[i].style.backgroundColor="#f7f7f7";
  }
  currTab=obj;
  currTab.style.backgroundColor="#d3d3d3";
}

function start(tab){
  switchSelected(tab);

  var box = document.getElementById("container");
  box.style.top="0px";
  box.style.left="0px";
  box.style.width="200px";
  box.style.marginTop="0px";

  var tabs = document.getElementsByClassName("languageTab");
  for(var i=0;i<tabs.length;i++){
    var tab=tabs[i];
    tab.style.height="60px";
    tab.style.width="200px";
    tab.style.fontSize="1.5em";
  }
}