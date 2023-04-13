import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    [x:string]: any;
}

export const InputField = ({ label, ...props }: Props) => {
const [ field, meta ] = useField(props);
  return (
    <>
    <label htmlFor={props.id ?? props.name}>{label}</label>
    <input className='text-input' { ...field } { ...props }></input>
    <ErrorMessage name={props.name} component="span" />

    {/* { meta.touched && meta.error && (
        <span className='error'>{meta.error}</span>
    )} */}
    {/* <Field name="firstName" type="text" />
    <ErrorMessage name="firstName" component="span" /><ErrorMessage name="firstName" component="span" /> */}
    </>
  )
}
