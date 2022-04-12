import React, { useRef } from 'react'

function Card ({ data, show, ref, set_single_data }) {

  const fun = () => {
    set_single_data(data);
    show();
  }
  return (

    <div className='card_container'>

      <div className="image">
        <img src={data.image} alt="" />
      </div>

      <div className="info">
        <p><strong>Title </strong> {data.title}</p>
        <p><strong>Director </strong>{data.director}</p>
        <p><strong>Release Data </strong>{data.release_date}</p>
        <p><strong>Rate Score </strong>{data.rt_score}</p>
        <button className='show_btn' onClick={fun}>Details</button>
      </div>

    </div>
  )
}

export default Card