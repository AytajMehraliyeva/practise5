import {Helmet} from 'react-helmet'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.scss'
import { useContext } from 'react';
import MainContext from '../../context';
import Card from '../../companent/Card/Card';
const Home = () => {
   const{item}=useContext(MainContext)

    const settings = {
       
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
      };


      
  return (
    <>
<Helmet>
    <title>Home</title>
    </Helmet>

    <div className='sliders'>
     
      <Slider className='slider' {...settings}>
        <div>
        <img src="https://preview.colorlib.com/theme/wines/images/hero_1.jpg" alt="" />
        <div className='text'>
            <p>Welcome</p>
            <h3>WINES FOR <br /> EVERYONE</h3>
            </div>
        </div>
        <div>
         <img src="https://preview.colorlib.com/theme/wines/images/hero_2.jpg" alt="" />
         <div className='text'>
            <p>Welcome</p>
            <h3>WINES FOR <br /> EVERYONE</h3>
            </div>
        </div>
       
      </Slider>
    </div>
    <div className='cards' id='cards'>
        {item.map((data,index)=>(
            <Card data={data} key={index}/>
        ))}
    </div>
 
    <div className='sliders2'>
    <div>
        <img src="https://preview.colorlib.com/theme/wines/images/hero_1.jpg" alt="" />
        <div className='text'>
            <p>Welcome</p>
            <h3>WINES FOR <br /> EVERYONE</h3>
            </div>
            </div>
    </div>

    <div className='sliders3' id='sliders3'>
     
      <Slider {...settings}>
        <div>
        <div className='sliderr'>

           <div className='sliderCard'>
               <img src="https://preview.colorlib.com/theme/wines/images/person_2.jpg" alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates similique ullam mollitia in velit eveniet ipsum dolorum pariatur molestiae perferendis?</p>
          </div>

          <div className='sliderCard'>
               <img src="https://preview.colorlib.com/theme/wines/images/person_2.jpg" alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates similique ullam mollitia in velit eveniet ipsum dolorum pariatur molestiae perferendis?</p>
          </div>
          <div className='sliderCard'>
               <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg" alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates similique ullam mollitia in velit eveniet ipsum dolorum pariatur molestiae perferendis?</p>
          </div>
        
        </div>
        </div>

        <div>
        <div className='sliderr'>

           <div className='sliderCard'>
               <img src="https://preview.colorlib.com/theme/wines/images/person_2.jpg" alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates similique ullam mollitia in velit eveniet ipsum dolorum pariatur molestiae perferendis?</p>
          </div>

          <div className='sliderCard'>
               <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg" alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates similique ullam mollitia in velit eveniet ipsum dolorum pariatur molestiae perferendis?</p>
          </div>
          <div className='sliderCard'>
               <img src="https://preview.colorlib.com/theme/wines/images/person_3.jpg" alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates similique ullam mollitia in velit eveniet ipsum dolorum pariatur molestiae perferendis?</p>
          </div>
        
        </div>
        </div>
      </Slider>
    </div>

    <div id='respoSlider'>
     
      <Slider {...settings}>
        <div className='sliderCard'>
               <img src="https://preview.colorlib.com/theme/wines/images/person_2.jpg" alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates similique ullam mollitia in velit eveniet ipsum dolorum pariatur molestiae perferendis?</p>
          </div>
          <div className='sliderCard'>
               <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg" alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates similique ullam mollitia in velit eveniet ipsum dolorum pariatur molestiae perferendis?</p>
          </div>
          <div className='sliderCard'>
               <img src="https://preview.colorlib.com/theme/wines/images/person_3.jpg" alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates similique ullam mollitia in velit eveniet ipsum dolorum pariatur molestiae perferendis?</p>
          </div>
      
      </Slider>
    </div>s

    <div className='section'>
        <h4>Wine's Blog</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
        <a href="">View All Products </a>
        <div className='sectionCards' id='section'>
            <div className='sectionCard' id='sectionCard'>
                <img src="https://preview.colorlib.com/theme/wines/images/img_1.jpg" alt="" />
               <div className="sectionBody" id='sectionBody'> 
               <h5>What You Need To Know About Premium Rosecco</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                <span>Dave Rogers in News</span></div>
            </div>
      


            <div className='sectionCard' id='sectionCard'>
                <img src="https://preview.colorlib.com/theme/wines/images/img_2.jpg" alt="" />
               <div className="sectionBody" id='sectionBody'> 
               <h5>What You Need To Know About Premium Rosecco</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                <span>Dave Rogers in News</span></div>
        
        </div>


     
            <div className='sectionCard' id='sectionCard'>
                <img src="https://preview.colorlib.com/theme/wines/images/img_3.jpg" alt="" />
               <div className="sectionBody" id='sectionBody'> 
               <h5>What You Need To Know About Premium Rosecco</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                <span>Dave Rogers in News</span></div>
            </div>

        
  </div>
    </div>
    </>
  )
}

export default Home