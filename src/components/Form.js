import React, { Component } from 'react';


class Form extends Component {

    state = {
        name: '',
        address: '',
        password: '',
    }
    handleSubmit = (e) => {
        e.preventDefault();//puts in in the browser
        const data = JSON.stringify({...this.state})
        fetch('http://localhost:4000', { //(url you are fetching from)
            method: 'POST',
            body: data,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
  render() {
      console.log(this.state)
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}> 

          <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input type="test" className="form-control" id="exampleInputName" placeholder="Name"
                onChange={e => this.setState({name: e.target.value})}/>
        </div>
         <div className="form-group">
             <label htmlFor="exampleInputAddress">Address</label>
             <input type="text" className="form-control" id="exampleInputAddress" placeholder="Address"
                 onChange={e => this.setState({address: e.target.value})}/>
         </div>
          <div className="form-group">
           <label htmlFor="exampleInputPassword">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password"
                  onChange={e => this.setState({password: e.target.value})}/>
         </div>

  <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <button type="submit" className="btn btn-primary">List All</button>
      </div>
    );
  }
}

export default Form;
