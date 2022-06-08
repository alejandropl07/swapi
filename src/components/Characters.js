import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import People from "./People";

function Characters() {
  //   const searchRef = useRef("");
  const [results, setResults] = useState();
  const [page, setPage] = useState(1);
  //   const [search, setSearch] = useState("");
  //   const [details, setDetails] = useState({});
  //   const [currentId, setCurrentId] = useState(1);

  const fetchData = async () => {
    const url = `https://swapi.dev/api/people/?page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data);
  };

  //   const fetchDataById = async (id) => {
  //     const url = `https://swapi.dev/api/people/${currentId}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setDetails(data);
  //   };

  //   const onChangeSearch = (value) => {
  //     setSearch(value);
  //   };

  //   const onClickButton = (next) => {
  //     if (page + next < 1) return;
  //     if (page + next > 9) return;
  //     setPage(page + next);
  //   };

  //   const showDetails = (x) => {
  //     const id = x.url.split("/").slice(-2)[0];
  //     setCurrentId(id);
  //   };

  useEffect(() => {
    fetchData();
  }, [page]);

  //   useEffect(() => {
  //     fetchDataById(currentId);
  //   }, [currentId]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ margin: "auto" }}>
        {results?.results?.map((people) => {
          //   if (x.name.toLowerCase().includes(search.toLowerCase()))
          return (
            <Grid key={people.name} item xs={6} md={3}>
              <People people={people} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Characters;
