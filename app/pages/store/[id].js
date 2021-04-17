import { useRouter } from "next/router";

export default function store() {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Post: {pid}</p>;
}
