import { useEffect, useState } from "react";
import { apiClient } from "../lib/apiClient";
import { Methods } from "../api/posts/_postId@number";

export const useGetBlogs = () => {
  const [blogs, setBlogs] = useState<Methods["get"]["resBody"][]>();
  const getBlogs = async () => {
    const res = await apiClient.posts.$get();
    setBlogs(res);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return { blogs };
};
