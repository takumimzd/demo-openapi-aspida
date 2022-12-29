/* eslint-disable */
export type Methods = {
  get: {
    status: 200

    /** OK */
    resBody: {
      id: number
      title: string
      body: string
    }
  }

  /** ブログ作成 */
  post: {
    status: 201

    /** Created */
    resBody: {
      id: number
      title: string
      body: string
    }

    reqBody: {
      title: string
      body: string
    }
  }

  /** ブログ更新 */
  patch: {
    status: 200

    /** OK */
    resBody: {
      id: number
      title: string
      body: string
    }

    reqBody: {
      title: string
      body: string
    }
  }
}
