const promise = fetch ('https://randomuser.me/api')
    .then(response =>  response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error', error))