import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Projects } from "./pages/Projects";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";


const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Projects />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/resume",
        element: <div>RESUME PAGE</div>
      }
    ]
  }
])

function App() {
  return (
    <div className=" h-screen bg-[#fcfcfc] font-nunito">
      {/* <Header /> */}
      {/* <HeroSection /> */}
      {/* <Projects /> */}
      {/* <Footer /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
