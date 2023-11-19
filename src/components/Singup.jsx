

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContexst } from "../provider/AuthProvider";




const Singup = () => {
    const {creatUser} = useContext(AuthContexst);


    const  handlesingup = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        creatUser(email, password)
        .then(result =>{
            console.log(result.user);
        const createAt = result.user?.metadata?.creationTime;
        const user = {email, createAt: createAt};
        fetch('http://localhost:5000/user',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data =>{
            // console.log(data);
            if(data.insertedId){
                console.log('user added to the database')
            }
        })


        })
        .catch(error =>{
            console.error(error);
        })
      
       

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">sing up now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                        onSubmit={handlesingup}
                         className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" 
                                name="email"
                                placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                name="password"
                                placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sing up</button>



                                <Link to={'/'}><button>app</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
           
        </div>
    );
};

export default Singup;