const chai = require('chai');
chai.should();
const quicksort = require('../src/quicksort');

describe('quicksort', () => {

	it.only('should sort the array in place', () => {
		const subjectArray = [30,12,4,10,9,3,22,15];
		const expected = [3,4,9,10,12,15,22,30];

		quicksort.sort(subjectArray);
		subjectArray.should.deep.equal(expected);
	});

	it.only('should be able to swap elements', () => {
		const subjectArray = [9,2];
		const swapped = [2,9];

		quicksort.swap(subjectArray,0,1);
		subjectArray.should.deep.equal(swapped);
	});

	it.only('should partition an array', () => {

		const subjectArray = [12,4,10,9,3, 7];

		const pivot = subjectArray[subjectArray.length - 1];

		const partitionIndex = quicksort.partition(subjectArray, 0, 5);

		const valuesLessThanPartition = [4,3];
		const valuesGreaterThanPartition = [9, 12, 10];

		subjectArray.should.deep.equal([4, 3, 7, 9, 12, 10]);

		const expectedPartitionIndex = 2;
		partitionIndex.should.equal(expectedPartitionIndex);

		const partitionValue = subjectArray[partitionIndex]
		partitionValue.should.equal(pivot);

		const startIndexForValuesLessThenPartion = 0;
		const valuesBeforePartition = subjectArray.slice(startIndexForValuesLessThenPartion, partitionIndex)

		valuesBeforePartition.should.deep.equal(valuesLessThanPartition);


		const startIndexForValuesGreaterThanPartion = partitionIndex + 1;
		const valuesAfterPartition = subjectArray.slice(startIndexForValuesGreaterThanPartion, subjectArray.length)

		valuesAfterPartition.should.deep.equal(valuesGreaterThanPartition);
	});
})