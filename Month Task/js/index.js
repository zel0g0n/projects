let productAddition = document.querySelector(`.product__addition`),
    mainProductItem = document.querySelectorAll(`.main__product-item`),
    product = document.querySelectorAll(`.product`),
    activePic = document.querySelector(`.active`),
    date = document.querySelectorAll(`.time`),
    dec = document.querySelector('.dec'),
    inc = document.querySelector('.inc'),
    numCalc = document.querySelector(`.numcalc`),
    addBtn = document.querySelector(`.addcart`),
    modalWindowProduct = document.querySelector(`.modal__window-product`),
    modalWindowCross = document.querySelector(`.window__cross`),
    mainWindowGroup = document.querySelector(`.main__window-group`),
    modalProductItem = document.querySelectorAll(`.modal__product-item`),
    modalRightButton = document.querySelector(`.modal__window-left`),
    modalLeftButton = document.querySelector(`.modal__window-right`),
    modalWin = document.querySelectorAll(`.modal__win`),
    wrapper = document.querySelector(`.wrapper`)




//desktop tab
let activeModalItem=``;
let pos=0
productAddition.addEventListener(`click`,(e)=> {
    if(e.target.classList.contains(`product`)) {

        product.forEach((index,i) => {
            index.classList.remove(`active__addition-item`)
            if(e.target == index) {
                index.classList.add(`active__addition-item`)
                pos=i
            }
        })
        mainProductItem.forEach((index,i) => {
            index.classList.remove(`active`)
            if(pos == i) {
                index.classList.add(`active`)
                activeModalItem = index
            } 
        })
    }
    
})
//counter
inc.addEventListener(`click`,getInc)
dec.addEventListener(`click`,getDec)
function getInc() {
    let x = Number(numCalc.textContent)
    if(x<10) {
        numCalc.innerText = ++x
    }
    
}
function getDec() {
    let x = Number(numCalc.textContent)
    if(x>0){
        numCalc.innerText = --x
    }
}

//open cart
function openCart() {
    let cartBtn = document.querySelector(`.blog__cart-img`)
    let counter = document.querySelector(`.counter`)
    let openedItem = document.querySelector(`.modal__cart-block`)
    cartBtn.addEventListener(`click`,()=>{
        openedItem.classList.toggle(`active__modal-cart`)
    })
    counter.addEventListener(`click`,()=>{
        openedItem.classList.toggle(`active__modal-cart`)
    })
    
}
openCart()


//addcart
function addCart() {
    let counter = document.querySelector(`.counter`)
    let basketBtn = document.querySelector(`.cart__basket`)
    let openedItem = document.querySelector(`.modal__cart-block`)
    addBtn.addEventListener(`click`,()=> {
        counter.innerText=+counter.textContent + +numCalc.textContent
        if(counter.textContent!=0 && numCalc.textContent!=0){
            openedItem.classList.add(`active__modal-cart`)
        }
        numCalc.innerText = 0
        
        if(counter.textContent!=0){
            counter.style.display='block'
            document.querySelector(`.cart__data`).style.display=`flex`
            document.querySelector(`.check__cart`).style.display=`flex`
            document.querySelector(`.cart__alert`).style.display=`none`
            document.querySelector(`.cart__calc-item`).innerText=`$125.00 x ${counter.textContent}`
            document.querySelector(`.cart__calc-res`).innerText=`$${counter.textContent*125}.00`
        }
        
    })
    basketBtn.addEventListener(`click`,()=>{
        counter.innerText=`0`
        counter.style.display=`none`
        document.querySelector(`.cart__data`).style.display=`none`
        document.querySelector(`.check__cart`).style.display=`none`
        document.querySelector(`.cart__alert`).style.display=`block`
        document.querySelector(`.cart__calc-item`).innerText=`$125.00 x 0`
        document.querySelector(`.cart__calc-res`).innerText=`0` 
    })

    
}
addCart()

//desktop modal window
function getModalWin() {
    mainProductItem.forEach((item,index)=> {
        item.addEventListener(`click`,(e)=> {
                if(document.body.scrollWidth>=768) {
                    modalProductItem.forEach(item=>{
                        item.classList.remove(`active__modal`)
                    })
                    modalWin.forEach(item=>{
                        item.classList.remove(`active__addition-modal`)
                    })
                    if(index==pos) {
                        modalWindowProduct.style.cssText = `
                            display: flex
                        `;
                        modalProductItem[index].classList.add(`active__modal`)
                        modalWin[index].classList.add(`active__addition-modal`)
                        document.body.style.overflow=`hidden`
                    }
                }
                
        })
    })
    modalWindowCross.addEventListener('click',()=> {
        modalWindowProduct.style.cssText = `
        display: none;
        ` 
        document.body.style.overflow = 'auto';
    })

    modalRightButton.addEventListener(`click`,()=>{
        if(pos!=3) {
            pos++
            modalProductItem[pos-1].classList.remove('active__modal')
            modalWin[pos-1].classList.remove('active__addition-modal')
            modalProductItem[pos].classList.add('active__modal')
            modalWin[pos].classList.add('active__addition-modal')
        }else {

            modalProductItem[pos].classList.remove('active__modal')
            modalWin[pos].classList.remove('active__addition-modal')
            pos=0
            modalProductItem[pos].classList.add('active__modal')
            modalWin[pos].classList.add('active__addition-modal')
        }
    })
    modalLeftButton.addEventListener(`click`,()=>{
        if(pos!=0) {
            modalProductItem[pos].classList.remove('active__modal')
            modalWin[pos].classList.remove('active__addition-modal')
            pos--

            modalProductItem[pos].classList.add('active__modal')
            modalWin[pos].classList.add('active__addition-modal')

        }else {

            modalProductItem[pos].classList.remove('active__modal')
            modalWin[pos].classList.remove('active__addition-modal')

            pos=3
            modalProductItem[pos].classList.add('active__modal')
            modalWin[pos].classList.add('active__addition-modal')

        }
    })
    
}
getModalWin()


// mobile bars
function mobileModalHam() {
    let barsMenu = document.querySelector(`.bars-menu`)
    let closeBarsMenu = document.querySelector(`.cross`)
    barsMenu.addEventListener(`click`,()=>{
        document.querySelector(`.modal__nav`).style.cssText=`
            transform: translateY(0)`;
        document.body.style.overflow = `hidden`
    })
    closeBarsMenu.addEventListener(`click`,()=>{
        document.querySelector(`.modal__nav`).style.cssText=`
            transform: translateY(-100%)`;
        document.body.style.overflow = `auto`

    })
}
mobileModalHam()

//mobile tab

function getMobileTab() {
    let toRight = document.querySelector(`.toright`)
    let toLeft = document.querySelector(`.toleft`)
    let index = 0
    toLeft.addEventListener(`click`,()=>{
        mainProductItem.forEach((item,i)=>{
            item.classList.remove(`active`)
        })
        if(index==0){
            index=3
            mainProductItem[index].classList.add(`active`)
            index--
        }else {
            mainProductItem[index-1].classList.add(`active`)
            index--
        }
    })
    toRight.addEventListener(`click`,()=>{
        mainProductItem.forEach((item,i)=>{
            item.classList.remove(`active`)
        })
        if(index==3) {
            index=0
            mainProductItem[index].classList.add(`active`)
            index++
        }else {
            mainProductItem[index+1].classList.add(`active`)
            index++
        }
    })
}
getMobileTab()

















//timer section
function createDate(deadline) {
    let allMs=Date.parse(deadline)-new Date(),
        days=Math.floor(allMs/1000/60/60/24),
        hours=Math.floor(allMs/1000/60/60)%24,
        minutes=Math.floor(allMs/1000/60)%60,
        seconds=Math.floor(allMs/1000)%60
    return {
        allMs,
        days,
        hours,
        minutes,
        seconds
    }    
}
function setDate() {
    getDate(`2023-04-11`)
}
function checkIt(num) {

    if(num>=0 && num<10) {
        return `0${num}`
    }else if(num>=10) {
        return num
    }else if(num<0) {
        return `00`
    }
}
function getDate(deadline) {
    let ged=createDate(deadline);
    date[0].innerText=checkIt(ged.days)
    date[1].innerText=checkIt(ged.hours)
    date[2].innerText=checkIt(ged.minutes)
    date[3].innerText=checkIt(ged.seconds)
}
setDate()
setInterval(setDate,1000)



