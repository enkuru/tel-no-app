import React, {Component} from 'react';
import '../App.css';
import Contacts from './Contacts';

class App extends Component {

  constructor() {
    super();
    this.addContact = this.addContact.bind(this);
  }

  componentWillMount() {//render işleminden hemen öncesi

  }

  componentDidMount() {//render işleminin hemen sonrası

  }

  state = {
    contacts: [{name: "name 1", phone: "121"}, {name: "name 2", phone: "12312"}, {name: "name 3", phone: "3123"}]
  };

  addContact(contact) {
    const {contacts} = this.state;
    contacts.push(contact);
    this.setState({contacts});
  }

  render() {
    return (
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
