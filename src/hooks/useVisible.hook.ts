import { useCallback, useState } from "react";

function useVisible(
  defaultValue: boolean,
): [boolean, () => void, () => void, () => void] {
  const [visible, setVisibleState] = useState(defaultValue);

  const setVisible = useCallback(() => setVisibleState(true), []);
  const setInvisible = useCallback(() => setVisibleState(false), []);
  const toggleVisible = useCallback(() => setVisibleState(!visible), [visible]);

  return [visible, setVisible, setInvisible, toggleVisible];
}

export default useVisible;
