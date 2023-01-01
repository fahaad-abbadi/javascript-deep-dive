fetch('https://api.github.com/orgs/nodejs')
    .then(response => response.json)
    .then(data => {

        //prints result from 'response.json()' in getRequest
        console.log(data)
    })
    .catch(error => console.error(error))
