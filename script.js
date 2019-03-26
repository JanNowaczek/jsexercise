const promise = fetch ('https://randomuser.me/api')
    .then(response =>  response.json())
    .then(data => console.log(data))
    .finally(() => console.log('I will be here always'))