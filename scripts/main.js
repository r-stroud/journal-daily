import { getJournalEntries } from "./entries.js"

const jrnlEntries = getJournalEntries()

const createEntry = (param) => {
    let indexHTML = "<ol>"

    for (let i = 0; i < param.length; i++) {
        indexHTML = indexHTML + `<li>
    <div>
    <h2>Entry No: ${param[i].id}</h2>
    <section>
    <h3>${param[i].concept}</h3>
    <h4>${param[i].date}</h4>
    </section>
    <p>${param[i].entry}</p>
    <h4>Mood: ${param[i].mood}</h4>
    </div>
    </li>`


    }
    indexHTML = indexHTML + `</ol>`
    return indexHTML
}


document.getElementById("jsEntries").innerHTML = createEntry(getJournalEntries().reverse())
document.getElementById("happyEntry").innerHTML = createEntry(getJournalEntries().filter(obj => obj.mood === "Happy"))


const getLatest = (param) => {

    let latestEntry = param.shift()
    let html = `<ol><li><div>
    <h2>Entry No: ${latestEntry.id}</h2>
    <section>
    <h3>${latestEntry.concept}</h3>
    <h4>${latestEntry.date}</h4>
    </section>
    <p>${latestEntry.entry}</p>
    <h4>Mood: ${latestEntry.mood}</h4></div>
    </li><ol>`
    return html
}

document.getElementById("recentEntry").innerHTML = getLatest(getJournalEntries())

const randomness = () => {
    let randomString = "<ol>"
    let randomNum = Math.floor(Math.random() * 6) + 1
    for (const each of getJournalEntries()) {


        if (randomNum === each.id) {
            randomString = randomString + `<li>
<div>
<h2>Entry No: ${each.id}</h2>
<section>
<h3>${each.concept}</h3>
<h4>${each.date}</h4>
</section>
<p>${each.entry}</p>
<h4>Mood: ${each.mood}</h4>
</div>
</li>`
        }
    }

    randomString = randomString + `</ol>`
    return randomString
}

document.getElementById("randomEntry").innerHTML = randomness()
