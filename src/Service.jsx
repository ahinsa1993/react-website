import React from 'react';
import Card from "./Card";
import Sdata from './Sdata';

const Service = () => {
  return(
    <>
        <div className='my-4'>
          <h1 className='text-center'> Our Services </h1>
        </div>
        <div className='container-fluid mb-5 max-auto'>
          <div className='row'>
            <div className='col-11 ms-5 max-auto'>
              <div className='row gy-4'>

             {
               Sdata.map((val,ind) => {
                 return <Card 
                   key={ind}
                   imgsrc = {val.imgsrc}
                   title = {val.title}
                   link = {val.link}
                   recipe = {val.recipe}
                 />
               })
             }

              </div>
            </div>
          </div>
        </div>
    </>
  )
};

export default Service;
