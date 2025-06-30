import { Routes, Route, Navigate } from "react-router";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardPage from "./pages/OnboardingPage.jsx";

import { Toaster } from "react-hot-toast";
import useAuthUser from "./hooks/useAuthUser.js";
import PageLoader from "./components/PageLoader.jsx";

const App = () => {
  const { isLoading, authUser } = useAuthUser();

  const isAuthicated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  if (isLoading) return <PageLoader />;

  return (
    <div className=" h-screen">
      <Routes>
        <Route
          path="/"
          element={
            isAuthicated && isOnboarded ? (
              <HomePage />
            ) : (
              <Navigate to={!isAuthicated ? "/login" : "/onboarding"} />
            )
          }
        />
        <Route
          path="/signup"
          element={!isAuthicated ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!isAuthicated ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/notifications"
          element={
            isAuthicated ? <NotificationsPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/call"
          element={isAuthicated ? <CallPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/chat"
          element={isAuthicated ? <ChatPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/onboarding"
          element={
            isAuthicated ? (
              !isOnboarded ? (
                <OnboardPage />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
