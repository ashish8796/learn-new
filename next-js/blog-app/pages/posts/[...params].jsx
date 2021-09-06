import React from "react";
import { useRouter } from "next/router";
import posts from "../../src/utils/post.json";

export default function Post() {
  const router = useRouter();
  const { params } = router.query;
  // console.log(posts[id - 1].post);

  // console.log({ id });

  return (
    <div>
      <h1>This is post no {id}.</h1>

      <p>{posts[id - 1].post}</p>

      <button onClick={(e) => router.push("/")}>Home</button>
    </div>
  );
}
