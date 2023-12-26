import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'

function WatchHistory() {
  const [history,setHistory]=useState({})
  useEffect(()=>{
    getAllhistory()
  },[])
 

  const getAllhistory= async()=>{
    const result=await getHistoryAPI()
    if(result.status===200){
      setHistory(result.data)
    }else{
      alert(result.message)
      console.log("API failed");
    }
  }
  const removeHistoty=async(id)=>{
    await removeHistoryAPI(id)
    getAllhistory()
  }
  
  return (
    <>
    <div className=" container mt-4 d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link to={'/home'} style={{textDecoration:'none'}}><h6> <i className="fa-solid fa-arrow-left me-2"></i> Back to Home</h6></Link>
    </div>
    <div className='tables container-fluid mt-4'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th><i className="fa-solid fa-ellipsis"></i></th>
        </tr>
      </thead>
      <tbody>
       {history?.length>0?history?.map((video,index)=><tr>
          <td>{index+1}</td>
          <td>{video.caption}</td>
          <td>{video.link}</td>
          <td>{video.timeStamp}</td>
          <td><i className="fa-solid fa-trash text-danger" onClick={()=>removeHistoty(video?.id)}></i></td>
        </tr>) :<p className='text-warning'>No videos is wateched yet!!</p>}
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default WatchHistory