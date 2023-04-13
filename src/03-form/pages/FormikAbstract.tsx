import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'
import { InputField, DropdownInput } from '../components';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikAbstract = () => {
    return (
        <div>
            <h1>
                Formik Components
            </h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: 'false',
                    jobType: ''
                }}
                onSubmit={ ( values ) => {
                    console.log( values )
                } }
                validationSchema = { Yup.object({
                        firstName: Yup.string()
                                        .max(15, 'Maximum of 15 characters')
                                        .required('Required'),
                        lastName: Yup.string()
                                        .max(15, 'Maximum of 15 characters')
                                        .required('Required'),
                        email: Yup.string()
                                        .email('Has to be an email')
                                        .required('Required'),
                        terms: Yup.boolean()
                                        .oneOf([true], 'Terms and conditions have to be accepted for submitting'),
                        jobType: Yup.string()
                                        .required('Required')
                                        .notOneOf(['pm'], 'This role is not permited')
                    })
                }
            >
                { (formik) => (
                        <Form>
                            <InputField name="firstName" label="First Name"></InputField>

                            <InputField name="lastName" label="Last Name"></InputField>

                            <InputField name="email" label="Email" type="email"></InputField>

                            <InputField name="terms" label="Terms and conditions" type='checkbox'></InputField>
                          
                            <DropdownInput name="jobType" label="Job">
                                <option value="">Select option...</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="qa">QA</option>
                                <option value="pm">Project manager</option>
                            </DropdownInput>

                            <button type='submit'>Submit</button>
                        </Form> 

                    )
                }
            </Formik>

        </div>
    )
}
