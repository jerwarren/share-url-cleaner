function reShare(message){
    pattern = /.*(https*:\/\/[^\s]*)[$,\s]*/;
    newMessage = message.replace(pattern,'\$1');
    console.log(newMessage);

    if (navigator.share) {
            navigator.share({
            url: message,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
}