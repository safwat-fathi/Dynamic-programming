const canSum = (targetSum: number, numbers: number[]): boolean => {
	// base case
	if (targetSum === 0) return true;
	// not desired value
	if (targetSum < 0) return false;

	for (let num of numbers) {
		const remainder = targetSum - num;

		if (canSum(remainder, numbers) === true) {
			return true;
		}
	}

	return false;
}

console.log(canSum(7, [2,3]));
console.log(canSum(300, [7,14]));
