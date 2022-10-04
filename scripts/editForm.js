export const editForm = () => {
    let hmtl = `<form class="editForm dateForm">
        <fieldset>
            <label for="editDateEntry">Date</label>
            <input type="date" name="editDateEntry" class="editDate">
        </fieldset>
    </form>
    <form class="conceptForm">
        <fieldset>
            <label for="editConceptEntry">Concept</label>
            <input type="text" name="editConceptEntry" class="editConcept">
        </fieldset>
    </form>
    <form class="entryForm">
        <fieldset>
            <label for="editEntryEntry">Journal Entry</label>
            <textarea name="editEntryEntry" class="editEntry" ></textarea>
        </fieldset>
    </form>
    <form class="moodForm" action="#">
        <fieldset>
            <label for="editMood">Mood</label>
          ${selectOptions()}
        </fieldset>
    </form>
    <div class="button">
        <button type="button" id="jrnlEntryEdit">Edit Journal Entry</button>
    </div>
        `
    return hmtl
}

const Moods = ["Happy", "Sad", "Meh", "Totally Awesome!"]

export const selectOptions = () => {
    let html = `<select name="editMood"><option value="default">Please Select</option>`
    Moods.map(obj => html += `
    <option id="${obj}"value="${obj}">${obj}</option>`)
    return html += `</select>`
}
