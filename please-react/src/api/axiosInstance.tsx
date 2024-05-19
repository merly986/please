import axios from 'axios';

// Создаем экземпляр Axios с настройками по умолчанию
const axiosInstance = axios.create({
    baseURL: 'http://92.53.119.132/',
});

// Добавляем перехватчик запросов
axiosInstance.interceptors.request.use(config => {
    // Token, нужно добавить сохранение и авторизацию
    const token = 'fortythousandmonkeysputbananainmyarsh';
    // Добавляем заголовок Authorization к каждому запросу
    config.headers.Authorization = `Token ${token}`;
    return config;
}, error => {
    // Обработка ошибок
    return Promise.reject(error);
});

export default axiosInstance;