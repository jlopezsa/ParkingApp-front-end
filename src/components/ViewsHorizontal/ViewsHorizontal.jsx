import React from "react";
import './ViewsHorizontal.scss'
import ViewsFigTopRight from "../ViewsFigTopRight/ViewsFigTopRight";
import ViewsFigTopLeft from "../ViewsFigTopLeft/ViewsFigTopLeft";
import parkingManSmartphone from '../../figures/views-Parking-man-smartphone.svg';
import parkingWomanBike from '../../figures/views-Parking-woman-bike.svg';

const ViewsHorizontal = () =>{
  return(
    <div className="container-horizontal">
      <div>
        <ViewsFigTopRight title={''} figure={parkingWomanBike} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda soluta, quaerat mollitia sequi explicabo eaque dolor voluptatum animi dolorum magni beatae laboriosam? Quia, excepturi. Veniam doloremque aperiam deserunt nisi.'}/>
      </div>
      <div>
        <ViewsFigTopLeft title={''} figure={parkingManSmartphone} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda soluta, quaerat mollitia sequi explicabo eaque dolor voluptatum animi dolorum magni beatae laboriosam? Quia, excepturi. Veniam doloremque aperiam deserunt nisi.'}/>
      </div>
    </div>
  )
}
export default ViewsHorizontal
