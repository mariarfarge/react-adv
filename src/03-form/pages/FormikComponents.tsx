import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikComponents = () => {
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
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="span" />

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" />
                            <ErrorMessage name="email" component="span" />

                            <label htmlFor="terms">
                                <Field name="terms" type="checkbox" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span" />

                            <label htmlFor="jobType">Job</label>
                            <Field name="jobType" as="select">
                                <option value="">Select option...</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="qa">QA</option>
                                <option value="pm">Project manager</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />

                            <button type='submit'>Submit</button>
                        </Form>

                    )
                }
            </Formik>

        </div>
    )
}
