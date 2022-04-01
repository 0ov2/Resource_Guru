const expect = require('chai').expect
const { FlattenArray } = require('../Resource_Guru/Tasks/FlattenArray.js');

describe('Flatten Array', () => {
    it('should returnt the correct flattened array', () => {
        expect(FlattenArray([1, [2, [3]], [4]])).to.be.a('array').that.eqls([1, 2, 3, 4]);
        expect(FlattenArray([4, [2, [1]], [4]])).to.be.a('array').that.eqls([4, 2, 1, 4]);
    })

    it('should return indication message that the array is empty', () => {
        expect(FlattenArray([])).to.be.a('string').that.equals('Array is empty');
    })
    
    it('should handle values that are no numbers correctly', () => {
        expect(FlattenArray(['a', 'b', [1, 2, ['c']]])).to.be.a('array').that.eqls([ NaN, NaN, 1, 2, NaN ]);
    })

    it('should handle array with no sub arrays correctly', () => {
        expect(FlattenArray([1, 2, 3, 4, 5])).to.be.a('array').that.eqls([1, 2, 3, 4, 5]);
    })
})