import { 
  createBrowserRouter,
  createRoutesFromElements, 
  Route,  
  RouterProvider
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import RootLayout from "./RootLayout";
import HelpLayout from './HelpLayout';
import Faq from "./Faq";
import Contact from "./Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/help" element={<HelpLayout/>}>
        <Route path="faq" element={<Faq/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App
