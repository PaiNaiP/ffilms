import React, { useEffect, useState } from 'react'
import URL from '../config/server.js'
import Axios from 'axios'
import { storage } from '../config/config.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../Styles/Admin_Menu.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

export const AddMovie = () => {
    const url = URL.URL + "/add"
        const [data, setData] = useState({
    })

    const [foodState,setFoodState] = useState([])
    const [age, setAge] = useState(0)
    const [img, setImg]=useState([])
    const [country, setCountry]=useState([])
    const [slogan, seTSlogan] = useState([])
    // useEffect(()=>{
    //     fetch(URL.URL)
    //     .then((response)=>response.json())
    //     .then(response=>setData(response.message))
    // }, [])

    function submit(e){
        e.preventDefault()
        
        const storagew = getStorage();
        const storageRef = ref(storage, `/files/${img.name}`);
        
        const uploadTask = uploadBytesResumable(storageRef, img);
        
        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', 
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          }, 
          (error) => {
            // Handle unsuccessful uploads
            console.log(error)
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                Axios.post(url,{
                    tit:data.title,
                    img:downloadURL,
                    ganr:foodState,
                    country: country,
                    age:age,
                    slogan:slogan
                })
                .then(res=>{
                    console.log(res.data)
                })
            });
          }
        );
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    const selectedFood = []
   // const selectedMovie = []
    const handleSelect=(e)=>{
        selectedFood.push(e.target.value)
        if(foodState.includes(e.target.value)==false){
            var selectedMovie=selectedFood.concat(foodState)
            setFoodState(selectedMovie)
        }
        else{
            var myIndex = foodState.indexOf(e.target.value);
            setFoodState(foodState.splice(0, myIndex))
        }
    }

    return (
      <Form action="" onSubmit={(e)=>submit(e)}>
            <Form.Group className='frmgr'>
                <Form.Control type="text" placeholder='title' id='title' onChange={(e)=>handle(e)} value={data.title} />
            </Form.Group>
            <Form.Group className='frmgr'>
                <Form.Control type="file" placeholder='image' onChange={(e)=>setImg(e.target.files[0])} />
            </Form.Group>
            <Form.Group className='frmgr'>
                <Form.Select name="select" onChange={handleSelect}>
                    <option value="Poмантика">Романтика</option>
                    <option value="Комедия" selected>Комедия</option>
                    <option value="Драма">Драма</option>
                </Form.Select>
                {foodState}
            </Form.Group>
            <Form.Group className='frmgr'>
                <Form.Control type="text" placeholder='country'  onChange={(e)=>setCountry(e.target.value)}/>
            </Form.Group>
            <Form.Group className='frmgr'>
                <Form.Select name="select" onChange={(e)=>{
                    const selectedAge = []
                    selectedAge.push(e.target.value)
                    setAge(selectedAge)
                }}>
                    <option value="0">0</option>
                    <option value="6" selected>6</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="21">21</option>
                </Form.Select>
                {age}
            </Form.Group>
            <Form.Group className='frmgr'>
            <Form.Control type="text"  onChange={(e)=>seTSlogan(e.target.value)} placeholder='description'/>
            </Form.Group>
            <Form.Group className='frmgr'>
            <button className='btnsub'>Submit</button>
            </Form.Group>
      </Form>
        // <>
        // {
        //     !data?'Loading...':data
        // }
        // </>
    )
}
