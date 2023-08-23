import { getCookie } from '@/src/lib/Utils';
import { useQuery } from '@tanstack/react-query';
import { createContext, ReactNode, type FC } from 'react';
import Auth from '../apis/Auth.api';

interface ContextProps {
  children: ReactNode;
}

const AuthContext = createContext<Array<any>>([]);

const AuthProvider: FC<ContextProps> = ({ children }) => {
  const userInfo = getCookie('userInfo');

  const userData = JSON.parse(userInfo);

  const { data: user, isLoading } = useQuery({
    queryKey: ['user', userData?.data?.email],
    queryFn: () => Auth.me(userData?.data?.email),
  });

  return (
    <AuthContext.Provider value={[user?.data, isLoading]}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
