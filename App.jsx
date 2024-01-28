import React from 'react';
import './App.css';
import { Card } from './Card';

function App() {
  const cardData = [
    {
      imgSrc: 'src/assets/pilates.jpg',
      title: 'Club Pilates',
      description: 'Visit to see our class schedule for pilates',
      btn: <a href="https://www.clubpilates.com">Visit Club Pilates</a>,
    },
    {
      imgSrc: 'src/assets/beachruns.jpg',
      title: 'MIST',
      description: 'Motivate Inspire Suceed Together: Visit our daily activities',
      btn: <a href="https://www.successconsciousness.com/">Visit our events</a>,
    },
    {
      imgSrc: 'src/assets/locomotive.jpeg',
      title: 'Locomotive',
      description: 'We love good coffee, but we also love creating a good community. ',
      btn: <a href="https://www.successconsciousness.com/">Visit our events</a>,
    },
    {
      imgSrc: 'src/assets/perktequesta.jpg',
      title: 'Perk Coffee House',
      description: 'Come for the coffee, but stay for the vibes',
      btn: <a href="https://www.successconsciousness.com/">Visit our events</a>,
    },
    {
      imgSrc: 'src/assets/Abacoa.jpeg',
      title: 'Abacoa Towncenter',
      description: 'In the heart of Abacoa, jam out to some live events',
      btn: <a href="https://www.successconsciousness.com/">Visit our events</a>,
    },
    {
      imgSrc: 'src/assets/TheSquare.png',
      title: 'The Square',
      description: 'Discover a variety of inclusive classes that will get you moving throughout the week within our inspiring urban oasis.',
      btn: <a href="https://www.successconsciousness.com/">Visit our events</a>,
    },
    {
      imgSrc: 'src/assets/new_york.jpg',
      title: 'New York',
      description: 'Discover a variety of inclusive classes that will get you moving throughout the week within our inspiring urban oasis.',
      btn: <a href="https://www.successconsciousness.com/">Visit our events</a>,
    },
    {
      imgSrc: 'src/assets/art.png',
      title: 'The Lighthouse Art Center',
      description: 'Discover a variety of inclusive classes that will get you moving throughout the week within our inspiring urban oasis.',
      btn: <a href="https://lighthousearts.org//">Visit our events</a>,
    },
    {
      imgSrc: 'src/assets/din.png',
      title: 'Sur la Table',
      description: 'Cooking Classes This Week.',
      btn: <a href="https://www.surlatable.com/">Visit our events</a>,
    },
    {
      imgSrc: 'src/assets/TheSquare.png',
      title: 'The Square',
      description: 'Discover a variety of inclusive classes that will get you moving throughout the week within our inspiring urban oasis.',
      btn: <a href="https://www.successconsciousness.com/">Visit our events</a>,
    },
];

  return (
    <>
      <div>
        <h1>Welcome</h1>
        <h3>Click the link to see what events are happening with each business</h3>
      <div>
        <div className="card-container">
          {cardData.map((card, index) => (
            <Card
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
              btn={card.btn}
            />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default App;

