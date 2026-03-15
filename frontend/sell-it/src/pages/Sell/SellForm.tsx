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

    const HandleSellFormSubmit = async (e:React.SubmitEvent) =>{
        e.preventDefault() //prevents page refresh
        console.log(sellFormData)
        
        // Come back to do input validation, right now just focusing on connection to backend 
        // Come back to create a listing details type 
        // Come back to make a sell button that leads to the sell form after the user has logged in 
        try{
            let hasError: boolean = false;
            const response: Response = await fetch("http://localhost:5000/api/listing",
                {
                    method: "POST",
                    body: JSON.stringify(sellFormData),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

            if(!response.ok){
                hasError= true;
            }

            const responseData = await response.json();

            if(hasError){
                throw new Error (responseData.message);
            }

            setSellFormData({
                title: "",
                authors: "",
                isbn: "",
                price: 0
            });

        }catch(error){
            if(error instanceof Error ){
                alert(error.message)
            }
            else{
                alert(error);
            }
        }
        
    };

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