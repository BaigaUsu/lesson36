function printObject(json, arr) {
    try {
        const changeJson = JSON.parse(json)
        const newArr = arr.reduce((acc, key) => {
            acc[key] = changeJson[key]
            return acc
        }, {})
        console.log(newArr)
    } catch (error) {
        console.log('Не удалось получить JSON из значения: ' + json);
    }
}
printObject('{"name": "Нуржан", "age": 20, "city": "Бишкек"}', ['name', 'city'])