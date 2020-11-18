import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
    return(
        <div>
            <nav>
                <div>
                    <Link to="/">Login</Link>
                </div>
                <div>
                    <Link to="/sign-up">Sign Up</Link>
                </div>
            </nav>
        </div>
    )
}