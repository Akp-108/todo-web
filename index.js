function addList(){
    // document.getElementById("pop").style.display="none";
    document.getElementById("pop").style.display = "inline-block";
    document.getElementById("mainContainer").style.filter="blur(5px)"
}

const tasklist=[]

function changeHere()

{

document.getElementById("content").style.display="none";
const name=document.getElementById("name").value




const tempObject={

taskname:name


}
tasklist.push(tempObject)
console.log(tasklist)

addtaskonScreen()

}

function addtaskonScreen()
{

const element=document.createElement("div")
element.setAttribute("class","child")
element.innerText=tasklist[tasklist.length-1].taskname

const ExistingElement=document.getElementById("parent")
ExistingElement.appendChild(element)

}
