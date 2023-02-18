// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    const res = matrix.reduce((acc, row, index) => {
        if (index % 2) {
            const arr = row.sort((a, b) => b - a);
            acc.push(arr);
        } else acc.push(row);
        return acc;
    }, []);
    return res.flat();
};
