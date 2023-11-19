import { useContext } from "react";
import { Link, json } from "react-router-dom";
import { AuthContexst } from "../provider/AuthProvider";


const Singin = () => {



    const { singInUser } = useContext(AuthContexst);

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        console.log(email, password);

        singInUser(email, password)
            .then(result => {
                console.log(result.user);
                const user = {
                    email,
                    lastLoginAt
                        : result.user.metadata.lastSignInTime

                }
                // update  last  loged  at  in the tata basee 
                fetch('http://localhost:5000/user',{
                    method: 'PATCH',
                    header: {
                        'content-type': 'appliecation/js'
                        
                    },
                    body:JSON.stringify(user)

                })
                .then(res =>res(json))
                .then(data =>{
                    console.log(data);
                })

            })
            .catch(error => {
                console.error(error);
                // console.error(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">update now</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <Link to={'/'}><button>app</button></Link>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    );
};

export default Singin;