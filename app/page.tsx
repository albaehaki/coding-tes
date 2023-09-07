"use client";
import Image from "next/image";
import React, { useEffect } from "react";

// store
import useAuthStore from "@/store/loginStore";

// hoc
import withAuth from "@/utils/withAuth";

// compoents
import Card from "@/components/card";

function Home() {
  const { logout, getData, data, token } = useAuthStore((state) => state);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    
  }, [token]);

  const handleLogout = () => {
    logout();
  };
  console.log( token);
  return (
    <div className="h-screen m-5">
      <button
        className="py-2 px-5 bg-red-600 font-bold text-lg text-gray-200"
        onClick={handleLogout}
      >
        Logout
      </button>
      {Array.isArray(data?.data) ? (
        data.data.map((user: any) => <Card key={user.id} {...user} />)
      ) : (
        <p>Data belum tersedia atau bukan array.</p>
      )}
    </div>
  );
}

export default withAuth(Home);
