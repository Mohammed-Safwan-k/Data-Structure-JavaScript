var key = 3;
var newKey = key % 26;
console.log(newKey);
var word = 'hello'
console.log(word.length);

for (let i = 0; i < word.length; i++) {
    let letterPosition = word.charAt(i) + newKey;
    if(letterPosition <= 122){
        word[i]
    }
    
}