document.getElementById('addBookForm').addEventListener('submit', function (event) {
       event.preventDefault();
     
       const formData = new FormData(event.target);
     
       fetch('/addBook', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(Object.fromEntries(formData)),
       })
         .then(response => response.text())
         .then(message => {
           alert(message);
           // You may also update the UI to reflect the added book
         })
         .catch(error => console.error('Error adding book:', error));
     });
   
     