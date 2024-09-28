import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const id = router.query.userId;
  return <div>you select user {id}</div>;
};

export default User;
