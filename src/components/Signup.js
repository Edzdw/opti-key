import React from "react";
import Axios from "axios";
import { normalAlert } from "./Swal";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Signup({ isOpen, toggle }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [refferal, setRefferal] = React.useState("");

  const handleSignup = () => {
    if (email === "" || password === "" || firstName === "" || lastName === "" || refferal === "") {
      normalAlert("Vui lòng nhập thông tin để đăng ký!", "warning");
      return;
    } else if (!isValidEmail(email)) {
      normalAlert("Email không hợp lệ, vui lòng thử lại!", "error");
      return;
    } else if (!isValidRefferall(refferal)) {
      normalAlert("ID không hợp lệ, vui lòng thử lại!", "error");
      return;
    }

    let data = JSON.stringify({
      "firstname": firstName,
      "lastname": lastName,
      "email": email,
      "password": password,
      "refferal": refferal
    });

    let config = {
      method: 'post',
      url: 'https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    Axios.request(config)
      .then((response) => {
        if (response.status === 200) {
          normalAlert("Đăng ký thành công!", "success");
          localStorage.setItem("email", email);
          localStorage.setItem("access_token", response.data.access_token);
          window.location.reload();
        } else if (error.response.status == 403) {
          normalAlert("Email đã tồn tại trong hệ thống, vui lòng thử lại!", "error");
        } else if (error.response.status == 402) {
          normalAlert("Người giới thiệu không tồn tại trong hệ thống, vui lòng thử lại!", "error");
        } else {
          normalAlert("Có lỗi xảy ra, vui lòng thử lại sau!", "error");
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

  function isValidRefferall(id) {
    const idRegex = /^[0-9]+$/;
    return idRegex.test(id);
  }

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className=" modal-header">
          <h6 className="modal-sub-title" id="">
            Đăng Nhập
          </h6>
          <h5 className=" modal-main-title" id="exampleModalLabel">
            Đăng Ký
          </h5>
        </div>
        <ModalBody style={{ color: "black", display: "flex", flexDirection: "column", gap: "20px" }}>
          <input class="form-field" type="text" id="lastName" placeholder="Nhập họ..." value={lastName} style={{ width: "100%" }}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input class="form-field" type="text" id="firstName" placeholder="Nhập tên..." value={firstName} style={{ width: "100%" }}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input class="form-field" type="email" id="email" placeholder="Nhập email..." value={email} style={{ width: "100%" }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input class="form-field" type="password" id="password" placeholder="Nhập mật khẩu..." value={password} style={{ width: "100%" }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input class="form-field" type="text" id="refferal" placeholder="Nhập người giới thiệu..." value={refferal} style={{ width: "100%" }}
            onChange={(e) => {
              setRefferal(e.target.value);
            }}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="button" onClick={handleSignup}>
            <span style={{ color: "white" }} > Sign In </span>
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Signup;