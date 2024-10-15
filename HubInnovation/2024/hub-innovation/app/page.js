"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [usuarios, setUsuarios] = useState()
  async function getUsers(){
    const response = await fetch('/api/users');
      const dados = await response.json();
      setUsuarios(dados);
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      {
        usuarios.map((usuario) => (
          <li key = {usuario.id}>
            {usuario.name} - {usuario.age}
          </li>
        ))
      }
    </>
  );
}
