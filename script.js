if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

window.addEventListener('DOMContentLoaded', () => {
    const parsedUrl = new URL(window.location);
    
    // searchParams.get() will properly handle decoding the values.
    shareTitle = parsedUrl.searchParams.get('title');
    shareText = parsedUrl.searchParams.get('text');
    shareURL = parsedUrl.searchParams.get('url');
    
    if (shareTitle !== null)
        document.querySelector('#title').innerHTML = shareTitle;
    
    if (shareText !== null)
        document.querySelector('#text').innerHTML = shareText;
    
    if (shareURL !== null)
        document.querySelector('#url').innerHTML = shareURL;
    
    if (shareText !== null)
        document.querySelector('#output').innerHTML = cleanText(shareText);

        var shareButton = document.querySelector('#button');

        deleteLink.addEventListener('click', function(event) {
            reShare(ocument.querySelector('#output').innerText);
        });

});

function reShare(message){

    message = cleanText(message);
    console.log(message);
    
    if (navigator.share) {
        navigator.share({
            url: message,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
}

function cleanText(message){
    pattern = /.*(https*:\/\/[^\s]*)/;
    newMessage = message.replace(pattern,'\$1');
    return newMessage;
}