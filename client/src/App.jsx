import { Routes, Route } from "react-router";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardPage from "./pages/OnboardingPage.jsx";

import toast, {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <div className=" h-screen">
      <button onClick={() => {
        toast.success("Hello World!")
      }}>Make A toast</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/onboarding" element={<OnboardPage />} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
