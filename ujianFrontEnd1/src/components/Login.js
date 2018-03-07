import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Login extends Component {

    render = () =>
    <div className="form">
        <div className="item">
            <label htmlFor="login">Nama</label>
        </div>
        <div className="item">
            <input type="text" ref="login" id="login" className="form-control"/>
        </div>
        <div className="item">
            <div className="btn btn-primary" onClick={() => {
                this.props.changeActive(1);
                this.props.changeName(this.refs.login.value);
            }}>Submit</div>
        </div>
    </div>
}
export default Login;
