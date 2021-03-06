import React, { Component } from 'react'
import styled from 'styled-components'
import Login from './Login'
import AddAdmin from './AddAdmin'
import { connect } from 'react-redux'
import { clearUser } from '../ducks/reducer'
import axios from 'axios'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginHidden: false,
      showAdd: false
    }
  }

  showLogin = () => {
    this.setState({ loginHidden: !this.state.loginHidden })
  }
  showAddAdmin = () => {
    this.setState({ showAdd: !this.state.showAdd })
  }
  adminLogout = () => {
    axios
      .delete('/api/login')
      .then(res => {
        this.props.clearUser()
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
   
    return (
      <>
        <ContactBox>
          Contact
          {!this.props.username ? (
            <button onClick={() => this.showLogin()}>Admin Login</button>
          ) : (
            <div className='button-cont'>
              <button onClick={() => this.showAddAdmin()}>Add Admin</button>
              <button onClick={() => this.adminLogout()}>Logout</button>
            </div>
          )}
        </ContactBox>
        {this.state.loginHidden && <Login showLogin={this.showLogin} />}
        {this.state.showAdd && <AddAdmin showAddAdmin={this.showAddAdmin} />}
      </>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username
  }
}
export default connect(mapStateToProps, { clearUser })(Contact)

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  width: 600px;
  padding: 30px;
  background: white;
  button {
    box-shadow: inset 0px 1px 0px 0px #caefab;
    background: linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);
    background-color: #77d42a;
    border-radius: 6px;
    border: 1px solid #268a16;
    display: inline-block;
    cursor: pointer;
    color: black;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 0;
    width: 120px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #aade7c;
  }
  button:hover {
    background: linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);
    background-color: #5cb811;
  }
  button:active {
    position: relative;
    top: 1px;
  }
`
