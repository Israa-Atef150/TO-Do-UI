let userInput=document.getElementById("userInput")
let homeContent=document.getElementById("homeContent")
let searchInput =document.getElementById("searchInput")
let alertInput =document.getElementById("alertInput")
let item=[]
if(localStorage.getItem("allItems")!=null){
    item= JSON.parse (localStorage.getItem("allItems"))
    display()
}


function addItem(){
    
if (userInput.value==""){
    alertInput.style.display="block"
}else{
     alertInput.style.display="none"
    item.push(userInput.value)
    userInput.value=""

    localStorage.setItem("allItems",JSON.stringify(item))
    display()
}
}

function display() {
    let cartona =``
    item.forEach((item,index)=>{
    
        cartona+=`
        
        <div
            class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center"
          >
            <p id="item" class="m-0 p-0">${item}</p>
          <i class="fa-sharp fa-solid fa-trash" onClick="dalet(${index})"></i>
          </div>
        
         
        
        `
    })

    homeContent.innerHTML=cartona;
}

 function dalet (index){
    item.splice(index,1)
    localStorage.setItem("allItems",JSON.stringify(item))
    display()
 }

 searchInput.addEventListener("input",function(event){
    searchItem(event.target.value)
 })
 function searchItem(searchValue) {
    let cartona = ``;
    item.forEach((items, index) => {
        if (items.toLowerCase().includes(searchValue.toLowerCase())) {
            cartona += `
            <div
                class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center"
              >
                <p id="item" class="m-0 p-0">
                  ${items.toLowerCase().replace(searchValue.toLowerCase(), `<span class="fw-bolder text-info">${searchValue}</span>`)}
                </p>
                <i class="fa-sharp fa-solid fa-trash" onClick="dalet(${index})"></i>
              </div>
            `;
        }
    });

    homeContent.innerHTML = cartona;
}
