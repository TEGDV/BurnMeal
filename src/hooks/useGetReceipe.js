import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const useGetReceipe = () => {
  const [receipe, setReceipe] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3003/meals/${id}`)
      .then((response) => response.json())
      .then((data) => setReceipe(data));
  }, [id,]);
  return receipe;
};

export default useGetReceipe;
