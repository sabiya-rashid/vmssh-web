import React from "react";

const Login = ()=>{
    return(
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="loginModalLabel">Login</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    ...
                </div>
                <div className="modal-footer">
                    <p>Don't have an account <button className="btn" data-bs-toggle="modal" data-bs-target="#signupModal">Signup</button></p>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;