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
      }
      return {
        success: true
      }
    } catch (e) {
      console.log(e.response);
      return {
        success: false,
        errors: e.response.data.errors
      }
    }
  },
  async logout() {
    try {
      const {data} = await httpAdmin.post('logout');
      if (data.status === true) {
        localStorage.removeItem('ADMIN_TOKEN');
        router.push('/login-admin');
      }
      return {
        success: true
      }
    } catch (e) {
      console.log(e.response);
      return {
        success: false
      }
    }
  },
};

export default authAdmin;