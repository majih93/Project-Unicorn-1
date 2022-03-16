import React, { createContext, useContext, useState } from "react";
import { db } from "../../utils/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../loginAuthentication/AuthContext";
import { useRecoilState } from "recoil";
import { userInputState } from "../../store/inputAtom";

const FirestoreContext = createContext<any>({});

// firestore 관련해서 전역에서 사용하려는 코드
export const useFirestore = () => useContext(FirestoreContext);

export function FirestoreContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // step1 에서 입력된 파일 이름 다른 곳에서 사용하기 위한 state
  const [fileName, setFileName] = useState("");

  // 데이터 받아야하는 문서 컬렉션 가져오는 변수
  const userInputDataRef = collection(db, "user_input_data");
  const userCalculationInfoRef = collection(db, "user_calculation_info");

  // 특정 컬렉션에 새로운 doc 추가 하는 함수
  //  csv 파일 업로드시, user_input_data컬렉션에  user.email, day, retention 값 을 가지는 새로운 doc 생성
  const createUserInputData = async (
    calculation_id: any,
    userDay: any,
    userRetention: any
  ) => {
    await addDoc(userInputDataRef, {
      calculation_id: calculation_id,
      day: userDay,
      retention: userRetention,
    });
  };
  // step2 데이터 입력 후, 다음 누르면 user_calculation_info 저장
  // 함수 호출되는 시점에 시간 담아줄 변수
  const timeStamp = new Date().getTime();
  // calculation_id에 해당될 로그인 된 유저 이메일
  const { userEmail } = useAuth();
  // userCalculationInfo 에 포함될 나머지 데이터가 있는 userInputData 받아오기
  const userInputData = useRecoilState(userInputState);
  const createUserCalculationInfo = async () =>
    // OS: any,
    // calculation_id: any,
    // category: any,
    // country_id: any,
    // filename: any,
    // ltv_value: any,
    // service_name: any,
    // service_url: any,
    // status_code: any,
    // timestamp: any,
    // user_id: any
    {
      await addDoc(userCalculationInfoRef, {
        // ...userInputData,
        // OS: OS,
        calculation_id: userEmail,
        // category: category,
        country_id: "KR",
        filename: fileName,
        ltv_value: 7.1,
        // service_name: service_name,
        // service_url: service_url,
        status_code: 200,
        timestamp: timeStamp,
        user_id: userEmail,
      });
    };

  // calculation_insight 컬렉션에서, 데이터를 불러와서 그로쓰 관련 인사이트 제공

  const value = {
    createUserInputData,
    createUserCalculationInfo,
    setFileName,
    fileName,
  };

  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  );
}
