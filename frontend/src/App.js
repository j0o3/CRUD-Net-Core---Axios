import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Read from './screens/Read';
import Create from './screens/Create';
import Update from './screens/Update';

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
    </>

  )
}

export default App;