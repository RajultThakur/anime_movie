import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'
import InfoCard from './InfoCard';
import Navbar from './Navbar';
import Loader from './Loader';

function Home () {
  const ref = useRef();

  const show = () => {
    ref.current.click();
  }

  const [singleData, setSingleData] = useState([]);
  const [Data, setData] = useState("");

  const fun = async () => {
    const response = await fetch(`https://ghibliapi.herokuapp.com/films`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json',
      },
    });
    const data = await response.json()
    console.log(data)
    setData(data);
  }
  useEffect(() => {
    fun();
  }, [])

  return (
    <div>
      <InfoCard show_ref={ref} data={singleData} />

      <Navbar />

      <div className="card">
        <InfoCard />

        {Data ? Data.map((ele, index) => {
          return <Card key={index} ref={ref} show={show} set_single_data={setSingleData} data={ele} />
        }) : <Loader />}
        
      </div>

    </div>
  )
}

export default Home