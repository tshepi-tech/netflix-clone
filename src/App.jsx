//NPM packages
import { BrowserRouter } from "react-router-dom";

//Project files
import AdminRoute from "Routes/AdminRoute";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AdminRoute />
      </BrowserRouter>
    </div>
  );
}
