import React, { useState } from 'react';

import Photos from '../../components/photoReels/Photos';
import Reels from '../../components/photoReels/Reels';
import Tab from '../../components/photoReels/Tab';

const PhotoReels = () => {
  const [activeTab, setActiveTab] = useState('Photos'); // Default to Photos tab

  // Function to render tab content based on active tab
  const renderTabContent = () => {
    if (activeTab === 'Photos') {
      return (
        <Photos />
      );
    }
    return <Reels />;
  };

  return (
    <div className="mt-4 mb-4">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-4">Photo Reels</h1>

      {/* Tabs Section */}
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      <div className="col-span-4">{renderTabContent()}</div>
    </div>
  );
};

export default PhotoReels;
