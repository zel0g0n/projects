let numRnd = Math.floor(Math.random()*100)
console.log(numRnd)
let input = document.querySelector(`input`);

let btn = document.querySelector(`.btn`);
let todoList = document.querySelector(`.tab__todo`)
let countChance = 0

btn.addEventListener(`click`,function(){
    if(input.value != ``){
        input.style.cssText = `
            border: 0;`;
        console.log(input.value)
        if(input.value>numRnd) {
           todoList.innerHTML += `
            <li style = 'font-family:sans-serif;'>Kiritgan soningiz katta, kichikroq son kiriting!</li>` 
            countChance+=1
        }else if(input.value<numRnd) {
            todoList.innerHTML += `
            <li style = 'font-family:sans-serif;'>Kiritgan soningiz kichik, kattaroq son kiriting!</li>`
            countChance+=1

        }else if(input.value==numRnd){
            countChance+=1

            todoList.innerHTML += `
            <li style = 'color: #fff;font-size: 20px;font-family: sans-serif;'>
                Barakalla siz topdingiz !!! <br>
                Sizning urinishlaringiz soni: ${countChance}
            </li>`
            input.setAttribute(`readonly`,`The End`)

            console.log(todoList)
            
        }
        
        
        input.value=``
    }else {
        input.style.cssText = `
            border: 1px solid red;`;
        console.log(false)
    }
    
})



let ranNum = Math.floor(Math.random()*100)

