import { User } from "@firebase/auth";
import AuthContext from "../loginAuthentication/AuthContext";
import { auth } from "../../firebase-config";
import { useEffect, useState } from "react";

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // useEffect를 통해서 user 값에 대한 변경 감지
  // 한번만 실행되면 됨
  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((unicornUser) => {
      console.log("로그인되어있음", unicornUser);
      setUser(unicornUser);
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
