import { useState } from "react";
import { apiClient } from "../lib/apiClient";
import { Methods } from "../api/posts/_postId@number";

export const usePostBlogs = () => {
  const [createdBlog, setCreatedBlog] = useState<Methods["get"]["resBody"]>();
  const createBlog = async () => {
    const res = await apiClient.posts.$post({
      body: {
        id: 1,
        title: "タイトル",
        body: "ブログの内容",
      },
    });
    setCreatedBlog(res);
  };
  return { createBlog, createdBlog };
};
