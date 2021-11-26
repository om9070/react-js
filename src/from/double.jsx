
import React, { useState } from "react";

const App = () => {

    const [name, setname] = useState({
        Fname: " ",
        Lname: " ",
        email: " ",
        phone: " ",
    });



    const inputevent = (data) => {
        // const name = (data.target.name)
        // const value = (data.target.value)

        const { name, value } = data.target;
        setname((prev) => {
            console.log(prev);
            return {

                ...prev,
                [name]: value,
            }
            // if (name === "Fname") {
            //   return {
            //     Fname: value,
            //     Lname: prev.Lname,
            //     email: prev.email,
            //     phone: prev.phone,
            //   }
            // }
            // else if (name === "Lname") {
            //   return {
            //     Lname: value,
            //     Fname: prev.Fname,
            //     email: prev.email,
            //     phone: prev.phone
            //   }
            // }
            // else if (name === "email") {
            //   return {
            //     Lname: prev.Lname,
            //     Fname: prev.Fname,
            //     email: value,
            //     phone: prev.phone
            //   }
            // }
            // else if (name === "phone") {
            //   return {
            //     Lname: prev.Lname,
            //     Fname: prev.Fname,
            //     email: prev.email,
            //     phone: value
            //   }
            // }
        })

    }




    const orgdata = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={orgdata}>

                <div>

                    <div>
                        <h1>hello={name.Fname}{name.Lname}
                        </h1>
                        <p>{name.email}{name.phone}</p>
                    </div>
                    <input type="text" placeholder="Enter your name" name="Fname" value={name.Fname} onChange={inputevent} />
                    <br />
                    <input type="text" placeholder="Enter your last name" name="Lname" value={name.Lname} onChange={inputevent} />
                    <br />
                    <input type="email" placeholder="Enter your email" name="email" value={name.email} onChange={inputevent} />
                    <br />
                    <input type="number" placeholder="Enter your phone" name="phone" value={name.phone} onChange={inputevent} />


                    <button type="submit" >click me</button>
                </div>
            </form>
        </>
    )
}
export default App;