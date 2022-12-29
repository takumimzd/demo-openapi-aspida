import { useState } from "react";
import { apiClient } from "../lib/apiClient";
import { Methods } from "../pages/api/blogs/_blogId@string";

export const usePostBlogs = () => {
  const [createdBlog, setCreatedBlog] = useState<Methods["post"]["resBody"]>();
  const createBlog = async () => {
    const res = await apiClient.blogs._blogId("1").$post({
      body: {
        title: "タイトル",
        body: "ブログの内容",
      },
    });
    setCreatedBlog(res);
  };
  return { createBlog, createdBlog };
};
