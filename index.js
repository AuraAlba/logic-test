module.exports = {
    parser: text => {
    // TODO: Implement the logic to create the matrix and return it, see tests
    var phrase = text;

    phrase = phrase.replace(/\s/g, '');

    var rows = Math.floor(Math.sqrt(phrase.length));
    var columns = Math.ceil(Math.sqrt(phrase.length));
    if (rows * columns < phrase.length) {
        columns = Math.ceil(Math.sqrt(phrase.length));
        rows = Math.ceil(Math.sqrt(phrase.length));
    }

    var charMat = Array(columns).fill().map(() => {}
        Array(rows).fill();
    );

    for (j = 0; j < rows; j++) {
        for (i = 0; i < columns; i++) {
            charMat[i][j] = phrase[i + (j * columns)];
        }
    }
    return [[charMat]];
},
    printer: matrix =>
        {
            // TODO: Implement the logic to print the matrix in the expected way, see tests
            var newString = matrix.map(function(char) {
                return char.join('');
            }).join(' ');

            return newString;
        }
}