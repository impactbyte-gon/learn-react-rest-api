import React from 'react'
import axios from 'axios'

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
          <pre>Loading...</pre>
        ) : (
          <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        )}
      </div>
    )
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/mhaidarh')
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
