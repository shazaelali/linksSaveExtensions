let myLeads =[]
const inputEl = document.getElementById("input-el")
// const i can't reassigned like  inputEl ="hello"
const ulEl= document.getElementById("list-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const saveBtn = document.getElementById("input-save")
const tab =[{url:"https://www.youtube.com/watch?v=jS4aFq5-91M&t=23643s"}]
saveBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true, })
    console.log(tab[0].url)
    myLeads.push(tab[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})
// // I USED THIS THINGS TO SAVE THE DATA WHEN I REFRECH THE PAGE
// Get the leads from the localSorage -PS :JSON.parse()
// Store it itn variable, leadsFormLocalStorage

let leadsFormLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
// check if leadsFormlocalStorage is truthy
// if so set myLeads to its value and call renderLeads()
if (leadsFormLocalStorage) {
    myLeads= leadsFormLocalStorage
    render(myLeads)
}
function render(leads){
    let listItems =""
    for(let i=0 ; i<leads.length;i++){
        // Template strings 
        listItems += `
        <li>
           <a target="_blank" href="${leads[i]}">
              ${leads[i]}
           </a>
        </li>`
    }
    ulEl.innerHTML= listItems
    }
// double click 
deleteBtn.addEventListener("dblclick",function(){
    
    localStorage.clear()
    myLeads= []
    render(myLeads)
    
})
inputBtn.addEventListener("click",function(){
    if(inputEl.value !== ""){
        myLeads.push(inputEl.value)
        inputEl.value = ""
        // Save the myLeads array to localStorge
        // ps : remember JSON.stringify ()
        localStorage.setItem("myLeads",JSON.stringify(myLeads))


        render(myLeads)
        // to verify that it works :
        console.log(localStorage.getItem("myLeads"))
    }

})

// // let myLeads =`["enen"]`
// console.log(typeof myLeads)
// // Turn the myleads string into an array
// myLeads = JSON.parse(myLeads)
// // push a new value to the array
// myLeads.push("shaza")
// // turn the array into a string again 
// console.log(typeof myLeads)
// myLeads = JSON.stringify(myLeads)
// //  console.log the string using typeof to verfiy that it's a string
// console.log(typeof myLeads)