const objectKeysIntoArray = (
	data: {
		[key: string]: any
	}
): string[] => {
	const keys: string[] = []
	for (const key in data) {
		keys.push(key)
	}
	return keys
}

export default objectKeysIntoArray