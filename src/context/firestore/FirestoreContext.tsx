import React, { createContext, useContext } from "react";
import { db } from "../../utils/firebase-config";
import { collection, addDoc } from "firebase/firestore";

const FirestoreContext = createContext<any>({});

//
export const useFirestore = () => useContext(FirestoreContext);

export function FirestoreContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // user_input_data 컬렉션 담고있는 변수
  const userInputData = collection(db, "user_input_data");
  // 어떤 식으로 db에서 불러오는 로직을 구성하면 될까..
  // 특정 컬렉션에 새로운 doc 추가 하는 함수

  //  csv 파일 업로드시, user_input_data컬렉션에  user.email, day, retention 값 을 가지는 새로운 doc 생성
  const createUserInputData = async (
    calculation_id: any,
    userDay: any,
    userRetention: any
  ) => {
    console.log("inside");
    return await addDoc(userInputData, {
      calculation_id: "calculation_id",
      day: userDay,
      retention: userRetention,
    });
  };
  //  데이터 입력 후, 다음 누르면 user_calculation_info 저장

  // calculation_insight 컬렉션에서, 데이터를 불러와서 그로쓰 관련 인사이트 제공

  const value = {
    createUserInputData,
  };

  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  );
}
