// Geting all the element 
const parent = document.querySelector('.grid-container')
const result = document.querySelector('h3')
const running = document.querySelector('h2')

// Setting All Logic by boolean. As a begineer myself i had to use al lot of variable and boolean value
let temp = 0
let first = ''
let second = ''
let firstbook = true
let secondbook = false
let firstnum = false
let mngops = false 
let given 
let ops = ''
let opsTaker = false
let str = ''
let equalRun = true
let altwin = false
let numblock = true
// This is the reset Function when user clicked AC button Calculator Reset
const reset = function () {
    temp = 0
    first = ''
    second = ''
    firstbook = true
    secondbook = false
    firstnum = false
    mngops = false 
    given 
    ops = ''
    opsTaker = false
    equalRun = true
    altwin = false
    numblock = true
    str = ''
    result.textContent = 0
}

// The main Calculation 
const calculate = function (ops, first, second) {
    switch (ops) {
        case '+' : {
            result.textContent =`= ${+first + +second}`
            // console.log(+first + +second)
           given = +first + +second
        }
        break
        case '-' : {

            console.log(+first - +second)
           given = +first - +second
           result.textContent =`= ${(+first - +second).toFixed(2)}`

        }
        break 
        case '/' : {
            result.textContent =`= ${(+first / +second).toFixed(2)}`
            given = (+first / +second).toFixed(2)
        }
        break
        case '*' : {
            result.textContent =`= ${+first * +second}`
            given = +first * +second
        }
        break 
    }
}

parent.addEventListener('click', function(e) {

   


    if(firstbook) {

        if(e.target.value === 'c') {
            console.log('HI')
            if(first) {
                first = first.slice(0,-1)
                str = str.slice(0,-1)
                running.textContent = str
            calculate(ops, first, second)
            }
        }
        
    }


    if(!firstbook) {
        console.log('no')

        if(e.target.value === 'c') {
            equalRun = true
            str = ''
            if(second) {
                second = second.slice(0,-1)
                str = str.slice(0,-1)
                running.textContent = str
            calculate(ops, first, second)
            }
        }   
    }
    if(e.target.value === '%') {
        str = +first / 100
        result.textContent =`= ${(+first / 100).toFixed(2)}`
        running.textContent = +first / 100
        first = +first / 100
    }
    if(e.target.value === 'ac') {
        reset()
    equalRun = true
    str = ''
    altwin = false
    }
    //  altwin ?  alert("Please Click on AC (All Clear) button ") : ''
     
    if(!e.target.closest('.num') && !e.target.closest('.operator')) return

    if (numblock) {

        if (e.target.closest('.num')) {    
            // altwin ?  alert("Please Click on AC (All Clear) button ") : ''
            // altwin = false
            
            if(firstbook) {
                
                first+= e.target.value

                
            }
            if(!firstbook) {
                second+= e.target.value
                calculate(ops, first, second)
            }
            if(firstnum) {
                // calculate(ops, first, second)
                calculate(ops, first, second)
            }
            str+=e.target.value
            
            
            opsTaker = true
        }
        
    }
        

    if(opsTaker) {
        if(e.target.closest('.operator')) {
            numblock = true
            console.log("take")
            // str+=e.target.value
            // console.log(str+=e.target.value)
            if (mngops) {
                calculate(ops, first, second)
                first = given
                second = ''
            }
            ops = e.target.value
            firstbook = false
            mngops = true
            // console.log(+first)

            if(e.target.value === '=') {
                str+=e.target.value.slice(0,-1) 
                opsTaker = true
                numblock = false
                str = result.textContent.slice(1)
                console.log()
            } else {
                str+=e.target.value
                opsTaker = false 
            }

            // firstnum = !firstnum
        }
    }


    running.textContent = str

})


