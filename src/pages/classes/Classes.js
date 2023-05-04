import React from 'react';
import p from './Classes.module.css';


export default function Product() {
  const Course = [
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6YrejylNZWiwLvWDdomTRfLO-ewX_2KZqDA&usqp=CAU',
      item: 'Yoga',
      price: 'Rs.1200',
    },
    {
      id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwu57cd1ylyZjQf-M86Ewl23MFh2Iq2x4K4A&usqp=CAU ',
      item: 'Strength Training',
      price: 'Rs.1600',
    },
    {
      id: 3,
      img: 'https://www.rxbodybuilders.com/wp-content/uploads/functional-strength-training.jpg',
      item: 'Weight Lifting',
      price: 'Rs.1900',
    },
    {
      id: 4,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a3fLick_zVrhwQ02dYRQfTs-hNNljuY1zA2FQJNgWCqffBcl5X6SPntUesC_bcPszmc&usqp=CAU',
      item: 'Cardio',
      price: 'Rs.1300',
    },
    {
      id: 5,
      img: 'https://www.g4physio.co.uk/wp-content/uploads/2020/01/dance-fitness-04.jpg',
      item: 'Dance Fitness',
      price: 'Rs.1800',
    },
    {
      id: 6,
      img: 'http://www.gymchalo.com/wp-content/uploads/2016/01/swimming.jpg',
      item: 'Swimming',
      price: 'Rs.6700',
    },
    {
      id: 7,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpFbaFbj8WeEmIpAgHhpUxkdjfj4yMg2uCQ&usqp=CAU',
      item: 'Strength',
      price: 'Rs.1000',
    },
    {
      id: 8,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgx1cFR4GtnUk7obVmLYQ89cl6VB3ibDonxA&usqp=CAU',
      item: 'Meditation',
      price: 'Rs.1500',
    },
  ];

  const handleClick=()=>{
    alert('Subscribed successfully');
  }

  return (
    
     
       
        <div className={p.wrap}>
          {Course.map((e) => {
            return (
              <div key={e.id} className={p.box}>
                <img src={e.img} alt="" className={p.img} />
                <p className={p.item}>{e.item} </p>
                <button style={{ backgroundColor: '#fff' }} onClick={handleClick}>{e.price} </button>
              </div>
            );
          })}
        </div>
     
   
  );
}
