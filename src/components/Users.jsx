import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
  const lodaedUsers = useLoaderData();
  const [users, setUsers] = useState(lodaedUsers);

  const handleDelit = id => {

    fetch(`http://localhost:5000/user/${id}`, {
      method: `DELETE`
    }
    )
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          console.log('delited successFully');
          // remove the users
          const remainingUsers = users.filter(user => user._id !== id);
          setUsers(remainingUsers);
        }
      })

  }

  return (
    <div>
      <h2>Users: {lodaedUsers.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              {/* <th>id</th> */}
              <th>Email</th>
              <th>createAt</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map(user => <tr key={user._id}>

                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createAt}</td>
                <td>{user.lastLoginAt}</td>
                <td>
                  <button
                    onClick={() => handleDelit(user._id)}
                    className="btn"
                  >X</button>
                </td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
      <Link to={'/'}><button>app</button></Link>
    </div>
  );
};

export default Users;