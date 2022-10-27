import httpUser from "@/api/http.user";

/**
 * Created by on 26/10/2022.
 */
const productsService = {
  get() {
    return httpUser.get('products')
  },
};

export default productsService;