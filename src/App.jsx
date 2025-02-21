import React, { useState } from 'react';
import Portfolio from '../src/Portfolio'; 
import '../src/App'; 

function App() {
  return (
    <div>
      <h1>Мое Портфолио</h1> {/* Заголовок приложения */}
      <Portfolio /> {/* Вставляем компонент Portfolio */}
    </div>
  );
}

export default App;
