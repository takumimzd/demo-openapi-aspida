import { useEffect, useState } from "react";
import { apiClient } from "../lib/apiClient";
import { Methods } from "../api/blogs";

export const useGetBlogs = () => {
  const [blogs, setBlogs] = useState<Methods["get"]["resBody"]>();
  const getBlogs = async () => {
    const res = await apiClient.blogs.$get();
    setBlogs(res);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return { blogs };
};
