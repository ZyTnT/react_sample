import React, { useState } from 'react';
import useForm from "../useForm";
import validate from '../Validation';
import '../CSS/basic.css'
import { fetchRegister } from '../fake-services/fake-services'

const Form = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(signup, validate);

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  function signup(values) {
    setLoding(true);
        fetchRegister({username : values.name, password: values.password})
        .then(userInfo => {
            delay(1000).then(() => {
                setSuccess(true);
                setLoding(false);
            })
        })
        .catch(function(rej){
            delay(1000).then(() => {
                setServiceError(rej.error);
                setLoding(false);
            })
        })

  }


  const [loding, setLoding] = useState(false);
  const [serviceError, setServiceError] = useState();
  const [success, setSuccess] = useState(false);

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>

            <div className="field">
                <label className="label">UserName <label style={{'color' : 'red'}}>*required</label></label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="text" name="name" onChange={handleChange} value={values.name || ''} required />
                  {errors.name && (
                    <p className="help is-danger">{errors.name}</p>
                  )}
                </div>
              </div>            

              <div className="field">
                <label className="label">Email Address <label style={{'color' : 'red'}}>*required</label></label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="field">
                <label className="label">Password <label style={{'color' : 'red'}}>*required</label></label>
                <div className="control">
                  <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>

              <div className="field">
                <label className="label">Address</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.address && 'is-danger'}`} type="text" name="address" onChange={handleChange} value={values.address || ''} />
                  {errors.address && (
                    <p className="help is-danger">{errors.address}</p>
                  )}
                </div>
              </div>

              <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.phone && 'is-danger'}`} type='tel' name="phone" onChange={handleChange} value={values.phone || ''} />
                  {errors.phone && (
                    <p className="help is-danger">{errors.phone}</p>
                  )}
                </div>
              </div>

              {!loding && (<button type="submit" className="button is-block is-info is-fullwidth" onClick={() => {setServiceError(''); setSuccess(false)}}>Sign Up</button>)}
              {loding && (<i class="gg-spinner"></i>)}
              {serviceError &&  <p className="help is-danger">{serviceError}</p>}
              {success && <p className="success is-danger">You sign up successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;