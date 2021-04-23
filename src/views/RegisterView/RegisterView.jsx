import { Component } from 'react';
import s from './RegisterView.module.css';
import { connect } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handlechange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <form
        className={s.register_form}
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handlechange}
          ></input>
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handlechange}
          ></input>
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handlechange}
          ></input>
        </label>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
