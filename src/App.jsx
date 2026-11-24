import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Navigate to="/#about" replace />} />
        <Route path="manufacturing" element={<Navigate to="/#manufacturing" replace />} />
        <Route path="products" element={<Navigate to="/#products" replace />} />
        <Route path="facilities" element={<Navigate to="/#facilities" replace />} />
        <Route path="sustainability" element={<Navigate to="/#sustainability" replace />} />
        <Route path="contact" element={<Navigate to="/#enquiry" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
