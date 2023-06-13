import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const nav = useNavigate();
  let [confpass, setConfpass] = useState();
  const [user, setState] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    mobileNo: "",
    gender: "",
    age: ""
  })

  //let confpass;

  function create(e) {
    e.preventDefault();
    if (user.password === confpass) {

      console.log(user)
      axios.post("https://localhost:7281/api/user", user).then((response) => {

        //   setRes(response.data);

        alert("Successfully register")
        nav("/home")
      }).catch(() => {
        alert("Not Registered")
      })


    }
    else {
      alert("Please Enter Correct Password")
    }


  }
  return (
    <>
      <div style={{ paddingBottom: "80px", backgroundColor: "#8fc4b7" }}>
        <section class="vh-100 gradient-custom" style={{ marginBottom: "400px", paddingTop: "80px" }}>
          <div class="container py-5 h-100">
            <div class="row justify-content-center align-items-center h-100">
              <div class="col-12 col-lg-9 col-xl-7">
                <div class="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                  <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                    <form>

                      <div class="row">
                        <div class="col-md-6 mb-4">

                          <div class="form-outline">
                            <input type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e) => setState({ ...user, firstName: e.target.value })} />
                            <label class="form-label" for="firstName">First Name</label>


                          </div>

                        </div>
                        <div class="col-md-6 mb-4">

                          <div class="form-outline">


                            <input type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e) => setState({ ...user, lastName: e.target.value })} />
                            <label class="form-label" for="lastName">Last Name</label>
                          </div>

                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6 mb-4 d-flex align-items-center">

                          <div class="form-outline datepicker w-100">


                            <input type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e) => setState({ ...user, email: e.target.value })} />
                            <label for="birthdayDate" class="form-label">Email</label>
                          </div>

                        </div>
                        <div class="col-md-6 mb-4 pb-2">

                          <div class="form-outline">


                            <input type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e) => setState({ ...user, userName: e.target.value })} />
                            <label class="form-label" for="phoneNumber">UserName</label>
                          </div>

                        </div>

                      </div>

                      <div class="row">
                        <div class="col-md-6 mb-4 pb-2">

                          <div class="form-outline">
                            <input type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e) => setState({ ...user, password: e.target.value })} />
                            <label class="form-label" for="emailAddress">Password</label>

                          </div>

                        </div>
                        <div class="col-md-6 mb-4 pb-2">

                          <div class="form-outline">
                            <input type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e) => setConfpass(e.target.value)} />
                            <label class="form-label" for="phoneNumber">Confirm Password</label>

                          </div>

                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6 mb-4 pb-2">

                          <div class="form-outline">
                            <input type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e) => setState({ ...user, mobileNo: e.target.value })} />
                            <label class="form-label" for="emailAddress">Contact No</label>

                          </div>

                        </div>
                        <div class="col-md-6 mb-4 pb-2">

                          <div class="form-outline">
                            <input type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e) => setState({ ...user, age: e.target.value })} />
                            <label class="form-label" for="emailAddress">Age</label>

                          </div>

                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 mb-4">

                          <div class="form-outline">


                            <input type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e) => setState({ ...user, gender: e.target.value })} />
                            <label class="form-label" for="firstName">Gender</label>
                          </div>

                        </div>

                      </div>

                      <div class="mt-4 pt-2">

                        <button class="btn btn-primary btn-lg"
                          data-mdb-ripple-color="dark" onClick={create}>Register</button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )

}

export default Register;