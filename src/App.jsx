import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AssistanceForm from "./pages/AssistanceForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AssistanceForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
