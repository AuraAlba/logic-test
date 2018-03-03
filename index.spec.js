const { parser, printer } = require('.');

describe('# Works with the message if man was meant to stay on the ground god would have given us roots', () => {
    const matrix = parser('if man was meant to stay on the ground god would have given us roots');

    it('Should have length of 7x8', () => {
        expect(matrix).toHaveLength(7);
    });

    it('Should print correctly', () => {
        expect(printer(matrix)).toEqual('imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau');
    });
});

describe('# Works with the message have a nice day', () => {
    const matrix = parser('have a nice day');

    it('Should have length of 3x4', () => {
        expect(matrix).toHaveLength(3);
    });

    it('Should print correctly', () => {
        expect(printer(matrix)).toEqual('hae and via ecy');
    });
});

describe('# Works with the message chill out', () => {
    const matrix = parser('chill out');

    it('Should have length of 3x3', () => {
        expect(matrix).toHaveLength(3);
    });

    it('Should print correctly', () => {
        expect(printer(matrix)).toEqual('clu hlt io');
    });
});