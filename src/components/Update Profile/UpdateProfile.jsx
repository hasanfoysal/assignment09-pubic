import {Helmet} from "react-helmet";

const UpdateProfile = () => {
    return (
        
        <div className="hero min-h-screen bg-base-200">
             <Helmet>
               
               <title>Update</title>
               
           </Helmet>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Update Profile!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">photo url</span>
          </label>
          
          <input type="text" placeholder="Photo url" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Profile</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default UpdateProfile;