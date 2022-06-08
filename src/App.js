import React from "react";
import Characters from "./components/Characters";
import NavBar from "./components/NavBar";

function App() {
  //   return (
  //     <div>
  //       <input
  //         type="text"
  //         name="search"
  //         id="search"
  //         onChange={() => onChangeSearch(searchRef.current.value)}
  //         ref={searchRef}
  //       />
  //       <ul>
  //         {results?.results?.map((x) => {
  //           if (x.name.toLowerCase().includes(search.toLowerCase()))
  //             return (
  //               <li key={x.name} onClick={() => showDetails(x)}>
  //                 {x.name}
  //               </li>
  //             );
  //         })}
  //       </ul>

  //       <button onClick={() => onClickButton(-1)}>Prev</button>
  //       {page}
  //       <button onClick={() => onClickButton(1)}>Next</button>

  return (
    <>
      <NavBar />
      <Characters />;
    </>
  );
}

export default App;
