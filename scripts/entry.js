import { form } from "./form.js"
import { cards } from "./cards.js"
import { addNewEntry, deleteCard, editCard, getJournalEntries } from "./entries.js"
import { editForm } from "./editForm.js"

export const html = () => {
    return `
    <section class="profile">
        <h1>Daily Journal</h1>
        <h2>Robert's Entries</h2>
    </section>
    <div class="page">
        <article>
            <main id="container">
            ${cards()}
        `
}

document.addEventListener("click", (event) => {
    if (event.target.id === "recordJrnlEntry") {
        const dateSubmission = document.querySelector("input[name=dateEntry]").value
        const conceptSubmission = document.querySelector("input[name=conceptEntry]").value
        const entrySubmission = document.querySelector("textarea[name=entryEntry]").value
        const moodSubmission = document.querySelector("select[name=mood]").value

        const newSubmission = {
            id: 0,
            date: dateSubmission,
            concept: conceptSubmission,
            entry: entrySubmission,
            mood: moodSubmission
        }
        addNewEntry(newSubmission)
    }
})

document.addEventListener("click", event => {
    if (event.target.id.startsWith("delete")) {
        const objId = event.target.id.split("--")[1]
        deleteCard(parseInt(objId))
    }
})

const editFormSelections = (num) => {
    const filterEntries = getJournalEntries().filter(obj => obj.id == num)



    const findDate = filterEntries[0].date
    const findEntry = filterEntries[0].entry
    const findConcept = filterEntries[0].concept
    const findMood = filterEntries[0].mood

    // const moodElement = document.getElementById(findMood)
    // moodElement.setAttribute("selected")

    const replaceDate = document.querySelector(".editDate")
    const replaceEntry = document.querySelector(".editEntry")
    const replaceConcept = document.querySelector(".editConcept")
    // const replaceMood = document.getElementById(`${}`)

    replaceDate.value = `${findDate}`
    replaceEntry.value = `${findEntry}`
    replaceConcept.value = `${findConcept}`
}


document.addEventListener("click", event => {
    if (event.target.id.startsWith("edit")) {
        const objId = event.target.id.split("--")[1]
        // const entry = document.querySelector(".entry--" + objId).value
        const entries = getJournalEntries()
        const editBox = document.querySelector(".edit")
        editBox.innerHTML = editForm()
        editFormSelections(objId)



        document.addEventListener("click", event => {
            console.log(document.querySelector("textarea[name=editEntryEntry]").value)
            if (event.target.id === "jrnlEntryEdit") {
                const entryEdit = document.querySelector("textarea[name=editEntryEntry]").value
                const conceptEdit = document.querySelector("input[name=editConceptEntry]").value
                const submissionEdit = {
                    date: entries[objId - 1].date,
                    entry: entryEdit,
                    concept: conceptEdit,
                    mood: entries[objId - 1].mood
                }
                editCard(submissionEdit, objId)
                editBox.innerHTML = ""

            }
        })
    }
})
