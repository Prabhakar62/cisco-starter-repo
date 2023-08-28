import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LatencyMonitor = () => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    // Make API requests here using axios or fetch
    // Update the "latency" state with the fetched data
  }, []);

  return (
    <div className="latency-monitor">
      <h2>Packet Latency Monitor</h2>
      {latency !== null ? <p>Latency: {latency} ms</p> : <p>Loading...</p>}
    </div>
  );
};

export default LatencyMonitor;
