fetch('https://api.github.com/orgs/nodejs', {
        headers: new Headers({
            'User-agent': 'Mozilla/4.0 Custom User Agent'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))
