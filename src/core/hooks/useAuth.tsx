import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    alert("Usuario invalido tente novamente");
    throw new Error("Usuario invalido tente novamente");
  }

  return authContext;
};
