
async function getResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos')
    let content = await response.json()
    content = content.splice(0, 5)
    let key;
    

    let list =document.querySelector('.flowers_section')
    
    for (const key in content) {
            list.innerHTML += `
            <div class="flower_big${key}">
                <img src="${content[key].url}" alt="">
                <p>${content[key].title}</p>
                <button class="but_shop">+</button>
            </div>
            <div class="flower_small${key}">
                <img src="${content[key].url}" alt="">
                <p>${content[key].title}</p>
                <button class="but_shop">+</button>
                        
            </div>
           
        `
    
        
        console.log(content[key])
        console.log(key)
    }
}
getResponse()

