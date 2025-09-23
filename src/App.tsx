import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import ChatbotWidget from './components/ChatbotWidget';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const OurSolution = React.lazy(() => import('./pages/OurSolution'));
const ICTTrainingFacilities = React.lazy(() => import('./pages/Ecosystem/ICTTrainingFacilities'));
const TeacherCapacityBuilding = React.lazy(() => import('./pages/Ecosystem/TeacherCapacityBuilding'));
const StudentDigitalSkills = React.lazy(() => import('./pages/Ecosystem/StudentDigitalSkills'));
const SchoolManagementSystem = React.lazy(() => import('./pages/Ecosystem/SchoolManagementSystem'));
const OurImpact = React.lazy(() => import('./pages/OurImpact'));
const PartnerWithUs = React.lazy(() => import('./pages/PartnerWithUs'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Blog = React.lazy(() => import('./pages/Blog'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop/>
          <Layout>
            <Suspense 
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/our-solution" element={<OurSolution />} />
                <Route path="/ecosystem/ict-training" element={<ICTTrainingFacilities />} />
                <Route path="/ecosystem/teacher-capacity" element={<TeacherCapacityBuilding />} />
                <Route path="/ecosystem/student-digital-skills" element={<StudentDigitalSkills />} />
                <Route path="/ecosystem/school-management" element={<SchoolManagementSystem />} />
                <Route path="/our-impact" element={<OurImpact />} />
                <Route path="/partner-with-us" element={<PartnerWithUs />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact-us" element={<ContactUs />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>

        <ChatbotWidget/>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;