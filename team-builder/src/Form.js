import React, { useState } from 'react';
import './Form.css';

const dummyData = [
    { name: "Bradly", email: "bradly@gmail.com", role: "Full-Stack Engineer" },
    { name: "Jesse", email: "jesse@gmail.com", role: "Assistant" }
]
const initialFormValues = { name: '', email: '', role: '' }

export default function Form(){
    const [members, setMembers] = useState(dummyData)
    const [formValues, setFormValues] = useState(initialFormValues)

    const change = (event) => {
        const { value, name } = event.target
        setFormValues({...formValues, [name]: value})
      }

      const submit = (event) => {
        event.preventDefault()
        const newMember = {
          name: formValues.name.trim(),
          role: formValues.role.trim(),
          email: formValues.email.trim()
        }
    
        setMembers([...members, newMember])
        setFormValues(initialFormValues)
      }

    return (
        <div className='container'>
            <h1>Simple Form</h1>
            {members.map((member, idx) => (
                <div key={idx}>
                    <span>{member.name}</span> is a(n) <span>{member.role}</span>. Contact: <span>{member.email}</span>
                </div>
            ))}
            <form onSubmit={submit}>
                <label>Name:<input
                    id='memberName'
                    placeholder='name'
                    type='text'
                    name='name'
                    onChange={change}
                    />
                </label>
                <label> Role:<input
                    id='memberRole'
                    placeholder='role'
                    type='text'
                    name='role'
                    onChange={change}
                    />
                 </label>
                 <label> Email:<input
                    id='memberEmail'
                    placeholder='email'
                    type='text'
                    name='email'
                    onChange={change}
                    />
                 </label>

                <button>submit</button>
            </form>
        </div>
    )
}