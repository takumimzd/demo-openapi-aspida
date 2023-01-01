/* eslint-disable */
export type Methods = {
  /** 投稿一覧の取得 */
  get: {
    status: 200;
    /** OK */
    resBody: {
      id: number;
      userId: number;
      title: string;
      body: string;
    }[];
  };

  /** 投稿の作成 */
  post: {
    status: 201;

    /** Created */
    resBody: {
      id: number;
      userId: number;
      title: string;
      body: string;
    };

    reqBody: {
      id: number;
      title: string;
      body: string;
    };
  };
};
