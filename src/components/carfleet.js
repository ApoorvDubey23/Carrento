import React, { useState, useEffect } from 'react';
import BMWimg from '../images/BMW.jpg';
import AUDIimg from '../images/audi a s1 line.jpg';
import MERCEDESimg from '../images/mercedes.jpg';
import RRimg from '../images/rangerover.jpg';
import Fimg from '../images/fortuner.jpg';
import SWIFTimg from '../images/swift.jpg';
import './carfleet.css';

/* Your custom styles here */


function Carfleet() {
  const cardetails = {
    bmw: {
      img: BMWimg,
      model: 'BMW M4',
      year: 2022,
      transmission: 'Automatic',
      fuel: 'Petrol',
      rent: 'Rs10000/day',
    },
    audi: {
      img: AUDIimg,
      model: 'Audi A3',
      year: 2021,
      transmission: 'Automatic',
      fuel: 'Hybrid',
      rent: 'Rs9500/day',
    },
    mercedes: {
      img: MERCEDESimg,
      model: ' AMG C43',
      year: 2020,
      transmission: 'Automatic',
      fuel: 'Diesel',
      rent: 'Rs8000/day',
    },
    rangerover: {
      img: RRimg,
      model: 'Range Rover',
      year: 2016,
      transmission: 'Automatic',
      fuel: 'Diesel',
      rent: 'Rs7500/day',
    },
    fortuner: {
      img: Fimg,
      model: '4x4 AT',
      year: 2017,
      transmission: 'Automatic',
      fuel: 'Diesel',
      rent: 'Rs7000/day',
    },
    swift: {
      img: SWIFTimg,
      model: 'Swift',
      year: 2021,
      transmission: 'Manual',
      fuel: 'Petrol',
      rent: 'Rs3000/day',
    },
  };
  
  const [car, setCar] = useState('bmw');
  const [carimg, setCarImg] = useState(cardetails.bmw.img);
  const [carrent, setCarrent] = useState(cardetails.bmw.rent);
  const [carmodel, setCarmodel] = useState(cardetails.bmw.model);
  const [caryear, setCaryear] = useState(cardetails.bmw.year);
  const [cartransmission, setCartransmission] = useState(cardetails.bmw.transmission);
  const [carfuel, setCarfuel] = useState(cardetails.bmw.fuel);
  
  useEffect(() => {
    setCarImg(cardetails[car].img);
    setCarrent(cardetails[car].rent);
    setCarmodel(cardetails[car].model);
    setCaryear(cardetails[car].year);
    setCartransmission(cardetails[car].transmission);
    setCarfuel(cardetails[car].fuel);
  }, [car]);
  


  return (
    <div className='crflt'>
      <div className='crfltbtn flex justify-center items-center flex-wrap'>
        <button className='carbtn max-md:text-[0.9rem]' onClick={() => setCar('bmw')}>
          BMW m4
        </button>
        <button className='carbtn max-md:text-[0.9rem]' onClick={() => setCar('audi')}>
          Audi A
        </button>
        <button className='carbtn max-md:text-[0.9rem]' onClick={() => setCar('mercedes')}>
        Mercedes Benz
        </button>
        <button className='carbtn max-md:text-[0.9rem]' onClick={() => setCar('rangerover')}>
        RangeRover
        </button>
        <button className='carbtn max-md:text-[0.9rem]' onClick={() => setCar('fortuner')}>
        Fortuner
        </button>
        <button className='carbtn max-md:text-[0.9rem]' onClick={() => setCar('swift')}>
        Swift
        </button>
      </div>
      <div className='crfltimg'>
        <img className='crfltimg1'src={carimg} alt='Car' />
      </div>
      <div className='crfltinfo'>
        <div className='carrent'><table>
  
     
      <tbody>
        <td className='td tdrent'>
          <th>Rent :</th> <td>{carrent}</td>
        </td>
        <td className='td' >

          <th>Year :</th>
            <td>{caryear}</td>
        </td>
          
          <td className='td'>

          <th>Transmission :</th>
            <td>{cartransmission}</td>
          </td>
          <td className='td'>

          <th>Fuel :</th>
            <td>{carfuel}</td>
          </td>
          <td className='td'>

          <th>Model :</th>
            <td>{carmodel}</td>
          </td>
       
          
           
        
        
      </tbody>
    </table></div>
      </div>
    </div>
  );
}

export default Carfleet;
