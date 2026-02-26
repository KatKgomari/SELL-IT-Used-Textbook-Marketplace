import React from "react";
import { useState } from "react";
import "./SellForm.css"

const SellForm : React.FC =() =>{
    const [sellFormData, setSellFormData] = useState({
        title: "",
        authors: "",
        isbn: "",
        price: 0,
    })

    const HandleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.name === "price"){
            setSellFormData({
                ...sellFormData,
                [e.target.name]: e.target.value? Number(e.target.value): 0
            })
        }
        else{
            setSellFormData({
                ...sellFormData,
                [e.target.name]: e.target.value
            })
        }
    }

    const HandleSellFormSubmit = (e:React.SubmitEvent) =>{
        e.preventDefault() //prevents page refresh
        console.log(sellFormData)
    }

    return (
        <div className="sell-div">
            <form onSubmit= {HandleSellFormSubmit}>
                <input 
                    type="text" 
                    placeholder="Title"
                    name="title"
                    value= {sellFormData.title}
                    onChange= {HandleChange}
                />
                <input 
                    type="text" 
                    placeholder="Authors"
                    name= "authors"
                    value= {sellFormData.authors}
                    onChange= {HandleChange}
                    />
                <input 
                    type="text" 
                    placeholder="ISBN"
                    name="isbn"
                    value = {sellFormData.isbn}
                    onChange= {HandleChange}
                    />
                <input 
                    type="text" 
                    placeholder="0.00"
                    name= "price"
                    value={sellFormData.price}
                    onChange= {HandleChange}
                />
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default SellForm;