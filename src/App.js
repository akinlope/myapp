import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import { Projects } from "./pages/Projects";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";


const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />,
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Projects />
      },
      {
        path: "/about",
        element: <About />
      },
    ],
  }
])

function App() {
  return (
    <div className=" h-screen bg-[#fcfcfc] font-nunito">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
