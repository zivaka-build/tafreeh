import React from 'react';
import { Input } from '../../../common/FormElements/formElements';
import {useForm} from 'react-hook-form';
export default function ChangePassword(props) {
    const {register,errors,handleSubmit}=useForm();
    const changePassword=values=>{
        console.log("values",values);
    }
    return (
        <div className="tab-pane fade" id="change-password" role="tabpanel">
        <div className="myaccount-content">
                <h3>Change Password</h3>
        <div className="account-details-form">
            <form onSubmit={handleSubmit(changePassword)}>
                <fieldset>
                    
                    <div className="single-input-item">
                        <label htmlFor="current-pwd" className="required">
                            Current Password
                        </label>
                        <Input 
                        register={register(
                            {required:{value:true,message:"You need to enter your current password"}}
                        )} 
                        type="password"
                        name="current_password" 
                        id="current-pwd" 
                        placeholder="Current Password"
                        error={errors.current_password}
                        />
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-input-item">
                                <label htmlFor="new-pwd" className="required">
                                    New Password
                                </label>
                                <Input register={register({
                                    required:{value:true,message:'This field is required'}
                                })} 
                                type="password" 
                                name="new_password" 
                                id="new_password" 
                                placeholder="New Password"
                                error={errors.new_password}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-input-item">
                                <label htmlFor="confirm-pwd" className="required">
                                    Confirm Password
                                </label>
                                <Input
                                register={register({
                                    required:{value:true,message:'This field is required'}
                                })} 
                                type="password" 
                                id="confirm_password"
                                placeholder="Confirm Password" 
                                name="confirm_password"
                                error={errors.confirm_password}
                                />
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="single-input-item">
                    <button className="btn btn__bg btn__sqr" type="submit">Change Password</button>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}