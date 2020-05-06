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
    pattern = /.*(https*:\/\/[^\s]*)[$,\s]*/;
    newMessage = message.replace(pattern,'\$1');
    return newMessage;
}