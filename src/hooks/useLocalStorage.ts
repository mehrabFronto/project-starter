import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialState: any) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key) as string) || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
