
// const input = [-1, 0, 3, 5, 9, 12, 14, 17, 23, 56, 87];
// const value = 17;

let n = 8; // array size
let a = [ 2, 3, 3, 5, 5, 5, 6, 6 ]; // Sorted array

/* Find if key is in array
* Returns: True if key belongs to array,
*		 False if key doesn't belong to array */
function contains(low, high, key)
{
	let ans = false;
	while (low <= high) {
		let mid = low + Math.floor((high - low) / 2);
		let midVal = a[mid];

		if (midVal < key) {

			// if mid is less than key, all elements
			// in range [low, mid] are also less
			// so we now search in [mid + 1, high]
			low = mid + 1;
		}
		else if (midVal > key) {

			// if mid is greater than key, all elements
			// in range [mid + 1, high] are also greater
			// so we now search in [low, mid - 1]
			high = mid - 1;
		}
		else if (midVal == key) {

			// comparison added just for the sake
			// of clarity if mid is equal to key, we
			// have found that key exists in array
			ans = true;
			break;
		}
	}

	return ans;
}

/* Find first occurrence index of key in array
* Returns: an index in range [0, n-1] if key belongs
*		 to array, -1 if key doesn't belong to array
*/
function first(low, high, key)
{
	let ans = -1;

	while (low <= high) {
		let mid = low + Math.floor((high - low + 1) / 2);
		let midVal = a[mid];

		if (midVal < key) {

			// if mid is less than key, all elements
			// in range [low, mid] are also less
			// so we now search in [mid + 1, high]
			low = mid + 1;
		}
		else if (midVal > key) {

			// if mid is greater than key, all elements
			// in range [mid + 1, high] are also greater
			// so we now search in [low, mid - 1]
			high = mid - 1;
		}
		else if (midVal == key) {

			// if mid is equal to key, we note down
			// the last found index then we search
			// for more in left side of mid
			// so we now search in [low, mid - 1]
			ans = mid;
			high = mid - 1;
		}
	}

	return ans;
}

/* Find last occurrence index of key in array
* Returns: an index in range [0, n-1] if key
			belongs to array,
*		 -1 if key doesn't belong to array
*/
function last(low, high, key)
{
  console.log({key, a: JSON.stringify(a)})
	let ans = -1;

	while (low <= high) {
		let mid = low + Math.floor((high - low + 1) / 2);
		let midVal = a[mid];
    console.log({low, high, mid, midVal})

		if (midVal < key) {

			// if mid is less than key, then all elements
			// in range [low, mid - 1] are also less
			// so we now search in [mid + 1, high]
			low = mid + 1;
		}
		else if (midVal > key) {

			// if mid is greater than key, then all
			// elements in range [mid + 1, high] are
			// also greater so we now search in
			// [low, mid - 1]
			high = mid - 1;
		}
		else if (midVal == key) {

			// if mid is equal to key, we note down
			// the last found index then we search
			// for more in right side of mid
			// so we now search in [mid + 1, high]
			ans = mid;
			low = mid + 1;
		}
    console.log("--------------------------")
	}

	return ans;
}

/* Find index of first occurrence of least element
greater than key in array
* Returns: an index in range [0, n-1] if key is not
			the greatest element in array,
*		 -1 if key is the greatest element in array */
function leastgreater(low, high, key)
{
  // console.log({key, a: JSON.stringify(a)})
	let ans = -1;

	while (low <= high) {
		let mid = low + Math.floor((high - low + 1) / 2);
		let midVal = a[mid];
    // console.log({low, high, mid, midVal})

		if (midVal < key) {

			// if mid is less than key, all elements
			// in range [low, mid - 1] are <= key
			// then we search in right side of mid
			// so we now search in [mid + 1, high]
			low = mid + 1;
		}
		else if (midVal > key) {

			// if mid is greater than key, all elements
			// in range [mid + 1, high] are >= key
			// we note down the last found index, then
			// we search in left side of mid
			// so we now search in [low, mid - 1]
			ans = mid;
			high = mid - 1;
		}
		else if (midVal == key) {

			// if mid is equal to key, all elements in
			// range [low, mid] are <= key
			// so we now search in [mid + 1, high]
			low = mid + 1;
		}
    // console.log('-----------------------------')
	}

	return ans;
}

/* Find index of last occurrence of greatest element
less than key in array
* Returns: an index in range [0, n-1] if key is not
			the least element in array,
*		 -1 if key is the least element in array */
function greatestlesser(low, high, key)
{
	let ans = -1;

	while (low <= high) {
		let mid = low + Math.floor((high - low + 1) / 2);
		let midVal = a[mid];

		if (midVal < key) {

			//   if mid is less than key, all elements
			// in range [low, mid - 1] are < key
			// we note down the last found index, then
			// we search in right side of mid
			// so we now search in [mid + 1, high]
			ans = mid;
			low = mid + 1;
		}
		else if (midVal > key) {

			// if mid is greater than key, all elements
			// in range [mid + 1, high] are > key
			// then we search in left side of mid
			// so we now search in [low, mid - 1]
			high = mid - 1;
		}
		else if (midVal == key) {

			// if mid is equal to key, all elements
			// in range [mid + 1, high] are >= key
			// then we search in left side of mid
			// so we now search in [low, mid - 1]
			high = mid - 1;
		}
	}

	return ans;
}

// console.log("Contains");
// for (var i = 0; i < 10; i++)
// 	console.log(i, contains(0, n - 1, i));

// console.log("First occurrence of key");
// for (var i = 0; i < 10; i++)
// 	console.log(i, first(0, n - 1, i));

console.log("Last occurrence of key");
for (var i = 0; i < 10; i++)
	console.log(i, last(0, n - 1, i));

// console.log("Least integer greater than key");
// for (var i = 0; i < 10; i++)
// 	console.log(leastgreater(0, n - 1, i));
//  console.log('==================================')

// console.log("Greatest integer lesser than key");
// for (var i = 0; i < 10; i++)
// 	console.log(i, greatestlesser(0, n - 1, i));



// This code is contributed by phasing17

