import { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataGrid } from "@material-ui/data-grid";
import { faTimes, faFilter, faL } from "@fortawesome/free-solid-svg-icons";
import data from "./data.json";
function App() {
  const [value, setValue] = useState();
  const [suggestionList, setSuggestionList] = useState([]);
  let rows = data.dishes;
  const [rowData, setRowData] = useState(rows);
  const columns = [
    { field: "dish", headerName: "Dish", width: 250, sortable: false },
    { field: "cuisine", headerName: "Cuisine", width: 180, sortable: false },
    {
      field: "ingredients",
      headerName: "Main Ingredient",
      width: 250,
      sortable: false,
    },
    { field: "prepTime", headerName: "Preperation Time", width: 220 },
  ];

  const applyFilter = (e) => {
    let value = e.target.value;
    let suggestList = [];
    setValue(value);
    if (value) {
      rowData.filter((val) => {
        let dish = val.dish;
        if (dish.toLowerCase().includes(value.toLowerCase())) {
          suggestList.push(val.dish + "&&Dish");
          return true;
        }
        return false;
      });

      rowData.filter((val) => {
        let cuisine = val.cuisine;
        if (cuisine.toLowerCase().includes(value.toLowerCase())) {
          suggestList.push(val.cuisine + "&&cuisine");
          return true;
        }
        return false;
      });

      rowData.filter((val) => {
        let ingredients = val.ingredients;
        if (ingredients.toLowerCase().includes(value.toLowerCase())) {
          suggestList.push(val.ingredients + "&&ingredients");
          return true;
        }
        return false;
      });
      setSuggestionList(suggestList);
    } else {
      setValue("");
      setRowData(rows);
      setSuggestionList([]);
    }
    console.log("suggestionList", suggestionList);
  };
  const filterData = (listItem) => {
    let filterByType = listItem.split("&&")[1];
    let filterByValue = listItem.split("&&")[0];
    console.log("filterByValue called", filterByValue);
    let filteredValues = rowData.filter((val) => {
      if (filterByType == "Cuisine") {
        return val.cuisine == filterByValue;
      }
      if (filterByType == "Ingredients") {
        return val.ingredients == filterByValue;
      }
      if (filterByType == "Dish") {
        console.log("filterByValue", filterByValue);
        return val.dish == filterByValue;
      }
      return false;
    });
    console.log("filterData", filteredValues);
    setRowData(filteredValues);
    setSuggestionList([]);
  };
  let displaySuggestion = null;

  if (suggestionList.length) {
    displaySuggestion = (
      <div>
        <Paper
          style={{
            marginRight: "0px",
            width: "300px",
            maxHeight: "250px",
            overflowY: "scroll",
            position: "absolute",
            zIndex: "9",
            right: "490px",
            top: "140px",
          }}
          elevation={3}
        >
          {suggestionList.map((listItem, id) => {
            let display = listItem.split("&&");
            let splitList = display[0].split("");
            console.log("splitList", splitList);
            return (
              <List>
                <ListItem button onClick={() => filterData(listItem)}>
                  <ListItemText
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    {display[0]}
                    {display[1]}
                  </ListItemText>
                </ListItem>
              </List>
            );
          })}
        </Paper>
      </div>
    );
  }

  const clearFilter = () => {
    setRowData(rows);
    setValue("");
    setSuggestionList([]);
  };
  return (
    <>
      <h3>Cuisine Table</h3>
      {/* <Divider /> */}
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: "1" }} />
        <TextField
          className="textField"
          id="input-with-icon-textfield"
          placeholder="Filter"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon
                  icon={faFilter}
                  className="icon"
                  style={{ color: "#909090" }}
                />
              </InputAdornment>
            ),
          }}
          onChange={applyFilter}
          value={value}
        />
        <IconButton onClick={clearFilter} className="closeButton">
          <FontAwesomeIcon icon={faTimes} className="faTimes" />
        </IconButton>
        {displaySuggestion}
      </div>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={rowData} columns={columns} />
      </div>
    </>
  );
}

export default App;
