import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {
    async componentDidMount(){
        // const resp = await axios.get('/api/test');
        // console.log('Test Response: ', resp);

        // const user = await axios.get('/api/user');
        // console.log('User Data: ', user);

        const user = {
            email: 'test@mail.com',
            password: 'whatthewhat'
        }

        const resp = await axios.post('/api/login', user);
        console.log('Login Resp: ', resp);
    }

    render() {
        return <h1>API Testing</h1>;
    }
}

export default Test;