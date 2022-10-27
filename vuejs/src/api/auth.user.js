import httpUser from "@/api/http.user";
import router from "@/router";

const authUser = {
  currentUser: null,
  isLoggedIn() {
    return !!localStorage.getItem('USER_TOKEN')
  },
  getToken() {
    return localStorage.getItem('USER_TOKEN')
  },
  async register(formData) {
    try {
      const {status, data} = await httpUser.post('register', formData);
      if (data.status === true) {
        localStorage.setItem('USER_TOKEN', data.token)
        localStorage.setItem('email', data.user.email)
        localStorage.setItem('username', data.user.name)
      }
      return {
        success: true
      }
    } catch (e) {
      return {
        success: false,
        errors: e.response.data
      }
    }
  },
  async login(formData) {
    try {
      const {status, data} = await httpUser.post('login', formData);
      if (data.status === true) {
        localStorage.setItem('USER_TOKEN', data.token)
        localStorage.setItem('email', data.user.email)
        localStorage.setItem('username', data.user.name)
      }
      return {
        success: true
      }
    } catch (e) {
      return {
        success: false,
        errors: e.response.data
      }
    }
  },
  async logout() {
    try {
      const {data} = await httpUser.post('logout');
      if (data.status === true) {
        localStorage.removeItem('USER_TOKEN');
        localStorage.removeItem('email');
        localStorage.removeItem('username');
        router.push('/login');
      }
      return {
        success: true
      }
    } catch (e) {
      return {
        success: false
      }
    }
  },
};

export default authUser;