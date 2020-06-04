import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
// import { setUser } from "../actions";



class Login extends Component {
  static navigationOptions = {
    title: "Login"
  };

  state = {
    isConnected: true,
    user: "",
    email: "",
    password: '',
    is_loading: false
  };

  componentDidMount() {
    const { isConnected, user } = this.state;

    if (!isConnected) {

      console.log("not connected")

    }
  }

  render() {
    const { isConnected, user, email, password } = this.state;
    // const { isConnected, user } = this.props;

    return (
      <View style={styles.wrapper}>
        {
          !isConnected &&
          <ActivityIndicator
            size="small"
            color="#0064e1"
            style={styles.loader}
          />
        }

        {
          isConnected &&
          <View style={styles.container}>

            <View style={styles.main}>
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Anmelden</Text>
                <TextInput
                  style={styles.textInputLogin}
                  onChangeText={email => this.setState({ email })}
                  value={email}
                  placeholder="Email-Adresse"
                  autoCapitalize = "none"
                />
                <TextInput
                  style={styles.textInputLogin}
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                  placeholder="Passwort mit mind. 6 Zeichen"
                  autoCapitalize = "none"
                />
              </View>

              {!this.state.is_loading && (
                <TouchableOpacity onPress={console.log("touched!")}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                  </View>
                </TouchableOpacity>
              )}

              {this.state.is_loading && (
                <Text style={styles.loadingText}>Loading...</Text>
              )}
            </View>
          </View>
        }

      </View>
    );
  }
}

// const mapStateToProps = ({ network, chat }) => {
//   const { isConnected } = network;
//   const { user, friend } = chat;
//   return {
//     isConnected,
//     user,
//     friend
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     setUser: user => {
//       dispatch(setUser(user));
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login);

export default Login;

const styles = {
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFF"
  },
  loader: {
    paddingTop: 20
  },
  fieldContainer: {
    marginTop: 20
  },
  label: {
    fontSize: 16
  },
  textInputLogin: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#eaeaea",
    margin: 15, 
    padding: 5,
  },
  button: {
    alignSelf: "center",
    marginTop: 10
  },
  buttonText: {
    fontSize: 18,
    color: "#05a5d1"
  },
  loadingText: {
    alignSelf: "center"
  }
};
