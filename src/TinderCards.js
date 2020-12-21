import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

const TinderCards = () => {
  const [lastDir, setLastDir] = useState();
  const [people, setPeople] = useState([
    {
      name: 'Hector Salamanca',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsoL7u7vLAj-TVEB6dZ74oikGK12Kr0OZVBQ&usqp=CAU',
    },
    {
      name: 'Hector Salamanca',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTN60phjjjq_Bahjg2asXgjEZ9XxhTJdMDA&usqp=CAU',
    },
    {
      name: 'Hector Salamanca',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAHZ0lpBtlP8lXebTIEtnA5-gDxLrPaL-CA&usqp=CAU',
    },
    {
      name: 'Hector Salamanca',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkvN0Uuk8hJ9E7VREWI6ntn_WAdkmEEQd5AA&usqp=CAU',
    },
  ]);
  const swiped = (dir, nameToDelete) => {
    console.log(nameToDelete);
    setLastDir(dir);
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
              style={{ backgroundImage: `url( ${person.url})` }}
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
