import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_blogId@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/blogs'
  const GET = 'GET'
  const POST = 'POST'
  const PATCH = 'PATCH'

  return {
    _blogId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * ブログ作成
         * @returns Created
         */
        post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, prefix0, POST, option).json(),
        /**
         * ブログ作成
         * @returns Created
         */
        $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, prefix0, POST, option).json().then(r => r.body),
        /**
         * ブログ更新
         * @returns OK
         */
        patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json(),
        /**
         * ブログ更新
         * @returns OK
         */
        $patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    /**
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns OK
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
