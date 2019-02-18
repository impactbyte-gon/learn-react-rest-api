import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Profile = styled.section`
  border: 2px solid black;
  padding: 0 20px;
`

const Avatar = styled.img`
  height: 200px;
`

const request = axios.create({
  baseURL: 'https://api.github.com'
})

class User extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  render() {
    return (
      <div>
        {!this.state.data ? (
          <Profile>
            <pre>Loading...</pre>
          </Profile>
        ) : (
          <Profile>
            <h2>{this.state.data.login}</h2>
            <p>
              <Avatar
                src={this.state.data.avatar_url}
                alt={this.state.data.login}
              />
            </p>
            <p>
              URL:{' '}
              <a href={this.state.data.html_url}>{this.state.data.html_url}</a>
            </p>
            <SyntaxHighlighter style={githubGist}>
              {JSON.stringify(this.state.data, null, 2)}
            </SyntaxHighlighter>
          </Profile>
        )}
      </div>
    )
  }

  componentDidMount() {
    request
      .get('/users/mhaidarh')
      .then(response => {
        this.setState({
          data: response.data
        })
      })
      .catch(error => {
        this.setState({
          data: error
        })
      })
  }
}

export default User
