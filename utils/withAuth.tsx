// "use client";

import useAuthStore from '@/store/loginStore';

import { useRouter } from 'next/navigation';
import { useEffect } from "react";


const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithAuth = (props: P) => {
    const router = useRouter();

    const {token} = useAuthStore(state => state)

    useEffect(() => {
     

      if (token === null) {
        router.push("/login");
      }
    }, []);
    useEffect(() => {
     

      if (token === null) {
        router.push("/login");
      }
    }, [token]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;