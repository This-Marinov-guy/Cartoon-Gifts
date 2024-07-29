import { AppContext } from "@components/context/AppContext";
import { useContext } from "react";

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
