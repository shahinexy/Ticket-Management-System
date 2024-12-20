import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Register = () => {
  const {createUser} = useContext(AuthContext)

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      console.log('onsubmit',data)
      createUser(data.email, data.password)
      .then((res) => {
        console.log('Auth result', res.user)
        if(res){
          const userdata = {userEmail: data.email, userPass: data.password}
          axios.post(`http://localhost:3000/user`,userdata)
          .then(res =>{
            console.log(`Post in mongoDB ${res}`);
          })
          .catch(error => console.log(error))
        }
      })
      .catch((error) => {
        console.log(error)
      })
    };
  
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-purple-600">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                {...register('name')}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                {...register('email')}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                {...register('password')}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
