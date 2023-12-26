import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllCategoryAPI, getAllVideoAPI, updateCategoryAPI } from '../services/allAPI'
function View({uploadVideoResponse,setDropResponse}) {
  const [deleteResponse,setDeleteResponse]=useState(false)
  const [allVideos,setAllVideos] = useState([])
  useEffect(()=>{
    getAllVideos()
    setDeleteResponse(false)
  },[uploadVideoResponse,deleteResponse])

  const getAllVideos= async()=>{
    const result=await getAllVideoAPI()
    if(result.status===200){
      setAllVideos(result.data)
    }else{
      console.log("API failed");
      setAllVideos([])
    }
  }
  const dragOver =(e)=>{
    console.log(e);
    e.preventDefault()
  }
  const videoDropped=async(e)=>{
    const {videoID,categoryID}= JSON.parse(e.dataTransfer.getData("data"))
    const {data}=await getAllCategoryAPI()
    const selectedCategory=data.find(item=>item.id==categoryID)
    let result=selectedCategory.allVideos.filter(video=>video.id!==videoID)
    let {id,categoryName}=selectedCategory
    let newCategory={id,categoryName,allVideos:result}
    const res=await updateCategoryAPI(categoryID,newCategory)
    setDropResponse(res)
  }
  return (
    <>
    <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
      { allVideos?.length>0?allVideos.map(video=>(
         <Col className='mb-4' sm={12} md={6} lg={4} xl={3}>
         <VideoCard video={video} setDeleteResponse={setDeleteResponse}/>
         </Col>
      )):<p className='text-warning fs-3 fw-bolder'>Video is not uploaded yet!!!!</p>
       
      }
    </Row>
    </>
  )
}

export default View