import { useState, useEffect } from "react";

const useInitialState = () => {
  const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3003/results/1")
        .then((response) => response.json())
        .then((data) => setUserInfo(data));
    }, []);
  return userInfo;
};

export default useInitialState;
