import React from 'react';
import Header from './components/Header';
import Chatbot from './components/Chatbot';
import WaterQualityDashboard from './components/WaterQualityDashboard';
import PredictiveAnalytics from './components/PredictiveAnalytics';
import WaterQualityMap from './components/WaterQualityMap';
import CaseStudies from './components/CaseStudies';
import { useTranslation } from 'react-i18next';
import './i18n/config';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
            {t('welcome')}
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            {t('waterQuality')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <WaterQualityDashboard />
          <div className="space-y-8">
            <PredictiveAnalytics />
            <WaterQualityMap />
          </div>
        </div>

        <div className="mb-12">
          <CaseStudies />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Chat with Jal Saanjeev
          </h2>
          <Chatbot />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Water Efficient Knowledge Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;