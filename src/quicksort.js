module.exports.sort = function (array) {
	quicksort(array, 0, array.length - 1);
}

function quicksort(array, startPosition, endPosition) {

	if(startPosition < endPosition) {
		var partitionIndex = partition(array, startPosition, endPosition);

	    quicksort(array, startPosition, partitionIndex -1)
		quicksort(array, partitionIndex + 1, endPosition);
	}
}

module.exports.partition = partition;

function partition(array, startPosition, endPosition) {

		let pivot = array[endPosition];
		var pivotIndex = startPosition;

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
	var firstPositionValue = array[firstPosition];
	array[firstPosition] = array[secondPosition];
	array[secondPosition] = firstPositionValue;
}