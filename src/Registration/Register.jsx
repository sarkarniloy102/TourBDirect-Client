import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photourl =form.photourl.value;
        console.log(name, email, password,photourl)


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">

                <form onSubmit={handleRegister} >
                    <div className="w-full max-w-md p-8 space-y-3 mx-auto rounded-xl bg-gray-900 text-gray-100">
                        <h1 className="text-2xl font-bold text-center">Register Here</h1>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Name</label>
                            <input  type="text" placeholder="name" name="name" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Email</label>
                            <input  type="email" placeholder="Email" name="email" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Password</label>
                            <input  type="password" placeholder="password" name="password" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">PhotoURL</label>
                            <input  type="text" placeholder="https://" name="photourl" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                        </div>
                        <input className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900 cursor-pointer" type="submit" value="Sign Up" />
                        <p className="text-xs text-center sm:text-gray-400 ">Do not have an account?
                            <Link to={'/login'} rel="noopener noreferrer" href="#" className="underline ml-2 text-gray-100">Login</Link>
                        </p>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Register;