import React, {useState, useEffect} from 'react';
import '../media/a1.jpeg';
import '../media/a2.jpeg';
import './slider.css';

const Slider = ()=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const item = [
        {id:1, content: <div className='itemSlider'><img src={require('../media/a1.jpeg')} alt="slide" /></div>},
        {id:2, content: <div className='itemSlider'><img src={require('../media/a2.jpeg')} alt="slide" /></div>},
        {id:3, content: <div className='itemSlider'><img src={require('../media/a1.jpeg')} alt="slide" /></div>}
    ];
    
    useEffect(()=>{
        const id = setInterval(()=>{
            setCurrentIndex((currentIndex + 1) % item.length);
            console.log('slidre call here automaticly');
        }, 3000);

        setIntervalId(id);
        console.log('yes useEffect call here _1')
        return ()=> clearInterval(id);

    }, [currentIndex, item.length]);

    const handlerPrev = ()=>{
        clearInterval(intervalId);
        setCurrentIndex((currentIndex - 1) % item.length);
    }

    const handlerNext = ()=>{
        clearInterval(intervalId);
        setCurrentIndex((currentIndex + 1) % item.length);
    }
    const handlerClick = (itemIndex)=>{
        clearInterval(intervalId);
        setCurrentIndex(itemIndex);
    }

    return (
        <>
            <div className='slider'>
                {
                    item.map((itemContent, index)=>{
                        const isActive = index === currentIndex;
                        const className = `slider-item ${isActive ? 'active': ''}`
                        return (
                            <div 
                                className={className} 
                                key={itemContent.id}

                                >
                                {
                                 itemContent.content   
                                }
                            </div>
                        )
                    })
                }
                <div className='slider-controls'>
                    <button onClick={handlerPrev}>
                        Prev
                    </button>
                    <div className='slider-indicator'>
                        {
                            item.map((_, index)=>{
                                return (<span key={index} 
                                    onClick={()=>{handlerClick(index)}}
                                    className={`slider-indicator-item ${index === currentIndex ? 'active' : ''}`}
                                    >
                                    {index+1}
                                </span>)
                            })
                        }
                    </div>
                    <button onClick={handlerNext}>
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default Slider;