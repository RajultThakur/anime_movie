import React from 'react'

function InfoCard ({show_ref,data}) {
  console.log(data)
  return (<>
    <button ref = {show_ref }style={{display:"none"}} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Launch static backdrop modal
    </button>

    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 style={{color:"red"}} className="modal-title" id="staticBackdropLabel">{data!==undefined && data.title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">

            <div className='info_container'>
              <div className="image_card">
                <img src={data!==undefined && data.image} alt="" />
              </div>
              {data !== undefined && 
              <div className="home">
                <p><strong>Title </strong>{data.title}</p>
                <p><strong>Original title </strong>{data.original_title}</p>
                <p><strong>Director </strong>{data.director}</p>
                <p><strong>Producer </strong>{data.producer}</p>
                <p><strong>Release Date </strong>{data.release_date}</p>
                <p><strong>Running Time </strong>{data.running_time}</p>
                <p><strong>Rt-Score </strong>{data.rt_score}</p>
                <p><strong>Description </strong>{data.description}</p>
              </div>
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default InfoCard
