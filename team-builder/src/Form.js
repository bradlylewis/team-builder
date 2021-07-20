import React, { useState } from 'react';

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
        // const newObj = {...formValues}
        // newObj[name] = value
        // setFormValues(newObj)
        setFormValues({...formValues, [name]: value})
      }

      const submit = (event) => {
        event.preventDefault()
        const newMember = {
          name: formValues.name.trim(),
          role: formValues.role.trim(),
        }
    
        setMembers([...members, newMember])
        setFormValues(initialFormValues)
      }

    return (
        <div className='container'>
            <h1>Simple Form</h1>
            {members.map((member, idx) => (
                <div key={idx}>
                    {member.name} is a(n) {member.role}
                </div>
            ))}
            <form onSubmit={submit}>
                <label htmlFor='memberName'>Name: </label>
                <input
                    id='memberName'
                    placeholder='name'
                    type='text'
                    name='name'
                    onChange={change}
                />
                <label htmlFor='memberRole'> Role: </label>
                <input
                    id='memberRole'
                    placeholder='role'
                    type='text'
                    name='role'
                    onChange={change}
                />
                <button>submit</button>
            </form>
        </div>
    )
}