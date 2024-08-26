import React, { useEffect, useState } from 'react';
import ApartmentList from '../components/ApartmentList';
import { getApartments } from '../services/apartmentService';

const HomePage: React.FC = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    getApartments().then(data => setApartments(data));
  }, []);

  return (
    <div>
      <h1>Available Apartments</h1>
      <ApartmentList apartments={apartments} />
    </div>
 
