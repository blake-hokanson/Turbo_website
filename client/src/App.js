import { Route, Routes } from "react-router-dom";
import { } from "@chakra-ui/react";


import RootLayout from "./layouts/RootLayout";

import Main from "./pages/Main";


function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
