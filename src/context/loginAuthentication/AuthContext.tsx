// 로그인 구현하는 context 파일
import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../../utils/firebase-config";
import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// 컨텍스트로 제공되는 값들이 가지는 기초값? 기초 상태를 알려주는 것
const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

// auth 관련해서 전역에서 사용하고픈 로직/변수 제공하는 provider
export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // 현재 로그인 되어있는 유저 저장하는 변수
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>("");

  // 로그인 여부 확인하기 위한 함수
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setUserEmail(user.email);
      }
    });
    return () => {
      //component unmount 시애 user정보 제거해주는 cleanup func
      unsubscribe();
    };
  }, []);

  // 회원가입 구현 로직 담은 함수(createUserWithEmailAndPassword는 userCredential을 담은 promise를 반환)
  const join = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 로그인 구현 로직 함수
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 구글 로그인 구현
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // 로그아웃함수
  const logout = () => {
    sessionStorage.clear();
    return signOut(auth);
  };

  // 비밀번호 초기화 메일 전송 함수
  const findPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email, {
      url: "https://localhost:3000/login",
    });
  };

  // 비밀번호 초기화 함수
  const resetPassword = (oobCode: any, newPassword: string) => {
    return confirmPasswordReset(auth, oobCode, newPassword);
  };

  const value = {
    currentUser,
    userEmail,
    join,
    login,
    logout,
    signInWithGoogle,
    findPassword,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
