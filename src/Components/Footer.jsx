import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container mt-5'>
      <div className="footer-content d-flex justify-content-between">
        <div style={{width:'25%'}} className="logo  d-flex flex-column">
       <div className='d-flex'>
          <i className="fa-solid fa-cloud-arrow-up fs-4 "></i>
              <h4 className='ms-2 text-white fs-4'>Media Player</h4>
       </div>
            <span>Design and build with all the love in the world by the bootstrap team with the help of our contributor</span>
            <span>Code licensed MIT,docs CC BY 3.o.</span>
            <span>Currently v5.3.2</span>
        </div>
        <div className="links d-flex flex-column">
          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}><a className='text-decoration-none text-white' >Landing Page</a></Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}><a className='text-decoration-none text-white' >Home</a></Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}><a className='text-decoration-none text-white' >Watch History</a></Link>
        </div>
        <div className="guides d-flex flex-column">
        <h4>Guides</h4>
          <a className='text-decoration-none text-white' href="https://react.dev/" target='_blank'>React</a>
          <a className='text-decoration-none text-white' href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
          <a className='text-decoration-none text-white' href="https://www.w3schools.com/react/react_router.asp" target='_blank'>React Routing</a>
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <div className='d-flex flex-column'>
            <div className='d-flex'>
              <input type="text"className='form-control'  placeholder='Enter email'/>
              <button className='btn bg-info text-white ms-2'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div  className="social-icons d-flex mt-3 justify-content-between">
            <i style={{height:'50px'}} class="fa-regular fa-envelope fa-2x"></i>
            <i style={{height:'50px'}} class="fa-brands fa-twitter fa-2x"></i>
            <i style={{height:'50px'}} class="fa-brands fa-instagram fa-2x"></i>
            <i style={{height:'50px'}} class="fa-brands fa-linkedin fa-2x"></i>
            <i style={{height:'50px'}} class="fa-brands fa-github fa-2x"></i>
            <i style={{height:'50px'}} class="fa-brands fa-facebook fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center'>Copyright &copy; 2023 Media Player. Build With React</p>
    </div>
  )
}

export default Footer