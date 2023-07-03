// 获取 search_wrapper 
const wrapper = document.getElementById("search_wrapper")
const list = document.createElement("div")
wrapper.appendChild(list)
list.id = "search_list"

const searchInput = document.getElementById("search_input")
searchInput.addEventListener("input",(e)=>{
    const value = e.target.value.trim() 
    while (list.children.length != 0) {
        list.removeChild( list.children[list.children.length-1])
    }
    if (value === '') {
         console.log("输入为空");
         
    }
    else{
        console.log(value);
        fetch(`http://localhost:8080/books?search=`+value)
        .then(res => res.json() )
        .then(res => {
            createEle(res.length,res)
        })
    }
    
})
/**
 * 创建HTML元素
 * @param {number} length 创建item元素所需数量 
 * @param {array} resData 元素展示所需的值（Response Body）
 */
function createEle( length , resData ){
    for(let i=0; i < length;i++){
        
        const item = document.createElement("div")
        const bookName = document.createElement("div")
        const author = document.createElement("div")

        item.id = "search_item";

        bookName.className = "search_item_text";
        bookName.innerText = resData[i].bookName //id
    
        author.className = "search_item_text";
        author.innerText = resData[i].author    //
        item.appendChild(bookName)
        item.appendChild(author)
        list.appendChild(item)
    }
}