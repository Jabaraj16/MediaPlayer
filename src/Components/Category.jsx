import React,{useEffect, useState} from 'react'
import { Button, Modal,FloatingLabel,Form, Row, Card,Col,Collapse } from 'react-bootstrap'
import { addCategoryAPI, getAVideoAPI, getAllCategoryAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


function Category({dropResponse}) {
  const [allCategories,setAllCategories]=useState([])
  const [categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getAllCategories()
  },[dropResponse])

  const getAllCategories=async()=>{
    const {data}=await getAllCategoryAPI()
    console.log(data);
    setAllCategories(data)
  }
  
  const uploadCategory=async()=>{
    if(!categoryName){
      alert("please fill it!!!")
    }else{
      const result=await addCategoryAPI({categoryName,allVideos:[]})
      console.log(result);
      if(result.status>200 && result.status<300){
        handleClose()
        setCategoryName("")
        getAllCategories() 
      }else{
        alert(result.message)
      }
    }

   
  }
  const removeCategory= async(id)=>{
    await removeCategoryAPI(id)
    getAllCategories()
  }
  const dragOver=(e)=>{
    e.preventDefault()
  }
  const videoDrop= async (e,cID)=>{
   const videoID= e.dataTransfer.getData("videoID")
   console.log(`video ID : ${videoID} category ID ${cID}`);
   const {data}=await getAVideoAPI(videoID)
   const selectedCategory=allCategories.find(item=>item.id==cID)
   selectedCategory.allVideos.push(data)
   await updateCategoryAPI(cID,selectedCategory)
   getAllCategories()
  }
  const videoDragStart=(e,videoID,categoryID)=>{
    let dataShare={videoID,categoryID}
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
  }
  return (
    <>
      <div className='d-grid '>
        <Button className='btn btn-info' variant="primary" onClick={handleShow}>
        Category
      </Button>
      </div>

      {
        allCategories?.length>0?allCategories.map(category=>(
          <div className="border rounded p-2 mt-3" droppable onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)}>
          <div  className="d-flex justify-content-between align-items-center">
            <h6 onClick={() => setOpen(!open)}>{category?.categoryName}</h6>
            <button className='btn' onClick={()=>removeCategory(category?.id)}><i className="fa-solid fa-trash text-danger"></i></button>
          </div>
          <Row>
            {
              category?.allVideos?.length>0?category.allVideos.map(card=>(
                <Col sm={12} className='mt-2' draggable onDragStart={e=>videoDragStart(e,card.id,category.id)}>
                    <VideoCard video={card} insideCategory={true}/>
                </Col>
              )):null
            }
          </Row>
        </div>
        )):<p className='fs-5 text-warning fw-bold'>No categories are added !!!</p>
        
      }
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Category Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <FloatingLabel
        controlId="floatingInputVideoId"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Category Name" onChange={e=>setCategoryName(e.target.value)} />
      </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={uploadCategory} variant="primary">Add</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default Category