import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { addVideoToHistoryAPI, removeVideoAPI } from '../services/allAPI';

function VideoCard({video,setDeleteResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
  
    const {caption,link} = video
    const today= new Date()
    const timeStamp= new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)

    const videoHistory={caption,link,timeStamp}
    await addVideoToHistoryAPI(videoHistory)
  }
  const deleteVideoAll=async(id)=>{
    await removeVideoAPI(id)
    setDeleteResponse(true)
  }
  const onDragStart=(e,id)=>{
    console.log("Drag Started.. at ID :"+id);
    e.dataTransfer.setData("videoID",id)
  }

  return (
    <>
    <Card>
      <Card.Img draggable onDragStart={e=>onDragStart(e,video?.id)}  onClick={handleShow}  height={'200px'} variant="top" src={video?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
        <h5>{video?.caption}</h5>
        {insideCategory?null:
          <button  onClick={()=>deleteVideoAll(video?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
          }
        </Card.Title>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%"  height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Modal.Body>          
      </Modal>

    </>
  )
}

export default VideoCard