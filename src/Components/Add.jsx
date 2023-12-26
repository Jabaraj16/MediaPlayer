import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import {Modal,FloatingLabel ,Form} from 'react-bootstrap';
import { uploadNewVideoAPI } from '../services/allAPI';
function Add({setUploadRespose}) {
  const [uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(uploadVideo);

  const youtubeVideoEmbbed=(e)=>{
    const {value}=e.target
    if(value.includes("v=")){
      const vID=value.split("v=")[1].slice(0,11)
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  const handleUpload= async()=>{
    const {id,caption,url,link} = uploadVideo

    if(!id || !caption || !url || !link){
      alert("please fill all the columns")
    }else{
      const result= await uploadNewVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>200 && result.status<300){
        handleClose()
        setUploadVideo({id:"",caption:"",url:"",link:""})
        setUploadRespose(result.data)
      }else{
        alert(result.message)
      }
    }
  }

  return (
    <>
      <div className="d-flex align-items-center ">
        <h4>Upload New Videos</h4>
          <button onClick={handleShow} className='btn ' ><i  class="fa-solid fa-plus"></i></button>
          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInputVideoId"
        label="Upload Video ID"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Upload Video ID" onChange={e=>setUploadVideo({...uploadVideo,id:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputcaption"
        label="Upload Video Caption"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Upload video caption" onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputimg"
        label="Upload Video Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Upload Video Image URL" onChange={e=>setUploadVideo({...uploadVideo,url:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputLink"
        label="Upload Youtube Video Link"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Upload Youtube Video Link" onChange={youtubeVideoEmbbed}/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  )
}

export default Add