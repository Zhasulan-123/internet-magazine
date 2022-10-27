import httpUser from "@/api/http.user";

/**
 * Created by on 26/10/2022.
 */
const categoriesService = {
  get() {
    return httpUser.get('categories')
  },
};

export default categoriesService;