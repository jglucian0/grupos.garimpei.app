import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Academia from "./pages/Academia";
import Eletronicos from "./pages/Eletronicos";
import Moda from "./pages/Moda";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/academia" element={<Academia />} />
        <Route path="/moda" element={<Moda />} />
        <Route path="/eletronicos" element={<Eletronicos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
