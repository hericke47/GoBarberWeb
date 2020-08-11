import { createContext } from 'react';
// usar informações em varios lugares
interface AuthContextData {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;