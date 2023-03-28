import React, { Component } from "react";
import './App.css';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Login",
      email: "",
      password: "",
      message: ""
    }
    this.validation = this.validation.bind(this);
    this.changeCredentials = this.changeCredentials.bind(this);
  }

  changeCredentials(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  validation() {
    var validCredentials = "Acessado com sucesso!";
    var invalidCredentials = "Usuário ou senha incorretos!";
    if(this.state.email === "eduardo.lino@pucpr.br" && this.state.password === "123456") {
      this.setState({message:validCredentials});
    } else {
      this.setState({message:invalidCredentials});
    }
  }

  render() {
    return(
      <div>
        <h1 className="title"> {this.state.title} </h1>
        <form className="loginForm">
          <input type="email" name="email" placeholder="E-mail" value={this.state.email} onChange={this.changeCredentials} />
          <input type="password" name="password" placeholder="Senha" value={this.state.password} onChange={this.changeCredentials} />
        </form>
        <button className="loginButton" onClick={this.validation}>Acessar</button>
        <label name="label">{this.state.message}</label>
      </div>
    )
  } 

}

export default Login;