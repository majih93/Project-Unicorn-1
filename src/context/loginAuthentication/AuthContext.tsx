// 로그인 구현하는 context 파일

import React from "react";
import { User } from "@firebase/auth";

const AuthContext = React.createContext<User | null>(null);
export default AuthContext;
