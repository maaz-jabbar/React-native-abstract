import React,{Component} from 'react';
import { Image, View ,Text } from 'react-native'
import { connect } from 'react-redux';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
     
        };
    }
render(){
    return(
        <View><Text>Login</Text></View>
    )
}
}

function mapStateToProps() {
    return ({})
}

function mapDispatchToProps(dispatch) {
    return ({
     
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)