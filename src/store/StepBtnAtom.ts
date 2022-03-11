import { atom } from "recoil";
import { LeftSectionDisplay } from "../types";

export const StepBtnState = atom<LeftSectionDisplay[]>({
  key: "StepBtnState",
  default: [
    {
      step: "1",
      title: "CSV 파일 올리기",
      src: "assets/step1.png",
      done: false
    },
    {
      step: "2",
      title: "기본정보입력",
      src: "assets/step2.png",
      done: false
    },
    {
      step: "3",
      title: "LTV 결과 확인",
      src: "assets/step3.png",
      done: false
    }
  ]
});
