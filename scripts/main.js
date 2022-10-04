import { fetchJournalEntries } from "./entries.js"
import { html } from "./entry.js"

const renderHtml = async () => {
    await fetchJournalEntries()
    document.getElementById("articleContainer").innerHTML = html()
}

renderHtml()

document.addEventListener("stateChanged", async (event) => {
    renderHtml()
})
