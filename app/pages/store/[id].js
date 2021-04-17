import { useRouter } from "next/router";

export default function store() {
  const Post = () => {
    const router = useRouter();
    const { pid } = router.query;

    return <p>Post: {pid}</p>;
  };

  export default Post;
}
