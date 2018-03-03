module.exports = {
    parser: text => {
        let phrase = text.replace(/\s/g,'');
        let rows = Math.floor(Math.sqrt(phrase.length));
        let columns = Math.ceil(Math.sqrt(phrase.length));

        if (rows * columns < phrase.length){
            columns = Math.ceil(Math.sqrt(phrase.length));
            rows = Math.ceil(Math.sqrt(phrase.length));
        }

        const charMat = Array(rows).fill().map(() => Array(columns).fill());

        for (i=0; i<rows; i++) {
            for (j=0; j<columns; j++) {
                charMat[i][j] = phrase[j + (i * columns)];
            }
        }

        return charMat;
    },
    printer: matrix => {
        let newMatrix = [];

        for(j=0; j < matrix[0].length; j++){
            newMatrix[j] = [];
            for(i=0; i < matrix.length; i++){
                newMatrix[j][i] = matrix[i][j];
            }
        }

        return newMatrix.map(function(char) {
            return char.join('');
        }).join(' ');
    }
}