import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';

const SignIn = () => {
  const { signInUser } = use(AuthContext)
  const handleSignIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(email, pass);
    // send to firebase
    signInUser(email, pass)
      .then(result => {
        console.log(result.user.metadata.lastSignInTime);
        const userInfo = {
          email,
          lastSignInTime: result.user.metadata.lastSignInTime
        }
        // send to db
        fetch('https://2000-server.vercel.app/users', {
          method: "PATCH",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(userInfo)
        })
          .then(res => res.json())
          .then(data => console.log("after patch: ", data)
          )

      })
      .catch(error => {
        console.log(error);

      })

  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignIn} className="fieldset">
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;