import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/layout/Layout'
import Home from "./components/home/Home";
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/common/error-boundary/ErrorBoundary';

const App = () => {
  const routerFutureFlags = {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  };

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <Router future={routerFutureFlags}>
            <Layout>
              <Routes>
                <Route path="" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
            </Layout>
          </Router>
        </ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App; 
