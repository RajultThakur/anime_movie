import React from 'react'
import loader from '../assets/loader.gif'
function Loder () {
    return (<>
        <div style={{ width: "max-content", margin: "auto", marginBlock: "100px" }}>
            <img src={loader} alt="not available" />
            <p>processing...</p>
        </div>
    </>
    )
}

export default Loder