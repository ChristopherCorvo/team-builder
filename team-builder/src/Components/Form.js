import React from 'react';
import App from '../App';

function Form (props) {

    const { values, update, submit } = props


    const onChange = evt => {
        const {name, value } = evt.target
        console.log(name, value);

        update(name, value)
    };

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    return(
        <form className='form-container' onSubmit={onSubmit} >
            <label> Name:
                <input 
                    type= 'text'
                    name= 'name'
                    onChange={onChange}
                    value= {values.name}
                    placeholder="type name"
                />
            </label>   

            <label> Email:
                <input 
                    type= 'email'
                    name= 'email'
                    onChange = {onChange}
                    value= {values.email}
                    placeholder = 'John.Smith@apple.com'
                />
            </label>   

            <label> Role:
                <select name='role' values={values.role} onChange={onChange}> 
                    <option value=''> -- Select a Role -- </option>
                    <option value='backend engineer'>backend engineer</option>
                    <option value='frontend engineer'>frontend engineer</option>
                    <option value='designer'>designer</option>
                </select>
            </label>

            <div className = 'submit'>
                <button disabled={!values.name || !values.email || !values.role ? true: false}>submit</button>  
            </div>

        </form>
    )

}

export default Form;