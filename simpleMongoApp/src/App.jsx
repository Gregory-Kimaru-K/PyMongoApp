import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import List from "./pages/list"
import Add from "./pages/add"

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to='/list' />} />
        <Route path="/list" element={<List />} />
        <Route path="/add" element={<Add />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={routes} />
  )
}

export default App
