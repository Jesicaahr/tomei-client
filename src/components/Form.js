import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import ava from "../assets/Avatar.png"
import { createUser } from '../store/actions/user';
import Swal from "sweetalert2";

function Form({createUser}) {
    const [photo, setPhoto] = useState(ava)
    const[avatar, setAvatar] = useState(null)
    const target = useRef(null)
    const { register, formState: {errors}, handleSubmit } = useForm()
    // var uploaded

    const handleUpload =(e) => {
        var uploaded = e.target.files[0]
        setAvatar(uploaded)
        setPhoto(URL.createObjectURL(uploaded))
    }


    const onSubmit = (data, e) => {
        if(data.password !== data.password2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your confirm password is not match',
            })
        }
        else if(avatar == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please upload your avatar',
            })
        }
        else {
            let body = {
                name: data.name,
                email: data.email,
                password: data.password,
                imageUrl: avatar
            }
            createUser(body)
        }
    }

    return (
        <div>
            <div className="title">
                <p>CREATE YOUR ACCOUNT</p>
            </div>
            <div className="inform">
                <p>Because there will be documents that you need to prepare to apply
                    for the loan, let's start off by creating password so that you can
                    login to your account once you have these document ready.
                </p>
            </div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                    <div className="contact-form row">
                        <div className="col-lg-3 form-field upload-sec text-center">
                      
                                <div className="img-uploaded">
                                    <img src={photo}/>
                                </div>
                         
                          
                                <input ref={target} type="file" accept="image/*" multiple={false} onChange={(e) => handleUpload(e)} 
                                    // {...register("imageUrl", { required: true })}
                                        // name="name"
                                        // className="input-text"
                                        // id="name"
                                />
                                <div className="text-center">
                                    <button className="btn upload-btn" onClick={() => target.current.click()} > Upload </button>
                                </div>
                      
                            
                        </div>

                        <div className="col-lg-9 form-sec" >
                            <div className="row">
                                <div className="form-field col-lg-6">
                                    <label htmlFor="name" className="label" >NAME</label>
                                    <input 
                                        {...register("name", { required: true })}
                                        name="name"
                                        type="text"
                                        className="input-text"
                                        id="name"
                                    />
                                    <div className="text-danger">
                                        {errors.name && "Name must be filled"}
                                    </div>
                                </div>
                                <div className="form-field col-lg-6">
                                    <label htmlFor="email" className="label" >EMAIL</label>
                                    <input
                                        {...register("email", { required: true })}
                                        name="email"
                                        type="email"
                                        className="input-text"
                                        id="email"
                                     />
                                     <div className="text-danger">
                                        {errors.email && "Email must be filled"}
                                    </div>
                                </div>
                                <div className="form-field col-lg-6">
                                    <label htmlFor="password1" className="label" >PASSWORD</label>
                                    <input 
                                        {...register("password", { required: true })}
                                        name="password"
                                        type="password"
                                        className="input-text"
                                        id="password"
                                    />
                                    <div className="text-danger">
                                        {errors.password && "Password must be filled"}
                                    </div>
                                </div>
                                <div className="form-field col-lg-6">
                                    <label htmlFor="password2" className="label" >CONFIRM PASSWORD</label>
                                    <input 
                                        {...register("password2", { required: true })}
                                        name="password2"
                                        type="password"
                                        className="input-text"
                                        id="password2"
                                    />
                                    <div className="text-danger">
                                        {errors.password2 && "Confrim Password must be filled"}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="form-field">
                            <button type="submit" className="btn submit-btn">
                                SAVE & NEXT <BsArrowRight/>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

// export default Form
const stateProps = (state) => ({});

export default connect(stateProps, { createUser })(Form);
