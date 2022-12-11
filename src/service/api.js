import axios from "axios";

const api = axios.create({
  baseURL: "http://env-9245888.user.cloudjkt01.com/v1/business",
});

const service = {
  getAllFood: async (limit = 5, page = 1, categories = "", price = "", term = "") => {
    try {
      const response = await api.get("/search", {
        params: {
          limit,
          page,
          categories,
          price,
          term,
        },
      });

      return response.data;
    } catch (err) {
      return err;
    }
  },

  getDetailFood: async (id) => {
    try {
      const response = await api.get(`/${id}`);
      return response.data;
    } catch (err) {
      return err;
    }
  }
};

export default service;
