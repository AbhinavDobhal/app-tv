import React  from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from "axios";

export default function LoginForm() {

  
    return (
      <Formik
      initialValues={{
          email: '',
          password: ''
      }}
      validationSchema={Yup.object().shape({
          email: Yup.string().required('Email is required'),
          password: Yup.string().required('Password is required')
      })}
      onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
          // authenticationService.login(username, password)
          //     .then(
          //         user => {
          //             const { from } = this.props.location.state || { from: { pathname: "/" } };
          //             this.props.history.push(from);
          //         },
          //         error => {
          //             setSubmitting(false);
          //             setStatus(error);
          //         }
          //     );

      }}
      render={({ errors,touched, isSubmitting }) => (
      <Form className="mt-4 mt-lg-5 " >
       
        <div className="form-group">
        <label className="m-0">Email <span className="required">*</span></label>
        <Field name="email" type="text" placeholder="Enter your email address" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
        <ErrorMessage name="email" component="div" className="invalid-feedback" />
        </div>
        <div className="form-group">
        <label className="m-0">Password <span className="required">*</span></label>
          <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
          <ErrorMessage name="password" component="div" className="invalid-feedback" />
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary btn-submit border-0 w-100 mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting &&
              <span>
                <i className="fas fa-spinner fa-pulse" />
                Loading...
              </span>
            }
            {!isSubmitting && <span>Submit</span>}
          </button>
        </div>
      </Form>
       )} ></Formik>
    );

  }



