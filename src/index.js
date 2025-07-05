
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#FFCC00' }}>🧠 Midday Mind Flex 💡</h1>
      <p style={{ color: 'white' }}>Time to work your mental muscle — stay brilliant!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
