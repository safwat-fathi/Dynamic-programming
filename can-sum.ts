const canSum = (targetSum: number, numbers: number[], memo: {}): boolean => {
	// if already memoized
	if (targetSum in memo) return memo[targetSum];
	// base case
	if (targetSum === 0) return true;
	// not desired value
	if (targetSum < 0) return false;

	for (let num of numbers) {
		const remainder = targetSum - num;

		if (canSum(remainder, numbers, memo) === true) {
			memo[targetSum] = true;
			return true;
		}
	}

	memo[targetSum] = false;
	return false;
}

console.log(canSum(7, [2,3], {}));
console.log(canSum(300, [7,14], {}));
