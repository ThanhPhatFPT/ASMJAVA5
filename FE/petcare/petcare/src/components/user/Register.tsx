import { useState } from "react";
import React from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert"; // Import SweetAlert

export function Register() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);
  const toggleConfirmPasswordVisibility = () =>
    setConfirmPasswordShown((cur) => !cur);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      // Check API response
      if (response.data === "Email đã được sử dụng!") {
        setErrorMessage("Email đã được sử dụng. Vui lòng chọn email khác.");
      } else if (response.status === 200) {
        setSuccessMessage("Đăng ký thành công!");
        swal("Thành công!", "Bạn đã đăng ký thành công!", "success");
        navigate("/login");
      } else {
        setErrorMessage("Đăng ký thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Đã xảy ra lỗi trong quá trình đăng ký."
      );
    }
  };

  return (
    <section className="grid text-center h-screen items-center p-8">
      <div className="border border-gray-250 max-w-[440px] w-full mx-auto p-10 rounded-md">
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Đăng Ký
        </Typography>
        <Typography className="mb-10 text-gray-600 font-extralight text-base">
          Nhập thông tin của bạn để tạo tài khoản
        </Typography>
        <form
          onSubmit={handleRegister}
          className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900">
                Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@gmail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900">
                Mật khẩu
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              icon={
                <i onClick={togglePasswordVisibility}>
                  {passwordShown ? (
                    <EyeIcon
                      className="h-5 w-5"
                      style={{ transform: "translate(1650%, 60%)" }}
                    />
                  ) : (
                    <EyeSlashIcon
                      className="h-5 w-5"
                      style={{ transform: "translate(1650%, 60%)" }}
                    />
                  )}
                </i>
              }
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900">
                Xác nhận mật khẩu
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={confirmPasswordShown ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              icon={
                <i onClick={toggleConfirmPasswordVisibility}>
                  {confirmPasswordShown ? (
                    <EyeIcon
                      className="h-5 w-5"
                      style={{ transform: "translate(1650%, 60%)" }}
                    />
                  ) : (
                    <EyeSlashIcon
                      className="h-5 w-5"
                      style={{ transform: "translate(1650%, 60%)" }}
                    />
                  )}
                </i>
              }
              required
            />
          </div>
          {errorMessage && (
            <Typography variant="small" color="red" className="mb-4">
              {errorMessage}
            </Typography>
          )}
          {successMessage && (
            <Typography variant="small" color="green" className="mb-4">
              {successMessage}
            </Typography>
          )}
          <Button
            type="submit"
            color="gray"
            size="lg"
            typeof="submit"
            className="mt-6 p-3"
            fullWidth>
            Đăng ký
          </Button>
          <Typography
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal">
            Đã có tài khoản?{" "}
            <Link to="/login" className="font-medium text-gray-900">
              Đăng nhập ngay
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default Register;
