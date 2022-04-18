import React, { useState } from 'react'
// import { useState } from 'react/cjs/react.development'
import './KeepTrack.css'

const AddTrack = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [refund, setRefund] = useState("");


    const submit = (e) => {
        // To prevent page reload 
        e.preventDefault();
        if (!title || !desc || !amount || !refund) {
            alert("Please enter value in all respective field");
        }
        props.addTrack(title, desc, amount, refund);
        setTitle("");
        setDesc("");
        setAmount("");
        setRefund("");
    }

    return (
        <div className='container my-3'>
            <h3 className='text-center'>* Add a Track *</h3>
            <form className='box black' onSubmit={submit}>
                <div className="form-text">Note: We don't store any type of data on server. You can use it without any worry.</div><br />
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label ">Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount Paid</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control" id="amount" />
                </div>
                <div className="mb-3">
                    <label htmlFor="refund" className="form-label">Refund Amount</label>
                    <input type="number" value={refund} onChange={(e) => setRefund(e.target.value)} className="form-control" id="refund" />
                </div>
                <button type="submit" className="btn btn-sm btn-primary">Add Track</button>
            </form>
        </div>
    )
}

export default AddTrack