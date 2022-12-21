import { useEffect, useState } from 'react';

import { invoke } from "@tauri-apps/api";

import Error from "./pages/Error";
import Loading from "./pages/Loading";
import Homepage from "./pages/Homepage";
import Setup from "./pages/Setup";

enum ShowPage {
  Loading,
  Homepage,
  Setup,
  Error,
}

function App() {
  const [page, setPage] = useState(ShowPage.Loading);

  useEffect(function() {
    async function firstOpen() {
      try {
        const configExists = await invoke("config_exists");
        if (configExists) {
          setPage(ShowPage.Homepage);
        } else {
          setPage(ShowPage.Setup);
        }
      } catch(e) {
        console.log(e);
        setPage(ShowPage.Error);
      }
    } 

    firstOpen();
  });

  switch(page) {
    case (ShowPage.Loading): { return (<Loading/>) }
    case (ShowPage.Homepage): { return (<Homepage/>) }
    case (ShowPage.Setup): { return (<Setup/>) }
    default: { return (<Error/>)}
  };
}

export default App