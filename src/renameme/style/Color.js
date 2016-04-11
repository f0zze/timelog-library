import React,{ PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeColor } from '../../actions/index';

class Color extends React.Component {
    render() {
        console.log(this.props.color);
        return (
            <div>
                <h1>
                    <span style={{color:this.props.color}}>Hello Redux</span>
                    <button onClick={()=> this.props.changeColor(this.refs.colorInput.value)}>Change color to:</button>
                    <input ref="colorInput" type="text" placeholder="red or #fff ..."/>
                </h1>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Color.propTypes = {
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeColor}, dispatch);
}

function mapStateToProps({color}) {
    return {
        color:color.color
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color);