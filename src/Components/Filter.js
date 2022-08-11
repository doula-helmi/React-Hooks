import { useRef, useState } from "react";
import Rating from "@mui/material/Rating";
export const Filter = (props) => {
  const FilterByName = useRef();
  const [FiltreByRate, setFiltreByRate] = useState(5);
  const [FiltreBysearch, setFiltreBysearch] = useState("");
  const hundelsearch = () => {
    setFiltreBysearch(FilterByName.current.value);
    props.onSubmit(FilterByName.current.value.toLowerCase());
  };

  const hundelRate = (event, newValue) => {
    setFiltreByRate(newValue);      
    props.onsearch(FiltreByRate);
  };
console.log(FiltreByRate)
  return (
    <div className="filter">
      <input
        type={"text"}
        ref={FilterByName}
        onChange={hundelsearch}
        placeholder="Filter by title"
      />
      <Rating
        name="simple-controlled"
        onChange={hundelRate}
        precision={0.5}
        value={FiltreByRate}

      />
    </div>
  );
};
