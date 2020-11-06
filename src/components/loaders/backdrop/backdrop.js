import React from 'react';
import {connect} from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import "../loader.css";
class Backdrop extends React.Component {
    render() {
        if(this.props.visible)
        {
            return (
                <div className="backdrop-overlay">
                    <div className="backdrop">
                        <ClipLoader
                            size={60}
                            color="#c2c0bf"
                        />
                    </div>
                </div>
            )
        }
        else
        return null;

    }
}

const mapStateToProps=state=>{
    return{
        visible:state.loader.backdropVisible
    }
}
export default connect(mapStateToProps)(Backdrop);
