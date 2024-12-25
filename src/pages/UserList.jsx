import { useState , useEffect } from "react"
import { Link } from "react-router";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState("");


 useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
if(Loading){
    return <h2>Loading...</h2>
}
if  (error){
    return <h2>{error}</h2>
}
  return (
    <div>
      <h1>All user</h1>
      {users.map((user) => (
       <li key={user.id}>
        <Link to={`/user/${user.id}`}>{user.name}</Link>
       </li>
      ))}
    </div>
  )
}

export default UserList
