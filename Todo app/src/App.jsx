import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [listData, setListData] = useState([]);
  // const [filteredData, setFilteredData] = useState(listData);
  console;
  const addToList = (data) => {
    let newdata = [...listData, data];
    setListData(newdata);
  };
  const deleteHandler = (currentIdx) => {
    let filteredDataval = listData.filter((data, idx) => idx !== currentIdx);
    setListData(filteredDataval);
  };
  return (
    <>
      <Input addToList={addToList} />
      <List listData={listData} deleteHandler={deleteHandler} />
    </>
  );
}

export default App;
