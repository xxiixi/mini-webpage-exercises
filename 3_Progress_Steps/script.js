const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


// console.log(circles)

let currentActiveCircle = 0

next.addEventListener('click',function(){
    
    if(currentActiveCircle < circles.length){
        currentActiveCircle++
        console.log(currentActiveCircle)
    }

    update()
})

prev.addEventListener('click',function(){
    
    if(currentActiveCircle > 0){
        currentActiveCircle--
        // console.log(currentActiveCircle)
    }

    update()
})

function update(){
    circles.forEach((circle, index) => {
        if(index <= currentActiveCircle){
            circle.classList.add('active')
            // console.log(index)
        }else{
            circle.classList.remove('active')
        }

        const actives = document.querySelectorAll('.active')

        progress.style.width = (((actives.length) -1) / ((circles.length)-1))*100 + '%'

        if(currentActiveCircle == 0){
            prev.disabled = true
        }else if(currentActiveCircle == 3){
            next.disabled = true
        }else{
            prev.disabled = false
            next.disabled = false
        }

    })
}
