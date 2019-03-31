module.exports.sort = function (array) {
	quicksort(array, 0, array.length - 1);
}

function quicksort(array, startPosition, endPosition) {

	if(startPosition < endPosition) {
		const partitionIndex = partition(array, startPosition, endPosition);

	    quicksort(array, startPosition, partitionIndex -1)
		quicksort(array, partitionIndex + 1, endPosition);
	}
}

module.exports.partition = partition;

function partition(array, startPosition, endPosition) {

		const pivot = array[endPosition];
		let pivotIndex = startPosition;

		for(var scanPosition = startPosition; scanPosition < endPosition; scanPosition++) {

			if(array[scanPosition] < pivot) {
				swap(array, pivotIndex, scanPosition)
				pivotIndex = pivotIndex + 1;
			}
		}

		swap(array, pivotIndex, endPosition);
		return pivotIndex;
}

module.exports.swap = swap;

function swap(array, firstPosition, secondPosition) {
	let firstPositionValue = array[firstPosition];
	array[firstPosition] = array[secondPosition];
	array[secondPosition] = firstPositionValue;
}