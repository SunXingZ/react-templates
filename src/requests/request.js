import md5 from 'blueimp-md5';
import { Buffer } from 'buffer';
import { request } from './config';

export const getAppVersion = async () => {
	const data = new Map();
	return await request.post('version', data);
};
