import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import HomePage from './features/learning-plane/pages/HomePage';
import ProfilePage from './features/learning-plane/pages/ProfilePage';
import LoginPage from './features/learning-plane/pages/LoginPage';
import SearchPage from './features/learning-plane/pages/SearchPage';
import NotificationsPage from './features/learning-plane/pages/NotificationsPage';
import LearningPlanPage from './features/learning-plane/pages/LearningPlanPage';
import LearningPlanListPage from './features/learning-plane/pages/LearningPlanListPage';
import TestLearningPlanPage from './features/learning-plane/pages/TestLearningPlanPage';
import CreateLearningPlanPage from './features/learning-plane/pages/CreateLearningPlanPage';
import EditLearningPlanPage from './features/learning-plane/pages/EditLearningPlanPage';
import OAuthCallbackPage from './features/learning-plane/pages/OAuthCallbackPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import './App.css'; // Import your CSS file here
import './styles/global.css'; // Import your global CSS file here
function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <NotificationProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/oauth2/redirect" element={<OAuthCallbackPage />} />
              <Route element={<Layout />}>
                <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/profile/:username" element={<ProfilePage />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/notifications" element={<NotificationsPage />} />
                  <Route path="/learning-plan/:id" element={<LearningPlanPage />} />
                  <Route path="/my-plans" element={<LearningPlanListPage />} />
                  <Route path="/test-learning-plans" element={<TestLearningPlanPage />} />
                  <Route path="/create-learning-plan" element={<CreateLearningPlanPage />} />
                  <Route path="/edit-learning-plan/:id" element={<EditLearningPlanPage />} />
                </Route>
              </Route>
            </Routes>
          </NotificationProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;