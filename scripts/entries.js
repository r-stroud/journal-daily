const journEntries = [
    {
        id: 1,
        date: "01/01/22",
        concept: "Undecided",
        entry: "This is entry number 1.",
        mood: "Sad"

    },
    {
        id: 2,
        date: "02/01/22",
        concept: "TBD",
        entry: "This is entry number 2.",
        mood: "Happy"

    },
    {
        id: 3,
        date: "03/01/22",
        concept: "Not Sure",
        entry: "This is entry number 3.",
        mood: "Meh"

    },
    {
        id: 4,
        date: "04/01/22",
        concept: "Who knows",
        entry: "This is entry number 4.",
        mood: "Totally Awesome"

    },
    {
        id: 5,
        date: "05/01/22",
        concept: "Your guess is as good as mine",
        entry: "This is entry number 5.",
        mood: "Meh"

    },
    {
        id: 6,
        date: "06/01/22",
        concept: "Undetermined",
        entry: "This is entry number 6.",
        mood: "Totally Awesome"

    },
    {
        id: 7,
        date: "07/01/22",
        concept: "????",
        entry: "This is entry number 7.",
        mood: "Sad"

    },
    {
        id: 8,
        date: "08/01/22",
        concept: "No idea",
        entry: "This is entry number 8.",
        mood: "Happy"

    },

]

export const getJournalEntries = () => {
    const copyOfEntries = journEntries.map(entry => ({ ...entry }))
    return copyOfEntries
}