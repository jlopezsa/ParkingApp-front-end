import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ParkingList.scss';
import Parking from './Parking/Parking';
import { listParkingsByCity } from '../../store/actions';

function ParkingList() {
  const dispatch = useDispatch();
  const inputCity = useSelector((state) => state.searchCity);
  const parkings = useSelector((state) => state.parkingsFiltered);
  // const [parkings, setParkings] = useState([]);

  useEffect(() => {
    dispatch(listParkingsByCity(inputCity));
  }, [inputCity]);

  return (
    <div className="container-park">
      <ul className="container-park__list">
        {
          parkings.map((item) => (
            <li key={item.name}><Parking parkings={item} /></li>
          ))
        }
      </ul>
    </div>
  );
}

export default ParkingList;
