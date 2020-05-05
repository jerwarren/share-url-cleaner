function reShare(){
    if (navigator.share) {
            navigator.share({
            text: message,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
}

function displayShare(){

    window.addEventListener('DOMContentLoaded', () => {
        const parsedUrl = new URL(window.location);
        // searchParams.get() will properly handle decoding the values.
        console.log('Title shared: ' + parsedUrl.searchParams.get('title'));
        console.log('Text shared: ' + parsedUrl.searchParams.get('text'));
        console.log('URL shared: ' + parsedUrl.searchParams.get('url'));
      });
}