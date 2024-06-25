import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FriendsPage from "./pages/FriendsPage";
import RatingPage from "./pages/RatingPage";
import TasksPage from "./pages/TasksPage";
import ShopPage from "./pages/ShopPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<HomePage />} />
        <Route path="friends" element={<FriendsPage />} />
        <Route path="rating" element={<RatingPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="shop" element={<ShopPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
