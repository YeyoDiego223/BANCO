// App.js

import React, { useState } from 'react';
import { Sidebar } from './sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <Sidebar isOpen={isSidebarOpen} />
      {/* Aquí puedes agregar el resto de tu contenido */}
    </div>
  );    
}

export default App;
