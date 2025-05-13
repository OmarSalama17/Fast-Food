import React from 'react'
import img from '../../public/svgviewer-png-output .png'
import img2 from '../../public/svgviewer-png-output (1).png'
import img3 from '../../public/svgviewer-png-output (2).png'
const DFCLoader = () => {
  return (
    <>
      <div className="absolute inset-0 bg-black h-vh bg-opacity-50 z-40"></div>
      <div className="dfc-loader relative z-50">
      <div className="box k  ">
        <img src="https://res.cloudinary.com/dr2dnmx76/image/upload/v1747102204/svgviewer-png-output_xj8gan.png" alt="image 1"/>
      </div>
      <div className="box f  ">
        <img src="https://res.cloudinary.com/dr2dnmx76/image/upload/v1747102204/svgviewer-png-output_1_btfn4n.png" alt="image 2"/>
      </div>
      <div className="box c  ">
        <img src="https://res.cloudinary.com/dr2dnmx76/image/upload/v1747102204/svgviewer-png-output_2_midycf.png" alt="image 3"/>
      </div>
    </div>  
    </>
    )
}

export default DFCLoader