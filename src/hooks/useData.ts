import { useState, useEffect } from "react";
import { DataState } from "../types";

const useData = () => {
  const state = useState<DataState[]>(() => {
    // function in useState is called on init
    const localData = localStorage.getItem("data"); // get data from local storage
    let data: DataState[] = []; // initial value of data []
    if (localData) {
      try {
        // try to parse and asign it to data
        data = JSON.parse(localData);
      } catch {}
    }

    return data; // return state initial value
  });

  const [data] = state;

  useEffect(() => {
    // use effect tracks data changes
    if (data) {
      // if data
      localStorage.setItem("data", JSON.stringify(data)); // set data to local storage as json
    }
  }, [data]);

  return state;
};

export default useData;
