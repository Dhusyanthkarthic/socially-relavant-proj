import './App.css';
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/login/Login";
import HostLandingPage from "./components/hostlandingpage/hostlandingpage";
import UserLandingPage from "./components/UserLandingPage/UserLandingPage";
import UserProfile from './components/UserProfile/UserProfile';
import UserHeader from './components/UserHeader/Userheader';
import Footer from './components/Footer/Footer';
import ProblemComposer from "./components/ProblemComposer/ProblemComposer";
import ComposedProblems from "./components/UserProblemDisplay/UserProblemDisplay";
import ProblemDescription from './components/ProblemDescription/ProblemDescripiton';
import HostProblemFeed from'./components/HostProblemFeed/HostProblemFeed';
import ProblemStatus from "./components/ProblemStatus/ProblemStatus";
import CompletedProblems from "./components/ProblemStatus/CompletedStatus";
import HostAnalysis from "./components/HostAnalysisPage/HostAnalysisPage";
import AboutUs from "./components/AboutUs/AboutUs";
import UserAnalysis from "./components/UserAnalysis/UserAnalysis";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/host",
    element: <HostLandingPage />
  },
  {
    path : "/userlandingpage",
    element : <UserLandingPage />
  },
  {
    path : "/userprofile",
    element : <UserProfile />
  },
  {
    path : "/userheader",
    element : <UserHeader />
  },
  {
    path : "/footer",
    element : <Footer />
  },
  {
    path : "/problemcomposer",
    element : <ProblemComposer />
  },
  {
    path : '/composedproblems',
    element : <ComposedProblems />
  },
  {
    path : "/problemdescription",
    element : <ProblemDescription />
  },
  {
    path : "/hostfeed",
    element : <HostProblemFeed />
  },
  {
    path : "/problemstatus",
    element : <ProblemStatus />
  },
  {
    path : "/completedstatus",
    element : <CompletedProblems />
  },
  {
    path : "/HostAnalysis",
    element : <HostAnalysis />
  },
  {
    path : "/AboutUs",
    element : <AboutUs />
  },
  {
    path : "/UserAnalysis",
    element : <UserAnalysis />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
