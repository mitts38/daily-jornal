const journal = [
    
     {
        date: "11/15/2019",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },

     {
        date: "11/18/2019",
        concept: " intro of java script",
        entry: "We talked about java script.",
        mood: "Ok"
    },

     {
        date: "11/19/2019",
        concept: "git hub",
        entry: "we learned about git hub addinng repositories and how's git hub work and help.",
        mood: "Ok"
    },

     {
        date: "11/22/2019",
        concept: "Hello-project",
        entry: "We did our first hello group project.",
        mood: "Ok"
     },

     {
        date: "11/22/2019",
        concept: "automation in java script",
        entry: "start learning about automation code.",
        mood: "Ok"
     }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}