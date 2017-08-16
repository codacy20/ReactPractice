import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Jumbotron, Button,Grid,form,FormGroup,InputGroup,FormControl } from 'react-bootstrap';


class App extends Component {
  render() {

      const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
      const wellStyles2 = {color:rgb(0,0,255)};
      const divStyle = {
          backgroundImage: 'url(' + "https://burst.shopifycdn.com/photos/grand-central-black-white_925x@2x.jpg" + ')',
          height:1200
      };

      return (
        <div>
            <Jumbotron style={divStyle}>
                <Grid>
                    <h1 style={wellStyles2}>Welcome to React</h1>
                    <form style={wellStyles} className="well">
                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon>@</InputGroup.Addon>
                                <FormControl type="email" />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Addon>Pass</InputGroup.Addon>
                                <FormControl type="password" />
                            </InputGroup>
                        </FormGroup>
                        <div style={wellStyles}>
                            <Button bsStyle="primary" bsSize="sm" block>Login</Button>
                            <Button bsSize="sm" block>Password</Button>
                        </div>
                    </form>
                </Grid>
            </Jumbotron>
        </div>
    );
  }
}

export default App;
