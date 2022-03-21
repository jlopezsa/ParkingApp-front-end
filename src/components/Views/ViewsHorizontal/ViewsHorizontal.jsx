/* eslint-disable */
import React from "react";
import './ViewsHorizontal.scss'
import ViewsFigTopRight from "../ViewsFigTopRight/ViewsFigTopRight";
import ViewsFigTopLeft from "../ViewsFigTopLeft/ViewsFigTopLeft";

const ViewsHorizontal = (props) =>{
  return(
    <div className="container-horizontal">
      <div>
        <ViewsFigTopRight title={props.titleLeft} figure={props.figureLeft} text={props.textLeft}/>
      </div>
      <div>
        <ViewsFigTopLeft title={props.titleRight} figure={props.figureRight} text={props.textRight}/>
      </div>
    </div>
  )
}
export default ViewsHorizontal
