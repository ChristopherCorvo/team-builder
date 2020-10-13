import React, { useState } from 'react';
import './App.css';

// importing components 
import Form from './Components/Form';
import TeamCards from './Components/TeamCards';



const initialFormValue = {
    // text inputs
    name: '',
    email: '',
    // dropdown selector
    role: '',
}


function App() {

  const [teamMembers, setTeamMembers] = useState([]) // this is the current empty list 
  console.log(teamMembers)

  const [formValues, setFormValues] = useState(initialFormValue) // this value will be pushed into teamMembers on every form submit
  console.log(formValues)
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }
  
 const submitForm = () => {
    const teamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    console.log(teamMember)

    setTeamMembers([...teamMembers, teamMember])

    // if(!teamMember.name || !teamMember.email || !teamMember.role) return

    setFormValues(initialFormValue)
  
 }
  
  return (
    <div>
      
      <Form 
      values = {formValues}
      update = {updateForm}
      submit = {submitForm}
      />
      <TeamCards teamMembers={teamMembers}/>
     
    </div>
  );
}

export default App;
