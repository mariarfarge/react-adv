import { ChangeEvent, useState } from 'react';
import '../styles/styles.css';

// interface Props {
//     initData: {
//         name: string,
//         email: string,
//         password1: string,
//         password2: string,
//     }
// }

export const useForm = <T>( initData: T ) => {

    const [formData, setFormData] = useState( initData );

    const onChange = ( event:ChangeEvent<HTMLInputElement> ) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    const resetForm = () => {
        setFormData({ ...initData });
    }
    
    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return { ...formData, formData, onChange, resetForm, isValidEmail }
}
