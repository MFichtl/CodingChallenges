const mergeExclusive = require('./UniqueNumbersArray');

	test('Combining [1, 2, 3, 4, 5] and [5, 9, 6, 2] should result in [1, 3, 4, 9, 6]', () => {
		expect(mergeExclusive([1, 2, 3, 4, 5],[5, 9, 6, 2])).toStrictEqual([1, 3, 4, 9, 6]);
	});

	test('Combining ["a", "b", "c", "d"] and ["c", "d", "f", "a"] should result in ["b", "f"]', () => {
		expect(mergeExclusive(["a", "b", "c", "d"],["c", "d", "f", "a"])).toStrictEqual(["b", "f"]);
	});
	
	test('Combining [22, 55, 33, 11, 9] and [9, 22, 44, 66] should result in [55, 33, 11, 44, 66]', () => {
		expect(mergeExclusive([22, 55, 33, 11, 9],[9, 22, 44, 66])).toStrictEqual([55, 33, 11, 44, 66]);
	});
	
	test('Combining [1, 2, 3, "a", "c"] and [5, "d", "a", 2] should result in [1, 3, "c", 5, "d"]', () => {
		expect(mergeExclusive([1, 2, 3, "a", "c"],[5, "d", "a", 2])).toStrictEqual([1, 3, "c", 5, "d"]);
	});
