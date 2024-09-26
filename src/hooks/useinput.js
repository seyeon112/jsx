import { userState } from "react";


const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChangeValue = () => {
    setValue(e.target.value)
  }
  return [value, onChangeValue, setValue];
};

export default useInput;