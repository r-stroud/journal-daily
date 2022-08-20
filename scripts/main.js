import { getJournalEntries } from "./entries.js"

// console.log(getJournalEntries())

// function show_image(src, width, height, alt) {
//     var img = document.createElement("img")
//     img.src = "../images/delete.jpg"
//     img.width = "200px"
//     img.height = "200px"
//     img.alt = ""

//     document.body.appendChild(img)
// }

const jrnlEntries = getJournalEntries()

// const blank = "<ol>"

// const reusableLoop = (array, blank) => {
//     for (const obj of array) {
//         blank = blank + `<li>
//         <div>
//         <h2>Entry No: ${obj.id}</h2>
//         <section>
//         <h3>${obj.concept}</h3>
//         <h4>${obj.date}</h4>
//         </section>
//         <p>${obj.entry}</p>
//         <h4>Mood: ${obj.mood}</h4>
//         </div>
//         </li>`
//         blank = blank + `</ol>`
//     }
// }

const jrnlFilter = jrnlEntries.filter(obj => obj.mood === "Happy")

console.log(jrnlFilter)

// console.log(reusableLoop(jrnlFilter, empty))

// const filterString = reusableLoop(jrnlFilter, blank2)

// console.log(filterString)



let empty = ""

for (const obj of jrnlFilter) {
    empty = empty + `<ol><li>
        <div>
        <h2>Entry No: ${obj.id}</h2>
        <section>
        <h3>${obj.concept}</h3>
        <h4>${obj.date}</h4>
         </section>
        <p>${obj.entry}</p>
        <h4>Mood: ${obj.mood}</h4>
         </div>
         </li>`
    empty = empty + `</ol>`

}

// console.log(empty)

// console.log(jrnlFilter)

document.getElementById("happyEntry").innerHTML = empty

let sortEntries = jrnlEntries.reverse()

// console.log(sortEntries)

let indexHTML = "<ol>"

for (let i = 0; i < sortEntries.length; i++) {
    indexHTML = indexHTML + `<li>
    <div>
    <h2>Entry No: ${sortEntries[i].id}</h2>
    <section>
    <h3>${sortEntries[i].concept}</h3>
    <h4>${sortEntries[i].date}</h4>
    </section>
    <p>${sortEntries[i].entry}</p>
    <h4>Mood: ${sortEntries[i].mood}</h4>
    </div>
    </li>`

    indexHTML = indexHTML + `</ol>`
}


document.getElementById("jsEntries").innerHTML = indexHTML

// console.log(indexHTML)

let latestEntry = jrnlEntries.shift()

const toHTML = (obj) => {
    return `<ol><li><div>
    <h2>Entry No: ${obj.id}</h2>
    <section>
    <h3>${obj.concept}</h3>
    <h4>${obj.date}</h4>
    </section>
    <p>${obj.entry}</p>
    <h4>Mood: ${obj.mood}</h4></div>
    </li><ol>`
}

const recentEntry = toHTML(latestEntry)

document.getElementById("recentEntry").innerHTML = recentEntry

// console.log(jrnlEntries)

let randomNum = Math.floor(Math.random() * 7) + 1

// console.log(randomNum)

let randomString = "<ol>";

for (const each of jrnlEntries) {
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
        randomString = randomString + `</ol>`

    }
}

document.getElementById("randomEntry").innerHTML = randomString


// console.log(journEntries);

// for (entry of journEntries) {
//     console.log(entry);
// }

// for (entry of journEntries) {
//     console.log(entry.concept);
// }

// for (entry of journEntries) {
//     if (entry.id % 2 == !0) {
//         console.log(entry);
//     }
// }





// const newEntry = (entry, date, mood) => {
//     return {
//         Entry: entry,
//         Date: date,
//         Mood: mood
//     }
// }

// const entryBobBob = newEntry("I love Functions!", "081922", "Crazy")

// const anotherFunction = (obj) => {
// return `<h2>${obj.entry}</h2>`
// }

// const actualEntryBobBob = anotherFunction(entryBobBob)

