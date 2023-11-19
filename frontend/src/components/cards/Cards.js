import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function Cards() {
    /*const backgroundImageStyle = {
        backgroundImage: `url(${require('../media/a4.jpeg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };*/
  return (
    <div className='blogs' /*style={backgroundImageStyle}*/>
    <div className="info-container">
    <h2 className="heading">Blogs</h2>
    <p className="paragraph">
      You may go through our blogs.
    </p>
  </div>
    <div className='card' >
      <div className='card-container'>
        <div className='image-container'>
          <img src={require('../media/a3.jpeg')} alt='' />
        </div>
        <div className='card-content'>
          <div className='card-title'>
            <h3>Facts</h3>
          </div>
          <div className='card-body'>
            <p>5 Facts related to Blood donation</p>
          </div>
          <div className="btn">
            <button>
              <Link to="#">
                View More
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className='card-container'>
        <div className='image-container'>
          <img src={require('../media/a3.jpeg')} alt='' />
        </div>
        <div className='card-content'>
          <div className='card-title'>
            <h3>Facts</h3>
          </div>
          <div className='card-body'>
            <p>5 Facts related to Blood donation</p>
          </div>
          <div className="btn">
            <button>
              <Link to="#">
                View More
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className='card-container'>
        <div className='image-container'>
          <img src={require('../media/a3.jpeg')} alt='' />
        </div>
        <div className='card-content'>
          <div className='card-title'>
            <h3>hi</h3>
          </div>
          <div className='card-body'>
            <p>hi</p>
          </div>
          <div className="btn">
            <button>
              <Link to="#">
                View More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
