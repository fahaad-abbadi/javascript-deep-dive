fetch('https://api.github.com/orgs/nodejs', {
        credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))
