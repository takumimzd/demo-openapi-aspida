import { useState } from "react";
import { apiClient } from "../lib/apiClient";
import { Methods } from "../api/blogs/_blogId@number";

export const usePostBlogs = () => {
  const [createdBlog, setCreatedBlog] = useState<Methods["post"]["resBody"]>();
  const createBlog = async () => {
    const res = await apiClient.blogs._blogId(1).$post({
      body: {
        title: "タイトル",
        body: "ブログの内容",
      },
    });
    setCreatedBlog(res);
  };
  return { createBlog, createdBlog };
};
