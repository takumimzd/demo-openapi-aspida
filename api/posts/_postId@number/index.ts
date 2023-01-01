/* eslint-disable */
export type Methods = {
  /** 投稿取得 */
  get: {
    status: 200

    /** OK */
    resBody: {
      id: number
      userId: number
      title: string
      body: string
    }
  }

  /** 投稿更新 */
  patch: {
    status: 200

    /** OK */
    resBody: {
      id: number
      userId: number
      title: string
      body: string
    }

    reqBody: {
      title: string
      body: string
    }
  }
}
