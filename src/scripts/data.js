const data = {

  getResources() {
   return fetch("http://localhost:8088/legos")
    .then(response => response.json()); 
  },
  postLego (legoToSave) {
    fetch("http://localhost:8088/legos", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
})
  },
  getLego() {
    return fetch("http://localhost:8088/legos")
    .then(response => response.json());
  },
  getResourceColors() {
    return fetch(`http://localhost:8088/colors`)
    .then(response => response.json()); 
  },
  deleteLego (legoToDelete) {
    fetch(`http://localhost:8088/legos/${legoToDelete}`, {
  method: 'DELETE',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({id: legoToDelete})
})
.then(res => res.text())
.then(res => alert(`you deleted ${legoToDelete}`))
  }
  
};

