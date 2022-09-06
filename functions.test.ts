const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('should return an array', () => {
        expect(shuffleArray).toBe(shuffleArray)
    })

    test('Returns an array of the same length', () => {
        expect(shuffleArray.length).toHaveLength(shuffleArray)
    })
})
