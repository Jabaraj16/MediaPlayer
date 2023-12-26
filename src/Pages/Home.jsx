import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'
function Home() {
  const [uploadVideoResponse,setUploadRespose]=useState({})
  const [dropResponse,setDropResponse]=useState({})
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
        <div className="add-videos">
          <Add setUploadRespose={setUploadRespose}/>
        </div>
        <Link to={'/history'} style={{textDecoration:'none',color:'white',fontSize:'20px'}}>Watch History <i className="fa-solid fa-clock-rotate-left ms-1"></i></Link>
      </div>
      <div className="container-fluid mt-3 row ">
        <div className="all-videos col-lg-9">
          <h3>All Uploaded Videos</h3>
          <View uploadVideoResponse={uploadVideoResponse} setDropResponse={setDropResponse}/>
        </div>
        <div className="category col-lg-3">
          <Category dropResponse={dropResponse}/>
        </div>
      </div>
    </>
  )
}

export default Home