
import React from 'react';
import { Button } from 'react-bootstrap';

const Registration = (props: any) => (
  <div>
    Registration Component
    <br/>
    <Button onClick={() => props.nextPageHandler("Login")}>Back to Login</Button>
  </div>
);

const RegPage = (props:any) => {
    const propsClick = props.onclick;
    const nextPage = props.nextPage;
    const [userName, setUserName]=useState("");
    const [userPass, setUserPass]=useState("");
    return (
        <div className="MHome">
            <div className="content">
        <div className="limiter" id="limiter-home3">
            <div className="container-home3 ">
                <div className="wrap-home3 ">
                    <div>
                        

                    <section className="">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black">
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                    <div className="">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4">

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                            <input type="text" id="form3Example1c" className="form-control" />
                                            <label className="form-label" >First Name</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                            <input type="email" id="form3Example3c" className="form-control" />
                                            <label className="form-label">Last Name</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                            <input type="password" id="form3Example4c" className="form-control" />
                                            <label className="form-label" >Username</label>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                            <input type="password" id="form3Example4cd" className="form-control" />
                                            <label className="form-label" >Password</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                            <input type="password" id="form3Example4cd" className="form-control" />
                                            <label className="form-label" >Email</label>
                                            </div>
                                        </div>

                                        {/* <div className="form-check d-flex justify-content-center mb-5">
                                            <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            id="form2Example3c"
                                            />
                                            <label className="form-check-label">
                                            I agree all statements in <a href="#!"></a>
                                            </label>
                                        </div> */}

                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="button" className="btn btn-primary btn-lg">Register</button>
                                        </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        {/* <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="Sample image"/> */}

                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>


                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default RegPage;