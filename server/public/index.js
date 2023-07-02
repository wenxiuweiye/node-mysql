let search_value;
const wrapper = document.getElementById("search_wrapper")
const list = document.createElement("div")
wrapper.appendChild(list)
list.id = "search_list"

const searchInput = document.getElementById("search_input")
searchInput.addEventListener("input",(e)=>{
    while (list.children.length != 0) {
        list.removeChild( list.children[list.children.length-1])
    }
    if (e.target.value.trim() === '') {
         console.log("输入为空");
         
    }
    else{
        console.log(e.target.value);
        search_value = e.target.value
        fetch(`http://localhost:8080/books?search=`+e.target.value)
        .then(res => res.json())
        .then(res => {
            createEle(res.length,res)
        })
    }
    
})

function createEle( length , resData ){
    for(let i=0; i < length;i++){
        const item = document.createElement("div")
        const bookName = document.createElement("div")
        const author = document.createElement("div")
        item.id = "search_item";
        bookName.className = "search_item_text";
        bookName.innerText = resData[i].bookName
    
        author.className = "search_item_text";
        author.innerText = resData[i].author
        item.appendChild(bookName)
        item.appendChild(author)
        list.appendChild(item)
    }
}

// function delay(fn,delayTime) {
//     let lastTime = Date.now()

//     return function(){
//         let currentTime = Date.now()
//         if (currentTime - lastTime >= delayTime) {
//             fn()
//         }
//     }
// }
