// binary search
const binarySearch = (arr, target, lowerBound=0, upperBound=arr.length-1) => {
    const middle = Math.round((upperBound + lowerBound) / 2);
    const middleValue = arr[middle];

    if (middleValue === target) {
        return middle;
    } else if (middleValue > target) {
        return binarySearch(arr, target, lowerBound, middle - 1);
    } else if (middleValue < target) {
        return binarySearch(arr, target, middle + 1, upperBound);
    }
}

const arr = [2,5,12,33,34,35,54,65,76,88,98]
const index = binarySearch(arr, 88);
