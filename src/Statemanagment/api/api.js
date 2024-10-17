import axios from "axios";

// إعداد الـ base URL الأساسي لكل الـ APIs
const api = axios.create({
  baseURL: "", // الاساسي Url هنا هنحط ال
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // معالجة الأخطاء ال هتظهر
    return Promise.reject(error);
  }
);

// objects و هتكون علي هيئه  fetchs  هنا ال هنحط ال

// تنظيم الـ endpoints
const apiFetches = {
  users: {
    // fetchAll: () => api.get("/users"),
    //   fetchById: (id) => api.get(`/users/${id}`)

    // دوال تانية لو محتاج
  },
  cards: {
    //  fetchAll: () => api.get("/cards"),
    //  fetchById: (id) => api.get(`/cards/${id}`)
    // دوال تانية لو محتاج
  },
  // ممكن تضيف أقسام تانية زي offers, prices...
};

export default apiFetches;
