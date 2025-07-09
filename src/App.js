import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import VerifyPage from './pages/VerifyPage';
import ProfilePage from './pages/ProfilePage';
import AppointmentsPage from './pages/AppointmentsPage';
import TestsPage from './pages/TestsPage';
import TreatmentsPage from './pages/TreatmentsPage';
import ArticlesPage from './pages/ArticlesPage';
import CategoryPage from './pages/CategoryPage';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* Public routes without layout */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/verify" element={<VerifyPage />} />

            {/* Routes with layout */}
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <Routes>
                      {/* Public routes */}
                      <Route index element={<HomePage />} />
                      <Route path="/articles" element={<ArticlesPage />} />
                      <Route path="/category/:id" element={<CategoryPage />} />

                      {/* Protected routes */}
                      <Route
                        path="/profile/*"
                        element={
                          <PrivateRoute>
                            <ProfilePage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/appointments/*"
                        element={
                          <PrivateRoute>
                            <AppointmentsPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/tests/*"
                        element={
                          <PrivateRoute>
                            <TestsPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/treatments/*"
                        element={
                          <PrivateRoute>
                            <TreatmentsPage />
                          </PrivateRoute>
                        }
                      />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
