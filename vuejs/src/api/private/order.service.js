import httpUser from "@/api/http.user";
import httpAdmin from "@/api/http.admin";

/**
 * Created by on 27/10/2022.
 */
const orderService = {
  get() {
    return httpAdmin.get('order')
  },
  create(data) {
    return httpUser.post('order', data)
  },
};

export default orderService;