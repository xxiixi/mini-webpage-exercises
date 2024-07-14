const panels = document.querySelectorAll('.panel')

// console.log(panels)
panels.forEach((panel) => {
    // console.log(panel)
    panel.addEventListener('click',() => {
        // 1. remove the active class
        removeActiveClasses();
        // 2. add a new class name
        panel.classList.add('active')

    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}