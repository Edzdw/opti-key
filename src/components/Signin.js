import React from "react";
import Axios from "axios";
import Signup from "./Signup";
import { normalAlert } from "./Swal";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Signin({ isOpen, toggle }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSignupModalOpen, setIsSignupModalOpen] = React.useState(false);

  const toggleSignupModal = () => {
    setIsSignupModalOpen(!isSignupModalOpen);
  };

  const handleSignin = () => {
    if (email === "" || password === "") {
      normalAlert("Vui lòng nhập id và mật khẩu để đăng nhập!", "error");
      return;
    } else if (!isValidEmail(email)) {
      normalAlert("Email không hợp lệ, vui lòng thử lại!", "error");
      return;
    }

    let data = JSON.stringify({
      "email": email,
      "password": password
    });

    let config = {
      method: 'post',
      url: 'https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/authenticate',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    Axios.request(config)
      .then((response) => {
        if (response.status === 200) {
          normalAlert("Đăng nhập thành công!", "success");
          localStorage.setItem("email", email);
          localStorage.setItem("access_token", response.data.access_token);
          window.location.reload();
        } else if (error.response.status == 403) {
          normalAlert("Email hoặc mật khẩu không chính xác, xin vui lòng thử lại!", "error");
        }
      })
      .catch((error) => {
        console.log("error", error);
        localStorage.clear();
      });
  }

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className=" modal-header">
          <h5 className=" modal-main-title " id="exampleModalLabel">
             Đăng nhập
          </h5>

          <h6 className="modal-sub-title" onClick={toggleSignupModal} id = "">
              Đăng kí
          </h6>

        </div>
        <ModalBody style={{ color: "black", display: "flex", flexDirection: "column", gap: "10px" }}>
          
          <div class = "form-group">
            <span> Email </span>

            <input class ="form-field" type="email" id="email" placeholder="Nhập email..." value={email} style={{ width: "100%" }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              />
          </div>

          <div class = "form-group">
            <input class ="form-field" type="password" id="password" placeholder="Nhập mật khẩu..." value={password} style={{ width: "100%" }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span> Password </span>

          </div>

          <Button color="primary" type="button" onClick={handleSignin}>
             <span> Sign In </span>
          </Button>
        </ModalBody>

        <ModalFooter style={{ color: "black" }}>
          <i>Quên mật khẩu? Nhấn vào <span className="sign-up-link" style={{ color: "#ffb400", cursor: "pointer" }} onClick={toggleSignupModal}>đây</span> để tạo lại mật khẩu</i>
        </ModalFooter>
      </Modal>
      <Signup isOpen={isSignupModalOpen} toggle={toggleSignupModal} />
    </>
  );
}

export default Signin;