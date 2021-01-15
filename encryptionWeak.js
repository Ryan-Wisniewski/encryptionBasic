const encryptionWeak = (str) => {
    let tempArr = []
    for(let i=0; i < str.length; i++){
        const tempInt = str[i].charCodeAt(0) * 3
        tempArr.push(tempInt)
    }
    return tempArr
}

const decryptionWeak = (arr) => {
    let tempStr = ''
    for(let i=0; i < arr.length; i++){
        let tempInt = arr[i] / 3
        tempStr += String.fromCharCode(tempInt)
    }
    return tempStr
}

// let test = encryptionWeak('ashalamalakam')
// let test2 = encryptionWeak('cool')
// console.log(test)
// console.log(decryptionWeak(test))

//Sha-1 ish implementation
//pad a string with 512 bytes // if str > add 1 followed by 0's till
// abc = 00000000 00000001 00000010
// 00000000 00000001 00000010 10000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000
//small so more likely focus on

const inputStrToBinary = (str) => {
    let tempArr = []
    for(let i=0; i < str.length; i++){
        let binary = str[i].charCodeAt(0).toString(2)
        console.log(binary)
        tempArr.push(binary)
    }
    return tempArr
}

const sha1 = (str) => {
    inputStrToBinary(str)
}

console.log(sha1('test'))