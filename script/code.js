const aboutMe = [
    "I graduated at Tshwane University of Technology in 2014 as a Software Developer and I've gained knowledge in data science, database, programming, data analysis, project management and many more.",
    "I am currently employed as a coding lecturer at Life Choices and also run my own business, JT Devs. As a part-time YouTuber, I teach people different programming languages."
]
const aboutContent = document.querySelector('[about-content]')
let cnt = 0
function displayContent() {
    if (cnt == aboutMe.length)
        cnt = 0
    aboutContent.textContent = aboutMe[cnt]
    setTimeout(displayContent, 5000)
    cnt++
}
displayContent()
// Current year
document.querySelector('[cYear]').textContent = new Date().getUTCFullYear()