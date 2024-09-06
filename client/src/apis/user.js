import axios from "utils/axios";

export const apiRegister = (data) =>
  axios({
    url: "/user/register",
    method: "post",
    data,
    withCredentials: true,
  });

export const apiFinalRegister = (token) =>
  axios({
    url: "/user/finalRegister/" + token,
    method: "put",
  });

export const apiLogin = (data) => {
  return axios({
    url: "/user/login",
    method: "post",
    data,
  });
};

export const apiForgotPassword = (data) => {
  return axios({
    url: "/user/forgotpassword",
    method: "post",
    data,
  });
};

export const apiResetPassword = (data) => {
  return axios({
    url: "/user/resetpassword",
    method: "put",
    data,
  });
};

export const apiGetCurrent = () => {
  return axios({
    url: "/user/current",
    method: "get",
  });
};

export const apiGetUsers = (params) => {
  return axios({
    url: "/user/",
    method: "get",
    params,
  });
};

export const apiUpdateUser = (data, uid) => {
  return axios({
    url: "/user/" + uid,
    method: "put",
    data,
  });
};

export const apiDeleteUser = (uid) => {
  return axios({
    url: "/user/" + uid,
    method: "delete",
  });
};

export const apiUpdateCurrentUser = (data) => {
  return axios({
    url: "/user/current",
    method: "put",
    data,
  });
};

export const apiUpdateCart = (data) => {
  return axios({
    url: "/user/cart",
    method: "put",
    data,
  });
};

export const apiRemoveCart = (pid, color) => {
  return axios({
    url: `/user/remove-cart/${pid}/${color}`,
    method: "delete",
  });
};

export const apiAddWishlist = (pid) => {
  return axios({
    url: `/user/wishlist/${pid}`,
    method: "put",
  });
};
