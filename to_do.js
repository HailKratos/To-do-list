const inputbox= document.getElementById("input-box");
const listcontainer= document.getElementById("list-container");

function addtext(){
    if (inputbox.value===""){
        alert("write something")
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let mark= document.createElement("mark");
        mark.innerHTML="\u00d7";
        li.appendChild(mark);
    }
    inputbox.value="";
    savedata();
}

listcontainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "MARK"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();