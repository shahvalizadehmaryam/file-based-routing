import { useRouter } from "next/router";

const Comments = () => {
  const router = useRouter();
  const { commentId, studentId } = router.query;
  return (
    <h3>
      student {studentId} and comment {commentId}
    </h3>
  );
};

export default Comments;
