import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FriendsPage from "./pages/FriendsPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<HomePage/>} />
        <Route path="friends" element={<FriendsPage/>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
