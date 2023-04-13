import { ChangeEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
    const { formData, onChange, name, email, password1, password2, resetForm, isValidEmail } = useForm(
        {
            name:'',
            email:'',
            password1:'',
            password2:'',
        }
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log( formData );
    }

  return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={ (ev) => onSubmit(ev) }>
            <input
                type="text"
                placeholder="Name"
                name='name'
                value={ name }
                onChange={ onChange }
                className= {`${!!!name.trim() &&  "has-error" }`}
            />
            { !!!name.trim() && <span>Este campo es necesario</span> }

            <input
                type="email"
                placeholder="Email"
                name='email'
                value={ email }
                onChange={ onChange }
                className = { `${ !isValidEmail(email) && "has-error" }`}
            />
            { !isValidEmail(email) && <span>Este mail no es valido</span> }

            <input
                type="password"
                placeholder="Password"
                name='password1'
                value={ password1 }
                onChange={ onChange }
            />
            { !!!password1.trim() && <span>Este campo es necesario</span> }
            { password1.trim().length < 6 && !!password1.trim() && <span>La contraseña no es suficientemente larga. Usa un mínimo de 6 carácteres.</span> }

            <input
                type="password"
                placeholder="Repeat password"
                name='password2'
                value={ password2 }
                onChange={ onChange }
            />
            { !!!password2.trim() && <span>Este campo es necesario</span> }
            { !!password2.trim() && !!!(password1 === password2) &&  <span>Las contraseñas no coinciden.</span> }

            <button type='submit'>
                Create
            </button>
            <button type='button' onClick={ resetForm }>
                Reset
            </button>
        </form>
    </div>
  )
}
