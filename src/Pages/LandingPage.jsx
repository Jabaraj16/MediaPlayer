import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <div className='container'>
        <div className="row mt-4  align-items-center">
          <div className="col-lg-6 ">
            <h3 style={{ textAlign: 'justify' }}>Welcome to <span className='text-warning'>Media <br /> Player</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ad nostrum ab labore hic! Doloremque ratione ut quas atque sed voluptate dolorem eum ullam quae velit mollitia accusamus, porro placeat!</p>
            <Link to={'/home'} ><button className='btn btn-info fw-bolder mt-4'>Get Started</button></Link>
          </div>
          <div className="col-lg-6">
            <img src="https://media1.tenor.com/m/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
          </div>
        </div>
        <div className="features mt-5">
          <h2 className='text-center'>Features</h2>
          <div className="cards d-flex justify-content-between">
            {/* card 1 */}
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://media1.tenor.com/m/2jd3xi2WVt0AAAAC/recurring-settings.gif" />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* card 1 */}
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://media1.tenor.com/m/9txCGkE71yAAAAAC/disco-bar-line.gif" />
              <Card.Body>
                <Card.Title>Categorize Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* card 1 */}
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://media1.tenor.com/m/SZ0mKr1WKMsAAAAd/music-wave.gif" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="border rounded m-5 align-items-center p-5">
        <div className="row">
          <div className="col-lg-5">
            <h3 className='text-warning'>Simple Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse cumque totam sapiente officia nisi obcaecati, </p>
            <p style={{textAlign:'justify'}}><span className='fs-5'>Categorize Videos :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse cumque totam sapiente officia nisi obcaecati, </p>
            <p style={{textAlign:'justify'}}><span className='fs-5'>Watch History :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse cumque totam sapiente officia nisi obcaecati, </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
          <iframe width="688" height="387" src="https://www.youtube.com/embed/ZdMZ40GSVmc?si=HoUxGfVZOOadsJud" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      </div>
    </div>
    
  )
}

export default LandingPage