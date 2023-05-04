import { atom } from "recoil";

export const isLogin = atom({
  key: "isLogin",
  default: false,
});

export const isSub = atom({
  key: "isSub",
  default: false,
});
