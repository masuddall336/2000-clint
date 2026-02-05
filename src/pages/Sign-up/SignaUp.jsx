import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const SignaUp = () => {

  const { creatUser } = use(AuthContext);
  console.log(creatUser);

  const handeSingIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const formDatas = new FormData(form);
    const user = Object.fromEntries(formDatas.entries());
    const { email, password, ...restData } = user;
    console.log(email, password, restData);


    creatUser(email, password)
      .then(rasult => {
        console.log(rasult.user);
        console.log(rasult.user.metadata.lastLoginAt);
        const sendDBData = {
          email,
          ...restData,
          lastLoginTime: rasult.user.metadata.lastLoginAt,
          lastSignInTime: rasult.user.metadata.lastSignInTime,
        }
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(sendDBData)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);

            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Account has been created",
                showConfirmButton: false,
                timer: 1500
              });
            }
          })

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
            <h1 className="text-5xl font-bold">Sign Up!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handeSingIn} className="fieldset">
                <label className="label">Full Name</label>
                <input type="text" className="input" name="name" placeholder="name" />
                <label className="label">Address</label>
                <input type="text" className="input" name="address" placeholder="Address" />
                <label className="label">Phone Number</label>
                <input type="text" className="input" name="phone" placeholder="Phone Number" />
                <label className="label">Profile Pic</label>
                <input type="text" className="input" name="url" placeholder="Picture url" />
                <label className="label">Email</label>
                <input type="email" className="input" name="email" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" name="password" placeholder="Password" />
                <button className="btn btn-neutral mt-4">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignaUp;