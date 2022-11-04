import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Home from "./components/Home";


function App() {
  return (
   <div>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
    </BrowserRouter>
    
   </div>
  );
}

export default App;
