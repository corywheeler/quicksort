const chai = require('chai');
chai.should();
const quickSort = require('../src/quicksort');

describe('quicksort', () => {

	let unsorted = [1,5,9,10,2];
	const sorted = [1,2,5,9,10];

	it('should run', () => {
		let quicksorted = quickSort(unsorted);

		quicksorted.should.equal(sorted)
	})
})