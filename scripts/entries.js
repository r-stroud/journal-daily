
const api = "http://localhost:8088"

const applicationState = {
    journalEntries: []
}

export const fetchJournalEntries = async () => {
    const data = await fetch(`${api}/journEntries`)
    const entries = await data.json()
    applicationState.journalEntries = entries

}

export const getJournalEntries = () => {
    const copyOfEntries = applicationState.journalEntries.map(entry => ({ ...entry }))
    return copyOfEntries
}

export const addNewEntry = async (entry) => {

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    }
    const response = await fetch(`${api}/journEntries`, fetchOptions)
    const responseJson = await response.json()
    document.dispatchEvent(new CustomEvent("stateChanged"))
    return responseJson
}

export const deleteCard = async (id) => {
    const data = await fetch(`${api}/journEntries/${id}`, { method: "DELETE" })
    document.dispatchEvent(new CustomEvent("stateChanged"))

}

export const editCard = async (entry, id) => {
    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    }

    const data = await fetch(`${api}/journEntries/${id}`, fetchOptions)
    document.dispatchEvent(new CustomEvent("stateChanged"))

}
