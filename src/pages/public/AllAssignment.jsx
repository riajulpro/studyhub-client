import axios from "axios";
import { useEffect, useState } from "react";

const AllAssignment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5000/assignments")
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    axios
      .get("http://localhost:5000/assignments")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>All assignment will be shown here</h1>
      <h1 className="text-2xl">{data.length}</h1>
    </div>
  );
};

export default AllAssignment;
