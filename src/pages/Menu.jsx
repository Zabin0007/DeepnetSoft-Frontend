import React from 'react'
import banner from '../assets/banner.jpeg'
import random from '../assets/random.png'
import bg from '../assets/bg.png'
import juice from '../assets/juice.png'
import cocktail from '../assets/cocktail.png'
function Menu() {
  return (
    <>
    <div  className='row m-0' style={{backgroundImage:`url(${banner})`,  height: '50vh',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>            
          <div className="col-12 col-md-3"></div>
          <div className="col-12 col-md-6">
          <h1 id='menu' className='mt-5 text-center text-light' style={{fontSize:"70px",textShadow: "2px 2px #FF0000"}}>MENU</h1>
            <p style={{fontSize:"25px"}} id='menu' className='text-center text-light'>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
          </div>
          <div className="col-12 col-md-3"></div>
    </div>
    <div className='row m-0'>
        <div className="col-12 col-md-12 text-center p-2" style={{backgroundImage:`url(${random})`}}>
            <button className='mx-2'>FOOD</button><button className='mx-2'>DRINKS</button><button className='mx-2'>BRUNCH</button>
            </div>
            </div>
        <div className="row m-0 p-5" style={{backgroundImage:`url(${bg})`,  height:'auto',  backgroundSize: 'cover'}}>
            <div className="col-12 col-md-2 d-none d-md-block">
                    <img src={juice}  className='img-fluid' style={{marginTop:"-80px",marginLeft:"100px"}} alt="" />
            </div>  
            <div className='col-12 col-md-8 text-center my-5 border border-2 p-5'>
                        <h1 className='text-light' style={{textShadow: "2px 2px #FF0000"}}>BRUNCH COCKTAILS</h1>
                     <div className="row p-2">
                        <div className="col-12 col-md-6">
                            <h5 className='text-light text-start'>CINNAMON TOAST CRUNCH..........................$16</h5>
                            <p style={{fontSize:"18px"}} className='text-start text-light'>Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon</p>
                        </div>
                        <div className="col-12 col-md-6">
                        <h5 className='text-light text-start'>CINNAMON TOAST CRUNCH..........................$16</h5>
                            <p style={{fontSize:"18px"}} className='text-start text-light'>Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon</p>
                        </div>
                    </div>   
            </div>
            <div className="col-12 col-md-2 d-none d-md-block">
                <img src={cocktail} className='img-fluid' style={{marginTop:"150px",marginLeft:"-150px"}} alt="" />
            </div>
        </div>

        
   
    </>
  )
}

export default Menu