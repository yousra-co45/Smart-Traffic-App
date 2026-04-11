import React from 'react';
import { useNavigate } from 'react-router-dom';
import SmartTrafficHero from '../components/SmartTrafficHero';

export default function Home() {
  const navigate = useNavigate();

  return (
    <SmartTrafficHero
      onCheckTraffic={() => navigate('/traffic')}
      onLearnMore={() => navigate('/safety')}
    />
  );
}

const Home = () => {
    return <div className="text-white p-10 text-center">Home Page (Under Development)</div>;
};

export default Home;
