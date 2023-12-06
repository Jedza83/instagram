import { useUser } from "../UserContext";

function UserData() {
  const { user } = useUser();

  return (
    <div className="userData">
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}

export default UserData;
