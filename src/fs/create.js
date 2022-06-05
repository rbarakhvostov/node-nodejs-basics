import { writeFile, access, constants } from 'fs'

export const create = async () => {
	const path = 'files/fresh.txt'
	access(path, constants.F_OK, (err) => {
		if (err) {
			writeFile(path, 'I am fresh and young', () => {})
		} else {
			throw new Error('FS operation failed')
		}
	})
};

create()
