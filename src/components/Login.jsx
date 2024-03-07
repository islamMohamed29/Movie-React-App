import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
  const [errorList, setErrorList] = useState([]);
  let navigate = useNavigate();
  // let apiUrl = ''
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  function getUserData(e) {
    let movixUser = { ...user };
    movixUser[e.target.name] = e.target.value;
    setUser(movixUser);
  }
  //   async function submitRegForm(e) {
  //     e.preventDefault();
  //     let validateResult = validateRegForm();
  //     if (validateResult.error) {
  //       setErrorList(validateResult.error.details);
  //     } else {
  //       let { data } = await axios.post(apiUrl + "signin", user);
  //       if (data.message === "success") {
  //         localStorage.setItem("token", data.token);
  //         props.saveUserData();
  //         navigate("/home");
  //       } else {
  //         console.log(data);
  //         setError("Check Your Data");
  //       }
  //     }
  //   }
  //   function validateRegForm() {
  //     let scheme = Joi.object({
  //       email: Joi.string().email({
  //         minDomainSegments: 2,
  //         tlds: { allow: ["com", "net"] },
  //       }),
  //       password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  //     });
  //     return scheme.validate(user, { abortEarly: false });
  //   }
  function goToHome() {
    props.setUserData(true);
    navigate("/home");
  }
  return (
    <>
      <section class="login">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mt-4">
              <div class="box">
                <div class="nav-log">
                  <ul class="list-unstyled p-0 m-0 d-flex justify-content-center align-items-center">
                    <li>
                      <Link class="active" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup">Register</Link>
                    </li>
                  </ul>
                </div>
                <form>
                  {/* {errorList.map((err, i) => i === 1 ? <div className="alert alert-warning d-flex">password incorect</div> : <div className="alert alert-warning d-flex">{err.message}</div>)} */}
                  {error ? (
                    <div className="alert alert-warning d-flex">{error}</div>
                  ) : (
                    ""
                  )}
                  <div class="form-group">
                    <input
                      onChange={getUserData}
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="test@gmail.com"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      onChange={getUserData}
                      class="form-control"
                      type="password"
                      name="password"
                      placeholder="*****"
                    />
                  </div>

                  <button onClick={goToHome} class="btn-login mt-3">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
