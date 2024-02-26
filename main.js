function printObject(json, arr) {
        const changeJson = JSON.parse(json);
    if (typeof changeJson !== 'object' || Array.isArray(changeJson)) {
        throw new Error('Результат обработки JSON не является объектом.');
    }

    if (arr) {
        const selectedKeys = {};
        arr.forEach(key => {
            if (key in changeJson) {
                selectedKeys[key] = changeJson[key];
            } else {
                throw new Error(`Ключ "${key}" отсутствует в объекте.`);
            }
        });
        console.log(selectedKeys);
    } else {
        console.log(changeJson);
    }
}

try {
    printObject('["это", "массив", "а не объект"]');
} catch (error) {
    console.error(error.message);
}

try {
    printObject('"а это строка"');
} catch (error) {
    console.error(error.message);
}

try {
    printObject('42');
} catch (error) {
    console.error(error.message);
}

try {
    printObject('{"name": "Айбек", "age": 31}', ['name', 'city']);
} catch (error) {
    console.error(error.message);
}