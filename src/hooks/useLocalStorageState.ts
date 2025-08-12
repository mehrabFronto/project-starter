import { useEffect, useState } from "react";

/**
 * Custom hook to store and persist state in localStorage.
 * - Accepts a key and an initial state.
 * - On first mount, retrieves the saved value from localStorage (if any).
 * - Automatically updates localStorage whenever the state changes.
 *
 * @template T - The type of the state value.
 * @param key - Key used to store the value in localStorage.
 * @param initialState - Initial state value if no saved value exists.
 * @returns [value, setValue] - State value and setter function (like useState).
 */
const useLocalStorageState = <T>(key: string, initialState: T) => {
  const [value, setValue] = useState<T>(initialState);

  // Load stored value from localStorage on mount
  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      setValue(JSON.parse(storedValue));
    }
  }, [key]);

  // Save value to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
};

export default useLocalStorageState;
