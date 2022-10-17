import React, {useState} from "react";

export const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const {name, phone, email} = formData;

    const onChange = (e: any) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const login = (name: String, phone: String, email: String) => {
        console.log("name", name);
        console.log("phone", phone);
        console.log("email", email);
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        login(name, phone, email);
    }

    return (
        <section className="contrainer">
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead">
                <i className="fas fa-user"/> Sign Into Your Account
            </p>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input 
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={name}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="tel" 
                        placeholder="Phone Number"
                        name="phone"
                        value={phone}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
        </section>
    )

}
