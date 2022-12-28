import axios from "axios"
import { useState, useEffect } from "react"
import Navbar from "../navbar"
import { url } from '../weburl'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"

export const Admin = () =>
{
    const [headerText, setheaderText] = useState('')
    const [publicId, setPublicId] = useState('')
    const [imageUrl, setImageUrl] = useState('')


    const handleChange = (e) =>
    {
        e.preventDefault()
        setheaderText(e.target.value)
    }

    useEffect(() =>
    {

    }, [headerText])

    useEffect(() =>
    {
        if (publicId)
        {
            savePublicId()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,

            })
        }

    }, [publicId])

    const saveHeaderText = (e) =>
    {
        e.preventDefault()
        axios
            .post(`${url}api/headers/header-title`, { heading: headerText })
            .then((res) =>
            {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,

                })
            })
            .catch((err) => console.log(err))
    }


    const handleImageChange = (e) =>
    {
        // const {  value } = e.target.files[0]
        // console.log('e.')
        console.log(e.target.files[0])


        // this.setState((data) => ({ ...data, [e.target.name]: e.target.value }));
        setImageUrl(e.target.files[0])


    }
    const savePublicId = () =>
    {
        axios
            .post(`${url}api/headers/header-image`, { public_id: publicId })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    const uploadImage = (e) =>
    {
        e.preventDefault()
        console.log('e.target', e.target)
        const formData = new FormData()
        formData.append('file', imageUrl)
        // // console.log(this.state.imageSelected)
        formData.append('upload_preset', 'gwxgv5ii')

        axios.post('https://api.cloudinary.com/v1_1/daurieb51/image/upload', formData)
            .then((response) =>
            {

                setPublicId(response.data.public_id)

                console.log('responseeeee', response.data.public_id)
                console.log('state set successufully', publicId)
            })


        // this.uploadImagetodb()

    }
    return (
        <div className="">
            <Navbar />
            <div className="container-fluid py-5">
                <div className="row align-items-center justify-content-center py-5 blue_bg">
                    <div className="col-sm-4">
                        <Link to='/' className="text-white">Go to Header Content</Link>
                    </div>
                    <div className="col-sm-4">
                        <Link to ='/admin-emails' className="text-white">Go to Emails Section</Link>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-sm-10 border border-dark py-5" >
                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-6">

                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Enter header text to update
                                </label>
                                <textarea class="form-control"
                                    onChange={(e) => handleChange(e)} id="exampleFormControlTextarea1" rows="3"></textarea>

                                <button className="btn btn-success blue_bg"
                                    onClick={(e) =>
                                    {
                                        saveHeaderText(e)
                                    }}
                                >Save</button>

                            </div>

                        </div>
                        <div className="row align-items-center justify-content-center mt-5">
                            <div className="col-sm-6">
                                <div>
                                    <form method='post' onSubmit={(e) =>
                                    {
                                        uploadImage(e)
                                    }
                                    }>
                                       <div>
                                            <p>Select header image to be updated</p>
                                            <input type='file' name='image' accept='image/*'
                                                onChange={handleImageChange}
                                                id='inputimage' ></input>
                                       </div>

                                        <button className="btn btn-success mb-3 mt-2 blue_bg"
                                            type="submit"
                                        >Update Image</button>
                                    </form>
                                </div>

                            </div>

                        </div>



                    </div>
                </div>


            </div>
        </div>

    )
}