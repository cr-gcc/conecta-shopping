import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // Critical for cookies
  withXSRFToken: true, // Critical for Laravel 11+ CSRF protection
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
});

api.interceptors.request.use(config => {
  // Obtener el token CSRF de las cookies
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('XSRF-TOKEN='))
    ?.split('=')[1]
  
  if (token) {
    config.headers['X-XSRF-TOKEN'] = decodeURIComponent(token);
  }
  
  return config
})

export default api;
