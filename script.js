



let knowledgeEl=document.getElementById("knowledge-el")
let peopleEl=document.getElementById("people-el")
let plusEl=document.getElementById("plus-el")
let minusEl=document.getElementById("minus-el")
let buttonEl=document.querySelectorAll(".button-el")
let addEl=document.getElementById("add-el")
let listEl=document.getElementById("list-el")
let selectedPriority = ""
let people=0
let saveData=[]

let saveKey="saveData"
let saveText=localStorage.getItem(saveKey)
let data=JSON.parse(saveText)||[]
saveData.push(...data)
for(let i=0;i<saveData.length;i++){
    let liEl=document.createElement("li")
    liEl.innerHTML=
    "Проблема:"+saveData[i][0]+"<br>"+"Кількість людей:"+saveData[i][1]+"<br>"+"Рівень важливості :"+saveData[i][2]
    listEl.appendChild(liEl)
    let buttonDl=document.createElement("button")
    buttonDl.classList.add("delete-btn")
    buttonDl.innerHTML="Delete"
    liEl.appendChild(buttonDl)
    buttonDl.addEventListener('click',function(){
        saveData.splice(i,1)
     let saveText=JSON.stringify(saveData)
    localStorage.setItem(saveKey,saveText)
    liEl.remove()
    })
    }



addEl.addEventListener('click',function(){
    console.log(knowledgeEl.value)
    console.log(peopleEl.textContent)
    console.log(selectedPriority)
    saveData.push([knowledgeEl.value,peopleEl.textContent,selectedPriority])
    let saveText=JSON.stringify(saveData)
    localStorage.setItem(saveKey,saveText)
    let liEl=document.createElement("li")
    liEl.innerHTML="Проблема:"+knowledgeEl.value+"<br>"+"Кількість людей:"+peopleEl.textContent+"<br>"+"Рівень важливості :"+selectedPriority
    listEl.appendChild(liEl)
    let buttonDl=document.createElement("button")
    buttonDl.classList.add("delete-btn")
    buttonDl.innerHTML="Delete"
    liEl.appendChild(buttonDl)
    buttonDl.addEventListener('click',function(){
        liEl.remove()
    })
})
plusEl.addEventListener('click',function(){
    people+=1
   peopleEl.textContent=people
})
minusEl.addEventListener('click',function(){
    people=people-1
    peopleEl.textContent=people
})
buttonEl.forEach(function(button) {
    button.addEventListener("click", function() {
        selectedPriority = button.textContent
    })
})











