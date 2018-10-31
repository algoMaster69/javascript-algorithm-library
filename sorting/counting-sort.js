//Copy and pasted from https://www.interviewcake.com/concept/javascript/counting-sort
function countingSort(theArray, maxValue) {

  // Array of 0's at indices 0...maxValue
  const numCounts = new Array(maxValue + 1).fill(0);

  // Populate numCounts
  theArray.forEach(num => {
    numCounts[num] += 1;
  });

  // Populate the final sorted array
  const sortedArray = [];
  let currentSortedIndex = 0;

  // For each num in numCounts
  numCounts.forEach((count, num) => {

    // For the number of times the item occurs
    for (let i = 0; i < count; i++) {

      // Add it to the sorted array
      sortedArray[currentSortedIndex] = num;
      currentSortedIndex++;
    }
  });

  return sortedArray;
}