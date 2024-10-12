import { BrowserRouter, Routes,  Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LessonPlan from "./pages/LessonPlan";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LessonPlan/:id" element={<LessonPlan /> } />
      </Routes>
    </BrowserRouter>
  )
}