const renderEl = document.querySelector("h1")

const getRandomEl = a => a[Math.floor(Math.random() * a.length)]

fetch("public/words.json")
    .then(response => response.json())
    .then(data => {
        const name = `${getRandomEl(data.firstWord)} ${getRandomEl(data.secondWord)} ${getRandomEl(data.thirdWord)}`
        const textNode = document.createTextNode(name)
        renderEl.appendChild(textNode)
    })
    .catch(() => {
        const errorNode = document.createTextNode("Whoops, this is broken.")
        renderEl.appendChild(errorNode)
    })