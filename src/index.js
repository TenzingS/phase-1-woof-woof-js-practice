document.addEventListener("DOMContentLoaded", () => {
    fetchDogs()
})

function fetchDogs(){
    fetch("http://localhost:3000/pups")
    .then(res => res.json())
    .then(data => data.forEach(renderPups))
}

function renderPups(pups){
    const span = document.createElement('span')
    span.textContent = pups.name
    span.addEventListener('click', () => {
        renderPupsInfo(pups)
    })

    const nameBar = document.getElementById("dog-bar")
    nameBar.append(span)
}

function renderPupsInfo(pups){
    const img = document.createElement('img')
    img.src = pups.image

    const name = document.createElement('h2')
    name.textContent = pups.name

    const goodbadBtn = document.createElement('button')
    if (pups.goodbadBtn){
        goodbadBtn.textContent = "Good Dog!"
    } else {
        goodbadBtn.textContent = "Bad Dog!"
    }

    const pupInfo = document.getElementById('dog-info')
    pupInfo.innerHTML = ""
    pupInfo.append(name, img, goodbadBtn)
    console.log(pups)
}