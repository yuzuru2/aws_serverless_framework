export default interface reducer {
  basic: {
    loading: boolean;
  };

  home: {
    pagination: number;
    count: number;
    data: {
      bid: number;
      bidNum: number;
      bname: string;
      gid: number;
      date: number;
    }[];
    post: {
      bname: string;
      gid: number;
    };
  };
  talk: {
    pagination: number;
    count: number;
    data: {
      bid: number;
      uname: string;
      message: string;
      date: number;
      num: number;
    }[];
    post: {
      uname: string;
      message: string;
    };
  };
}
