import React from 'react';
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {SAGA_ACTIONS} from '../../../common/config/actions'
import { STATES } from '../../../common/constants/states';
import { Input} from '../../../common/FormElements/formElements';
function AccountDetails(props) {
    const {handleSubmit,errors,register}=useForm();
    const subnitForm=(values)=>{
        props.dispatch({
            type:SAGA_ACTIONS.LOGIN,
            payload:{lang:'en'}
        });
    }
    
    return (
        <div className="tab-pane fade" id="account-info" role="tabpanel">
            <div className="myaccount-content">
                <h3>Account Details</h3>
                <div className="account-details-form">
                    <form onSubmit={handleSubmit(subnitForm)}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label htmlFor="first-name" className="required">First Name</label>
                                    <Input
                                        register={register({required:{value:true,message:'First name required'}})}
                                        name="first_name"
                                        id="first-name"
                                        placeholder="First Name"
                                        type="text"
                                        error={errors.first_name}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label htmlFor="last-name" className="required">Last Name</label>
                                    <Input
                                        register={register}
                                        type="text" id="last-name" placeholder="Last Name"
                                        name="last_name"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="single-input-item">
                            <label htmlFor="display-name" className="required">Display Name</label>
                            <Input register={register} type="text" id="display-name" placeholder="Display Name" name="display_name" />
                        </div>
                        <div className="single-input-item">
                            <label htmlFor="email" className="required">Email Addres</label>
                            <Input register={register} type="email" id="email" placeholder="Email Address" name="email" />
                        </div>
                        <div className="single-input-item">
                            <label htmlFor="address" className="required">Address</label>
                            <Input register={register} type="text" id="address" placeholder="Address" name="address"/>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label htmlFor="zipcode" className="required">City</label>
                                    <Input
                                        register={register} type="text" name="city" id="city" placeholder="city"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label htmlFor="state" className="required">State</label>
                                    <select
                                        className="nice-select"
                                        ref={register({required:{value:true,message:"state is required"}})} id="state" name="state"
                                    >
                                        <option value="">Select State</option>
                                        {
                                            STATES.INDIA.length?
                                            STATES.INDIA.map((state_in,index)=>{
                                                return(
                                                    <option key={index} value={state_in.name}>
                                                        {state_in.name}
                                                    </option>
                                                )
                                                
                                            })
                                            :
                                            null
                                        }
                                    </select>
                                    {errors.state && <span className="select-error">{errors.state.message}</span>}
                                </div>
                            </div>
                                                    
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label htmlFor="pincode" className="required">Pincode</label>
                                    <Input
                                        register={register} type="text" name="pincode" id="city" placeholder="eg. 700007"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label htmlFor="mobile" className="required">Mobile</label>
                                    <Input
                                        register={register} type="text" name="mobile" id="mobile" placeholder="eg. 7845452541"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="single-input-item">
                            <label htmlFor="landmark">Landmark</label>
                            <Input register={register} type="text" id="landmark" placeholder="opposite of xyz school" name="landmark" />
                        </div>
                        <div className="single-input-item">
                            <button className="btn btn__bg btn__sqr" type="submit">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=state=>{
    return{}
}
export default connect(mapStateToProps)(AccountDetails)