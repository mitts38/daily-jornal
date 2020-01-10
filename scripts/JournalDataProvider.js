
let entries =[]

export const editEntry = (entryJournal) =>{
  return fetch(`http://localhost:3000/entries/${entryJournal.id}`,{
    method: 'PUT', 
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(entryObject)
  })
  .then(getEntries)
}

export const saveEntry = entry => {
  return fetch('http://localhost:3000/entries', {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify(entry)
   })
   .then(getEntries)
 }
 
export const deleteEntry = entryId =>{
  return fetch(`http://localhost:3000/entries/${entryId}`, {
    method: "DELETE"
  })
    .then(getEntries)
}


export const getEntries = () => {

  console.log("about to get data")
 return fetch("http://localhost:3000/entries") 
  .then(response => response.json())  // Parse  JSON
  .then (parsedEntries => {
    entries = parsedEntries.slice()
  })
}




export const useJournalEntries = () => {

  const sortedByDate = entries.slice(
    
  )
  return sortedByDate
}