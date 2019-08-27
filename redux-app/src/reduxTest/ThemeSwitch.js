import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  connect  from '../reduxTest/connent'

class ThemeSwitch extends Component {

    handleSwitchColor(color){
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
          }
    
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
                <button
                    onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      themeColor: state.themeColor
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      onSwitchColor: (color) => {
        dispatch({ type: 'CHANGE_COLOR', themeColor: color })
      }
    }
  }
  ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch;