import { getJournalEntries } from "./entries.js"
import { form } from "./form.js"

export const cards = () => {
    return `
    <main id="container">
    ${form()}
    
    
    <div class="sortedEntries">
        <div>
            <h2>Recent Entry</h2>
            <div id="recentEntry" class="jsEntries">
            ${getLatest(getJournalEntries().reverse())}
            </div>
        </div>
    <div>
        <h2>Remember This Entry?</h2>
        <div id="randomEntry" class="jsEntries">
        ${randomness()}
        </div>
    </div>
    <div>
        <h2>Happy Thoughts</h2>
        <div id="happyEntry" class="jsEntries">
        ${createEntry(getJournalEntries().filter(obj => obj.mood === "Happy"))} 
        </div>
    </div>
</div>

</main>
    
</article>

<article id="entries">
    <div class="edit">
        </div>
        <div class="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSti3_X4cLNHdFNX_mX6jaFcRg3qsHuT0Wh4w&usqp=CAU"
                    alt="A Thick Tome" class="logoImg" />
            <div id="jsEntries" class="jsEntries">
            ${createEntry(getJournalEntries().reverse())} 
            </div> 
    </div>
</article>
    </div>`
}



const createEntry = (param) => {
    let indexHTML = "<ol>"

    for (let i = 0; i < param.length; i++) {
        indexHTML = indexHTML + `<li>
    <div>
    <h2 class="entryNo--${param[i].id}">Entry No: ${param[i].id}</h2>
    <section>
    <h3 class="concept--${param[i].id}">${param[i].concept}</h3>
    <h4 class="date--${param[i].id}">${param[i].date}</h4>
    </section>
    <p class="entry--${param[i].id}">${param[i].entry}</p>
    <h4 class ="mood--${param[i].id}">Mood: ${param[i].mood}</h4>
    <img src="./images/delete.jpg" alt="" id="delete--${param[i].id}" class="jrnl-bttn delete"/>
    <img src="./images/edit.jpg" alt="" id="edit--${param[i].id}" class="jrnl-bttn"/>
    </div>
    </li>`

    }
    indexHTML = indexHTML + `</ol>`
    return indexHTML
}


const getLatest = (param) => {

    let latestEntry = param.shift()
    let html = `<ol><li><div>
    <h2>Entry No: ${latestEntry.id}</h2>
    <section>
    <h3>${latestEntry.concept}</h3>
    <h4>${latestEntry.date}</h4>
    </section>
    <p>${latestEntry.entry}</p>
    <h4>Mood: ${latestEntry.mood}</h4>
    <img src="./images/delete.jpg" alt="" id="recentDelete" class="jrnl-bttn"/>
    <img src="./images/edit.jpg" alt="" id="recentEdit" class="jrnl-bttn"/></div>
    </li><ol>`
    return html
}


const randomness = () => {
    let randomString = "<ol>"
    let randomNum = Math.floor(Math.random() * (getJournalEntries().length - 1)) + 1
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
<img src="./images/delete.jpg" alt="" id="randomDelete" class="jrnl-bttn"/>
<img src="./images/edit.jpg" alt="" id="randomEdit" class="jrnl-bttn"/>
</div>
</li>`
        }
    }

    randomString = randomString + `</ol>`
    return randomString
}

