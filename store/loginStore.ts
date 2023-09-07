import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  token: null | string;
  data: null | any;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  getData: () => Promise<void>;
}

const useAuthStore = create<AuthState>()(

    (set) => ({
      isAuthenticated: false,
      token: null,
      data: null,
      login: async (email, password) => {
        try {
          const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "email": email, "password": password }),
          });

          if (!response.ok) {
            alert('Terjadi kesalahan saat mengirim data');
          }

          const responseData = await response.json();

          if (responseData?.token?.length > 1) {
            set({ token: responseData.token, isAuthenticated: true });
          } else {
            set({ token: null, isAuthenticated: false });
          }
        } catch (error) {
          console.error(error);
        }
      },
      register: async (email, password) => {
        try {
          const response = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "email": email, "password": password }),
          });

          if (!response.ok) {
            alert('Terjadi kesalahan saat mengirim data');
          }

          const responseData = await response.json();

          if (responseData?.token?.length > 1) {
            set({isAuthenticated: true });
          } else {
            set({ token: null, isAuthenticated: false });
          }
        } catch (error) {
          console.error(error);
        }
      },
      logout: () => {
        set({ token: null, isAuthenticated: false });
      },
      getData: async () => {
        try {
         
          const response = await fetch(' https://reqres.in/api/users');
          if (!response.ok) {
            
            throw new Error('Terjadi kesalahan saat mengambil data');
          }
          const data = await response.json();
          set({ data: data });
        } catch (error) {
          
          console.error('Error fetching data:', error);
        }
      },
    }),
);

export default useAuthStore;
