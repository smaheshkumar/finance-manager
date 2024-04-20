import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Navigation from './components/Navigation';
import AuthProvider from './hooks/AuthProvider';
import PrivateRoute from './router/route';

function App() {
  return (
    <div className="mx-auto max-w-7xl">
      <Router>
        <Navigation />
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Dashboard />} />
            </Route>
            { /** Other routes */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
