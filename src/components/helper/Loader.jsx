import React from 'react'
import './loader.css'
// import LodingImage from '../../images/loading.gif'

const Loader = () => {
  return (
    <>

     <div className='loader flex w-full items-center justify-center mt-8'>
     <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

    </div>
     {/* <img src={LodingImage} alt="" /> */}
    </>
  )
}

export default Loader