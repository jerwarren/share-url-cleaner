function reShare(message){
    if (navigator.share) {
            navigator.share({
            url: message,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
}