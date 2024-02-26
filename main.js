function printObject(json) {
    try {
        const changeJson = JSON.parse(json)
        console.log(changeJson)
    } catch (error) {
        console.log('Не удалось получить JSON из значения: ' + json);
    }
}
printObject({myKey: 42})