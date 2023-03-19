const isNull = (value: unknown): boolean => {
	if(value === 'null' || value === null) return true
	return false
}

export default isNull