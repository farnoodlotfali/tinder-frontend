import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './axios';

const TinderCards = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get('/tinder/cards');
      setPeople(req.data);
    };

    fetchData();
  }, []);

  console.log(people);
  const swiped = (dir, nameToDelete) => {
    console.log(nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name);
  };
  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className='card'
              style={{ backgroundImage: `url( ${person.imgUrl})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
