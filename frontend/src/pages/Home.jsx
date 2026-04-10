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
