import React from "react";

const Signup = ()=>{
    return(
        <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h5 className="modal-title" id="signupModalLabel">Signup</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    ...
                </div>
                <div className="modal-footer">
                <p>Already have an account <button className="btn" data-bs-toggle="modal" data-bs-target="#loginModal">login</button></p>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Signup;