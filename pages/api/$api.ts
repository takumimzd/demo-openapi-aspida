import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from "./blogs";
import type { Methods as Methods1 } from "./blogs/_blogId@string";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://localhost:3000" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/blogs";
  const GET = "GET";
  const POST = "POST";
  const PATCH = "PATCH";

  return {
    blogs: {
      _blogId: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods1["get"]["resBody"],
              BasicHeaders,
              Methods1["get"]["status"]
            >(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods1["get"]["resBody"],
              BasicHeaders,
              Methods1["get"]["status"]
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          /**
           * ブログ作成
           * @returns Created
           */
          post: (option: {
            body: Methods1["post"]["reqBody"];
            config?: T | undefined;
          }) =>
            fetch<
              Methods1["post"]["resBody"],
              BasicHeaders,
              Methods1["post"]["status"]
            >(prefix, prefix1, POST, option).json(),
          /**
           * ブログ作成
           * @returns Created
           */
          $post: (option: {
            body: Methods1["post"]["reqBody"];
            config?: T | undefined;
          }) =>
            fetch<
              Methods1["post"]["resBody"],
              BasicHeaders,
              Methods1["post"]["status"]
            >(prefix, prefix1, POST, option)
              .json()
              .then((r) => r.body),
          /**
           * ブログ更新
           * @returns OK
           */
          patch: (option: {
            body: Methods1["patch"]["reqBody"];
            config?: T | undefined;
          }) =>
            fetch<
              Methods1["patch"]["resBody"],
              BasicHeaders,
              Methods1["patch"]["status"]
            >(prefix, prefix1, PATCH, option).json(),
          /**
           * ブログ更新
           * @returns OK
           */
          $patch: (option: {
            body: Methods1["patch"]["reqBody"];
            config?: T | undefined;
          }) =>
            fetch<
              Methods1["patch"]["resBody"],
              BasicHeaders,
              Methods1["patch"]["status"]
            >(prefix, prefix1, PATCH, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods0["get"]["resBody"],
          BasicHeaders,
          Methods0["get"]["status"]
        >(prefix, PATH0, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods0["get"]["resBody"],
          BasicHeaders,
          Methods0["get"]["status"]
        >(prefix, PATH0, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
