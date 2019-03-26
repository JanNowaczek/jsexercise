const promise = fetch ('https://randomuser.me/api')
    .then(response => {
        console.log(response)
        response.json()
            .then(data => {
                console.log(data)
            } )
        console.log('inside first then after second then')
    })