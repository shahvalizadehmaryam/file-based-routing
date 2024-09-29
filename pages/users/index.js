import Link from "next/link";

const Users = () => {
  const users = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    { id: 5, name: 5 },
  ];
  return (
    <div>
      <h3>user list</h3>
      <ul>
        {users.map((user) => (
          <Link href={`/users/${user.id}`}>
            <li key={user.id}>{user.name}</li>
          </Link>
        ))}
      </ul>
      <style jsx>{`
        h3 {
          background-color: red;
          color: blue;
        }
      `}</style>
    </div>
  );
};

export default Users;
