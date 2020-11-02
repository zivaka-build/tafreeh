import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../../common/FormElements/formElements';
export default function ReviewForm() {
    const {register,errors,handleSubmit } = useForm();
    return (
        <div class="tab-pane fade" id="tab_four">
            <form className="review-form" onSubmit={handleSubmit((values)=>{console.log("PElam",values);})}>
                <div className="form-group row">
                    <div className="col">
                        <label className="col-form-label">
                            <span className="text-danger">*</span>
                            Your Name
                        </label>
                        <Input 
                            register={register({required:{value:true,message:'This field is required'}})} 
                            name="name" 
                            type="text" 
                            error={errors.name}
                            className="form-control" 
                            required 
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <label className="col-form-label">
                            <span className="text-danger">*</span>
                            Your Email
                        </label>
                        <Input 
                            register={register({required:{value:true,message:'This field is required'}})}
                            type="email" 
                            error={errors.email}
                            className="form-control" 
                            required 
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <label className="col-form-label">
                            <span className="text-danger">*</span>
                            Your Review
                        </label>
                        <textarea className="form-control" required></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <label className="col-form-label">
                            <span className="text-danger">*</span>
                            Rating
                        </label>
                    &nbsp;&nbsp;&nbsp; Bad&nbsp;
                    <Input
                        type="radio"
                        value="1"
                        name="rating"
                        register={register()}
                    />
                    &nbsp;
                    <Input
                        type="radio"
                        value="2"
                        name="rating"
                        register={register()}
                    />
                    &nbsp;
                    <Input
                        type="radio"
                        value="3"
                        name="rating"
                        register={register()}
                    />
                    &nbsp;
                    <Input
                        type="radio"
                        value="4"
                        name="rating"
                        register={register()}
                    />
                    &nbsp;
                    <Input
                        type="radio"
                        value="5"
                        name="rating"
                        register={register()}
                        checked
                    />
                    &nbsp;Good
                </div>
                </div>
                <div className="buttons">
                    <button className="btn btn__btn-gray" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}