addToZero = array => {
    let obj = {}
    let diff

    for (let i = 0; i < array.length; i++) {
        diff = 0 - array[i]

        if (obj[diff]) {
            return true
        } else {
            obj[array[i]] = true
        }
    }
    return false
}

console.log(addToZero([1, 2, 3, -2]))



hasUniqueChars = string => {
    let array = string.split("");

    let result = {};

    for (let i = 0; i < array.length; i++) {
        if (result[array[i]]) {
            return false;
        } else {
            result[array[i]] = true;
        }
    }
    return true
}

console.log(hasUniqueChars("Moonday"))


isPangram = sentence => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const lowercase = sentence.toLowerCase();
    
    for (let i = 0; i < alphabet.length; i++) {
        if(lowercase.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }

    return true;
}

console.log(isPangram("This is not a pangram"))



findLongestWord = array => {
    return array.sort((a, b) => b.length - a.length)[0].length
}

console.log(findLongestWord(["hi", "hello", "hellothere"]))