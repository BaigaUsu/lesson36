function myFunction() {
    const random = Math.random();
    if (random < 0.5) {
        return 'Успешный результат';
    } else {
        throw new Error('Ошибка: функция завершилась неудачно');
    }
}

const delayPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            const result = myFunction();
            resolve(result);
        } catch (error) {
            reject(error);
        }
    }, 1000);
});

delayPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error.message);
    });
