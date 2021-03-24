import { useState, useEffect } from "react";

const useGetMeals = () => {
  const [mealInfo, setMealInfo] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3003/meals")
        .then((response) => response.json())
        .then((data) => setMealInfo(data));
    }, []);
  return mealInfo;
};

export default useGetMeals;

