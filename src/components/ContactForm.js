import { useEffect, useState } from "react";


export default function ContactForm() {
    const[formData, setFormData] = useState({})

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [terms, setTerms] = useState(false)
    
    const [validForm, setValidForm] = useState(false)
    
    // const contactFormInfo = {
        //     firstName: firstName,
        //     lastName: lastName,
        //     terms: terms
        //address
        //zip
        //state
        //message
    // } 

//     useEffect(() => {
//         if(contactFormInfo.firstName && contactFormInfo.lastName && contactFormInfo.terms){
//         setValidForm(true)
//         }
// }, [contactFormInfo.firstName, contactFormInfo.lastName, contactFormInfo.terms])

    const sendData = (e) => {
        e.preventDefault() // will make the button not refresh the page

        fetch(`${process.env.REACT_API_ENDPOINT}/hot`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log('Success:', data))
        .catch(err => console.error(err))
    }

const setFormObject = (event, name) => {
    // if(event.target.checked)




    setFormData({...formData, [event.target.name]: event.target.value})
}


console.log(formData)

  return (
    <>
      <form method="post">
        <label>
            First Name: 
            <input 
                placeholder="First Name" 
                type="text" 
                name="firstName" 
                // onChange={(event) => setFormData({...formData, firstName: event.target.value})} /> {/* event can be called anything but is usually is event*/}
                onChange={event => setFormObject(event)} /> {/* can be shortened to onChange={setFormObject}  */}
        </label>
        <br />
        <label>
            Last Name: 
            <input 
                placeholder="Last Name"
                type="text" 
                name="lastName"
                onChange={event => setFormObject(event)} /> {/* ... tells it to leave whats already in there alone and bring it in*/}
        </label>
        <br />
        <label>
            Address: 
            <input 
            placeholder="Address" 
            type="text" 
            name="address" 
            onChange={event => setFormObject(event)} />
        </label>
        <br />
        <label>
            Zip: 
            <input 
            placeholder="Zip Code" 
            onChange={event => setFormObject(event)}
            type="text" 
            name="zip" 
            maxLength={5}  />
        </label>
        <br />
        <label>
            State: 
            <select name="state" onChange={event => setFormObject(event)}>
                <option value=""></option>
                <option value="fl">FL</option>
                <option value="il">IL</option>
                <option value="ny">NY</option>
                <option value="nj">NJ</option>
            </select>
        </label>
        <br/>
        <label>
            Date: 
            <input type="date" name="date" onChange={event => setFormObject(event)} />
        </label>
        <br />
        <label>
            Terms and conditions
            <input type="checkbox" onChange={event => setTerms(event.target.checked)}/>
        </label>
        <br/>
        <label>Message: 
            <textarea name="message" cols="30" rows="10" onChange={event => setFormObject(event)} />
        </label>
        <br/>
        <button onClick={(e) => sendData(e)} disabled={!validForm}>Submit</button>
        <br/>
        <input type="file" name="" id="" />
      </form>
    </>
  );
}
