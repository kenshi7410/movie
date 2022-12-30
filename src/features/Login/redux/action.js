import requester from "app/api";
import apiPath from "app/apiPath";
import actionLogin from "features/Login/redux/type";

export const loginAction = (userLogin) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "POST",
        url: apiPath.USER,
        data: userLogin,
      });

      next({
        type: actionLogin.SET_PROFILE,
        payload: res.data.content,
      });
      // set localStorage => cơ chế tránh token bị mất => refresh token || fingerprint

      // set cookies

      localStorage.setItem("token", res.data.content.accessToken);
    } catch (err) {
      throw err;
    }
  };
};

export const fetchProfileAction = async (next) => {
  try {
    const res = await requester({
      method: "POST",
      url: apiPath.USER_ABC,
      
    });
    next({
      type: actionLogin.SET_PROFILE,
      payload: res.data.content,
    });
  } catch (err) {
    console.log(err);
  }
};
