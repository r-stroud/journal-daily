export const form = () => {
    return `<form class="dateForm">
    <fieldset>
        <label for="dateEntry">Date</label>
        <input type="date" name="dateEntry" class="date">
    </fieldset>
</form>
<form class="conceptForm">
    <fieldset>
        <label for="conceptEntry">Concept</label>
        <input type="text" name="conceptEntry" class="concept">
    </fieldset>
</form>
<form class="entryForm">
    <fieldset>
        <label for="entryEntry">Journal Entry</label>
        <textarea name="entryEntry" class="entry" placeholder="Please start writing!"></textarea>
    </fieldset>
</form>
<form class="moodForm" action="#">
    <fieldset>
        <label for="moodEntry">Mood</label>
        <select name="mood">
            <option value="default">Please select</option>
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
            <option value="Meh">Meh</option>
            <option value="Totally Awesome!">Totally Awesome!</option>
        </select>
    </fieldset>
</form>
<div class="button">
    <button type="button" id="recordJrnlEntry">Record Journal Entry</button>
</div>`
}