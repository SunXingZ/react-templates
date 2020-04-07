import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : '/api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use(
	(config) => {
		// Do something before request is sent
		return config;
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axios.interceptors.response.use(
	(response) => {
		// Do something with response data
		return response;
	},
	(error) => {
		// Do something with response error
		return Promise.reject(error);
	}
);
