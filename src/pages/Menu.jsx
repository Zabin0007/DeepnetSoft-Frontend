import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import banner from '../assets/banner.jpeg'
import random from '../assets/random.png'
import bg from '../assets/bg.png'
import juice from '../assets/juice.png'
import cocktail from '../assets/cocktail.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BiSolidFoodMenu } from "react-icons/bi";
import { addMenus, getMenu } from '../Services/AllAPI'
import { ToastContainer, toast } from 'react-toastify';
function Menu() {
    const [staticModal, setStaticModal] = useState(false);
    const toggleOpen = () => setStaticModal(!staticModal);
    const [menu, setMenu] = useState([])
    const [filteredMenu, setFilteredmenu] = useState([])
    const [menuTypee, setMenutypee] = useState('ALL TYPES')
    const [addMenu, setAddMenu] = useState({
        menuType: "",
        itemName: "",
        itemDescription: "",
        itemPrice: ""
    })
    useEffect(() => {
        Aos.init()
        getMenuApi()
    }, [])
    const getMenuApi = async () => {
        const response = await getMenu()
        console.log(response);
        setMenu(response.data)
        setFilteredmenu(response.data)
    }
    console.log(menu);

    const filter = (menuType) => {
        const filteredData = menu.filter(item => item.menuType === menuType)
        console.log(filteredData);
        setFilteredmenu(filteredData)
        setMenutypee(menuType)
    }
    const addMenuAPI = async () => {
        console.log("Adding menu:", addMenu);
        const { menuType, itemName, itemDescription, itemPrice } = addMenu;
        if (!menuType || !itemName || !itemDescription || !itemPrice) {
            toast.warn('Please Fill The Details..!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            try {
                const response = await addMenus(addMenu);
                console.log( response);
                toast.success('Menu added successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setAddMenu({
                    menuType: "",
                    itemName: "",
                    itemDescription: "",
                    itemPrice: ""
                })
                toggleOpen()
                window.location.reload()
            } catch (error) {
                console.error("Error:", error);
                toast.error('Failed to add menu!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        }
    };



    return (
        <>
            <div className='row m-0' style={{ backgroundImage: `url(${banner})`, height: '50vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="col-12 col-md-3"></div>
                <div className="col-12 col-md-6">
                    <h1 id='menu' className='mt-5 text-center text-light' style={{ fontSize: "70px", textShadow: "2px 2px #FF0000" }}>MENU</h1>
                    <p style={{ fontSize: "25px" }} id='menu' className='text-center text-light'>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
                </div>
                <div className="col-12 col-md-3"></div>
            </div>
            <div className='row m-0'>
                <div className="col-12 col-md-12 text-center p-2" style={{ backgroundImage: `url(${random})` }}>
                    <button onClick={() => filter('Food')} className='mx-2 btn btn-lg' style={{ backgroundColor: 'black', color: 'white' }}>FOOD</button>
                    <button onClick={() => filter('Drinks')} className='mx-2 btn btn-lg' style={{ backgroundColor: 'black', color: 'white' }}>DRINKS</button>
                    <button onClick={() => filter('Brunch')} className='mx-2 btn btn-lg' style={{ backgroundColor: 'black', color: 'white' }}>BRUNCH</button>
                </div>
            </div>
            <div className="row m-0 p-5" style={{ backgroundImage: `url(${bg})`, height: 'auto', backgroundSize: 'cover' }}>
                <div className='text-center'>
                    <h3 style={{ textTransform: "uppercase", color: "white" }}>Create Your own menu</h3>
                    <button onClick={toggleOpen} className='btn btn-lg' style={{ backgroundColor: 'black', color: 'white' }}>Add<BiSolidFoodMenu /> </button>
                    <MDBModal staticBackdrop tabIndex='-1' open={staticModal} onClose={() => setStaticModal(false)}>
                        <MDBModalDialog>
                            <MDBModalContent>
                                <MDBModalHeader style={{ backgroundColor: "#121618", color: "white" }}>
                                    <MDBModalTitle>Add Menu</MDBModalTitle>
                                </MDBModalHeader>
                                <MDBModalBody style={{ backgroundColor: "#121618", color: "white" }}>
                                    <input onChange={e => setAddMenu({ ...addMenu, menuType: e.target.value })} type="text" placeholder='Menu Type' className='form-control mb-2' />
                                    <input onChange={e => setAddMenu({ ...addMenu, itemName: e.target.value })} type="text" placeholder='Item Name' className='form-control mb-2' />
                                    <input onChange={e => setAddMenu({ ...addMenu, itemDescription: e.target.value })} type="textbox" placeholder='Description' className='form-control mb-2' />
                                    <input onChange={e => setAddMenu({ ...addMenu, itemPrice: e.target.value })} type="text" placeholder='Price' className='form-control' />
                                </MDBModalBody>
                                <MDBModalFooter style={{ backgroundColor: "#121618", color: "white" }}>
                                    <button className='btn btn-danger btn-lg' onClick={toggleOpen}>
                                        Close
                                    </button>
                                    <button onClick={addMenuAPI} className='btn btn-dark btn-lg'>Upload</button>
                                </MDBModalFooter>
                            </MDBModalContent>
                        </MDBModalDialog>
                    </MDBModal>
                </div>
                <div className="col-12 col-md-2 d-none d-md-block">
                    <img src={juice} data-aos='fade-right' data-aos-easing="linear"
                        data-aos-duration="2000" className='img-fluid' style={{ marginTop: "-80px", marginLeft: "100px" }} alt="" />
                </div>
                <div className='col-12 col-md-8 text-center my-5 border border-2 p-5'>
                    <h1 className='text-light' style={{ textShadow: "2px 2px #FF0000", textTransform: 'uppercase' }}>{menuTypee}</h1>
                    <div className="row p-2">
                        {
                            filteredMenu.map((item, index) => (
                                <div className="col-12 col-md-6" key={index}>
                                    <h3 className='text-light text-start'>{item.itemName}..........................${item.itemPrice}</h3>
                                    <p style={{ fontSize: "18px" }} className='text-start text-light'>{item.itemDescription}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-12 col-md-2 d-none d-md-block">
                    <img src={cocktail} data-aos="fade-left" data-aos-easing="linear"
                        data-aos-duration="2000" className='img-fluid' style={{ marginTop: "150px", marginLeft: "-150px" }} alt="" />
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default Menu