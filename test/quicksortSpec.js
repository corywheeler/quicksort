const chai = require('chai');
chai.should();
const quicksort = require('../src/quicksort');

describe('quicksort', () => {

	it.only('should sort the array', () => {
		var subjectArray = [30,12,4,10,9,3,22,15];
		var expected = [3,4,9,10,12,15,22,30];

		quicksort.sort(subjectArray);
		subjectArray.should.deep.equal(expected);
	});

	it.only('should be able to swap elements', () => {
		var subjectArray = [9,2];
		var swapped = [2,9];

		quicksort.swap(subjectArray,0,1);
		subjectArray.should.deep.equal(swapped);
	});

	it.only('should partition arrays', () => {

		var subjectArray = [12,4,10,9,3, 7];
		var paritionValue = subjectArray[subjectArray.length - 1];

		var valuesLessThanPartition = [4,3];
		var valuesGreaterThanPartition = [9, 12, 10];

		var partitionIndex = quicksort.partition(subjectArray, 0, 5);

		subjectArray.should.deep.equal([4, 3, 7, 9, 12, 10]);
		partitionIndex.should.equal(2);
		subjectArray[partitionIndex].should.equal(paritionValue);
		subjectArray.slice(0, partitionIndex).should.deep.equal(valuesLessThanPartition);
		subjectArray.slice(partitionIndex + 1, subjectArray.length).should.deep.equal(valuesGreaterThanPartition);
	});
})