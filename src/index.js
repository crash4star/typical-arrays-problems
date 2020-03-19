exports.min = function min(array) {
    if (array == undefined) {
        return 0;
    } else {
        let min = 0;
        array.forEach((item, i, a) => {
            if (a[i] < min) {
                min = item;
            }
        });

        return min;
    }
}

exports.max = function max(array) {
    let positiveArr = [];

    if (array == undefined || array.length == 0) {
        return 0;
    } else {
        array.forEach((item, i, a) => {
            if (item >= 0) {
                positiveArr.push(item)
            }
        });
    }

    let max = positiveArr[0];

    positiveArr.forEach((item, i, a) => {
        if (item > max) {
            max = item;
        }
    });

    return max;
}

exports.avg = function avg(array) {
    let num = 0;

    if (array == undefined || array.length == 0) {
        return 0;
    } else {
        array.forEach(item => num += item);
        return num / array.length;
    }
}
