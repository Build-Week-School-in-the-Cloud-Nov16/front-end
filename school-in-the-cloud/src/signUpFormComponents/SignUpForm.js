import React from "react";

export default function SignUpForm(props) {
    const { formValues, change, submit, buttonDisabled, errors } = props;
    return (
        <div>
            <h3>Create Account</h3>
            <div>
                <p className="errors">{errors.username}</p>
                <p className="errors">{errors.password}</p>
                <p className="errors">{errors.email}</p>
                <p className="errors">{errors.role}</p>
            </div>
            <form onSubmit={submit}>
                <label>
                    Username:
                    <input type="text" name="username" value={formValues.username} onChange={change}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={formValues.password} onChange={change}/>
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formValues.email} onChange={change}/>
                </label>
                <label>
                    Role:
                    <select name="role" value={formValues.role} onChange={change}>
                        <option value="">--Choose Role--</option>
                        <option value="admin">Admin</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="student">Student</option>
                    </select>
                </label>
                <button disabled={buttonDisabled}>Submit</button>
                
            </form>
            
        </div>
    );
}