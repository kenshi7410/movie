import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "./redux/action";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = async (values) => {
    // call service api
    // console.log(values);
    try {
      await dispatch(loginAction(values));
      // navigate user qua trang home
      navigate("/");
    } catch (err) {
      console.log(err.response.data.content);
    }

    // trả về thông tin user login thành công => res.data.content

    // lưu data lên store

    // save set localStorage

    // get localStorage khi cần sử dụng

    // navigate user qua trang home
  };
  return (
    <div className="container text-center mx-auto ">
      <h1>Login</h1>
      <div className="flex justify-center pt-5">
        <Form name="basic" onFinish={handleLogin}>
          <Form.Item
            label="Tài khoản"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
