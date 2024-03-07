import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
  const [errorList, setErrorList] = useState([]);
  let navigate = useNavigate();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  function getUserData(e) {
    let movixUser = { ...user };
    movixUser[e.target.name] = e.target.value;
    setUser(movixUser);
    console.log(movixUser);
  }
  // async function submitRegForm(e) {
  //     e.preventDefault();
  //     let validateResult = validateRegForm();
  //     if (validateResult.error) {
  //         setErrorList(validateResult.error.details)
  //     }
  //     else {
  //         let { data } = await axios.post('', user)
  //         if (data.message === 'success') {
  //             navigate('/login')
  //         }
  //         else {
  //             setError('Email is already registred')
  //         }
  //     }
  // }
  // function validateRegForm() {
  //     let scheme = Joi.object({
  //         first_name: Joi.string().alphanum().min(3).max(10).required(),
  //         last_name: Joi.string().alphanum().min(3).max(10).required(),
  //         email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  //         password: Joi.string()
  //             .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  //     });
  //     return scheme.validate(user, { abortEarly: false });
  // }
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
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link class="active" to="/signup">
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
                <form>
                  {errorList.map((err) => (
                    <div className="alert alert-warning d-flex">
                      {err.message}
                    </div>
                  ))}
                  {error ? (
                    <div className="alert alert-warning d-flex">{error}</div>
                  ) : (
                    ""
                  )}
                  <div class="form-group">
                    <input
                      onChange={getUserData}
                      class="form-control"
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      onChange={getUserData}
                      class="form-control"
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      onChange={getUserData}
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      onChange={getUserData}
                      class="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>

                  <button class="btn-login mt-3">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
