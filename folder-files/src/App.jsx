import { useState } from "react";
import "./App.css";
const structure = [
  {
    name: "root",
    type: "folder",
    children: [
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "file1",
            type: "file",
          },
          {
            name: "file2",
            type: "file",
          },
          {
            name: "file3",
            type: "file",
          },
        ],
      },
    ],
  },
  {
    name: "package.json",
    type: "file",
  },
];

const Folder = ({ explorer }) => {
  const [show, setShow] = useState(false);
  if (explorer.type == "folder") {
    return (
      <div style={{ cursor: "pointer", marginLeft: "10px" }}>
        <div
          style={{
            background: "grey",
            color: "#fff",
            padding: "4px",
            width: "130px",
            marginBottom: "10px",
          }}
          onClick={() => setShow(!show)}
        >
          <span>{explorer.name}</span>
        </div>
        <div style={{ display: `${show ? "block" : "none"}` }}>
          {explorer?.children?.map((data, i) => {
            return <Folder key={i} explorer={data} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ marginLeft: "10px" }}>
        <span>{explorer.name}</span>
      </div>
    );
  }
};
function App() {
  const [layout, setLayout] = useState(structure);

  return (
    <>
      {layout.map((data, i) => {
        return <Folder key={i} explorer={data} />;
      })}
    </>
  );
}

export default App;
