import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const searchRef = useRef("");
  const [results, setResults] = useState();
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState({});
  const [currentId, setCurrentId] = useState(1);

  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const url = `https://swapi.dev/api/people/?page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data);
  };

  const fetchDataById = async (id) => {
    const url = `https://swapi.dev/api/people/${currentId}`;
    const response = await fetch(url);
    const data = await response.json();
    setDetails(data);
  };

  const onChangeSearch = (value) => {
    setSearch(value);
  };

  const onClickButton = (next) => {
    if (page + next < 1) return;
    if (page + next > 9) return;
    setPage(page + next);
  };

  const showDetails = (x) => {
    const id = x.url.split("/").slice(-2)[0];
    setCurrentId(id);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    fetchDataById(currentId);
  }, [currentId]);

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        onChange={() => onChangeSearch(searchRef.current.value)}
        ref={searchRef}
      />
      <ul>
        {results?.results?.map((x) => {
          if (x.name.toLowerCase().includes(search.toLowerCase()))
            return (
              <li key={x.name} onClick={() => showDetails(x)}>
                {x.name}
              </li>
            );
        })}
      </ul>

      <button onClick={() => onClickButton(-1)}>Prev</button>
      {page}
      <button onClick={() => onClickButton(1)}>Next</button>

      <ul>
        <div>
          <h1>{details.name}</h1>
          <li>Height {details.height}</li>
          <li>Mass{details.mass}</li>
        </div>
      </ul>
    </div>
  );
}

export default App;
