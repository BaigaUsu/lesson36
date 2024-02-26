function printObject(json) {
    const changeJson = JSON.parse(json)
    console.log(changeJson)
}
console.log('{"myKey": 42}')
printObject('{"myKey": 42}')