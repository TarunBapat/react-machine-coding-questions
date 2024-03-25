import { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const fetchApi = async () => {
    try {
      setLoading(true);
      const resp = await fetch("https://fakestoreapi.com/products/");
      const data = await resp.json();
      setProducts(data);
      setLoading(false);
      setPagination(products?.slice(page, 5));
      console.log(pagination);
    } catch (e) {
      console.log(e);
    }
  };
  let totalPages = Math.ceil(products.length / 5);
  console.log("totalPages", totalPages);
  const handlePrevPage = () => {
    let start = (page - 1) * 5;
    let end = page * 5;
    setPage(page - 1);
    setPagination(products.slice(start, end));
  };
  const handleNextPage = () => {
    let start = page * 5;
    let end = start + 5;
    setPage(page + 1);
    setPagination(products.slice(start, end));
  };
  const handlePaginationButton = (currentPage) => {
    let start = currentPage * 5;
    let end = (currentPage + 1) * 5;
    setPage(currentPage);
    setPagination(products.slice(start, end));
  };

  // useEffect(() => {
  //   fetchApi();
  // }, []);
  return (
    <>
      <button onClick={fetchApi}>Fetch products</button>
      {loading ? (
        <h2>Loading ....</h2>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {pagination?.map(
            ({ id, title, price, description, category, image }) => {
              return (
                <div style={{ border: "1px solid", width: "300px" }}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div style={{ width: "200px" }}>
                    <img src={image} alt={category} style={{ width: "100%" }} />
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
      <div style={{ display: "flex" }}>
        <button disabled={page <= 0 ? true : false} onClick={handlePrevPage}>
          prev
        </button>
        {new Array(totalPages).fill(0).map((_, i) => {
          return (
            <button onClick={() => handlePaginationButton(i)}>{i + 1}</button>
          );
        })}
        <button
          disabled={page + 1 >= totalPages ? true : false}
          onClick={handleNextPage}
        >
          next
        </button>
      </div>
    </>
  );
}

export default App;
