exports.min = function min(array) {
    if (!Array.isArray(array) || array.length <= 0) {
        return 0;
    }
    return array.sort((a, b) => a - b)[0];
};

exports.max = function max(array) {
    if (!Array.isArray(array) || array.length <= 0) {
        return 0;
    }
    return array.sort((a, b) => b - a)[0];
};

exports.avg = function avg(array) {
    if (!Array.isArray(array) || array.length <= 0) {
        return 0;
    }
    return (
        Math.floor(
            (array.reduce((acc, i) => acc + i, 0) / array.length) * 100
        ) / 100
    );
};
