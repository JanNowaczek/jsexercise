const promise = fetch ('https://randomuser.me/api')


promise
    .then(response => {
        response.json()
            .then(data => {
                console.log(data)
            } )
    })