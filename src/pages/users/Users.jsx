
import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { getAuth, deleteUser } from "firebase/auth";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  console.log(users);

  const handleUserDelete = e => {
    console.log(e);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://2000-server.vercel.app/users/${e}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);

            if (data.deletedCount) {




              const auth = getAuth();
              const user = auth.currentUser;

              if (user) {
                deleteUser(user).then(() => {
                  // User deleted.
                  console.log("User account deleted.");
                }).catch((error) => {
                  // An error happened. Re-authentication might be required.
                  console.error("Error deleting user:", error);
                });
              }



              Swal.fire({
                title: "Deleted!",
                text: "Your user has been deleted.",
                icon: "success"
              });
              const remainingUser = users.filter(user => user._id !== e);
              setUsers(remainingUser)
            }
          })

      }
    });


  }





  return (
    <div className="min-h-screen bg-[#858585] flex justify-center items-start py-10">
      <div className="w-full max-w-7xl bg-[#898989] rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Users
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead className="bg-[#555]">
              <tr>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Address</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Last Login Time</th>
                <th className="border px-4 py-2">Last Sign-In Time</th>
                <th className="border px-4 py-2">Delete Or Edit</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="text-center hover:bg-[#a17575]">
                  <td className="border px-4 py-2">
                    <img
                      src={user.url}
                      alt="User"
                      className="w-10 h-10 rounded-full mx-auto"
                    />
                  </td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.address}</td>
                  <td className="border px-4 py-2">{user.phone}</td>
                  <td className="border px-4 py-2">
                    {user.lastLoginTime}
                  </td>
                  <td className="border px-4 py-2">
                    {user.lastSignInTime}
                  </td>
                  <td className="border px-4 py-2">
                    <button onClick={() => handleUserDelete(user._id)} className="cursor-pointer transition-all duration-100 text-[#ea856b] hover:text-[#fff] hover:bg-[#d76666] border-1 border-[#cd2121] py-2 px-3 rounded-[3px]">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
