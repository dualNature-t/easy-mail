import { useContext } from "react";
import { AppContext } from "../context";

const useForm = () => {
  const { form } = useContext(AppContext);

  return { form };
};

export default useForm;
