const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const digitalDecipher = function(emessage, key) {
    let text = key.toString();
    let a = text.split("");
    let output = [];
    let l = 0;
    let maxloop = 0;
    n = emessage.length
    while (maxloop < n) {
        output.push(a[l]);
        l++;
        maxloop++;
        if (l === a.length) {
            l=0;
        }
    }
    const newMessage = []    
    for (let i = 0; i < emessage.length; i++) {
            const code = emessage[i] - output[i]
            letter = alphabet[code-1]
            newMessage.push(letter)
    }
    let decodedMessage = newMessage.join("")
    console.log(decodedMessage);
}

digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990)