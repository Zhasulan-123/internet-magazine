import httpAdmin from "@/api/http.admin";
import router from "@/router";

const authAdmin = {
  currentUser: null,
  isLoggedIn() {
    return !!localStorage.getItem('ADMIN_TOKEN')
  },
  getToken() {
    return localStorage.getItem('ADMIN_TOKEN')
  },
  async login(formData) {
    try {
      const {status, data} = await httpAdmin.post('login', formData);
      if (data.status === true) {
        localStorage.setItem('ADMIN_TOKEN', data.token)
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
      const {data} = await httpAdmin.post('logout');
      if (data.status === true) {
        localStorage.removeItem('ADMIN_TOKEN');
        localStorage.removeItem('email');
        localStorage.removeItem('username');
        router.push('/login-admin');
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

export default authAdmin;