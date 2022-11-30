let serverUrl = 'https://paste-your-ngrok-link-here.ngrok.io';

function callBackend() {
    fetch(serverUrl)
    .then(res => res.json())
    .then(data => {
        // do stuff with the server response saved in data.
        document.getElementById('display').innerHTML = data.message
    })
}
