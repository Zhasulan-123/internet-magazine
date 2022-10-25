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
  async login(formData) {
    try {
      const {status, data} = await httpUser.post('login', formData);
      if (data.status === true) {
        localStorage.setItem('USER_TOKEN', data.token)
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
      const {data} = await httpUser.post('logout');
      if (data.status === true) {
        localStorage.removeItem('USER_TOKEN');
        router.push('/login');
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

export default authUser;