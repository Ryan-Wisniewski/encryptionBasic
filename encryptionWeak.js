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

