import * as React from 'react';
import {Button, View, Text, StyleSheet, Alert} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import call from 'react-native-phone-call';
import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
class HomeActivity extends React.Component {
  static navigationOptions = {
    title: 'ONE CLICK FIND LOCATION',
    headerStyle: {
      backgroundColor: '#00000f',
    },
    headerTintColor: '#2bf4ff',
  };
  constructor(props) {
    super(props);
    navigate = props.navigation,
      (this.state = {
		    latitude: 13.08,
        longitude: 80.18,
    });
   }
  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });  
      },
      error => Alert.alert(error.message),
      {timeout: 2000000, maximumAge: 1000 }
    );
    
  };
  
  render() {
    return (
	    <View style={{alignItems:"center"}}>
        <MapView
          style={{ flex: 1,position:"absolute", top:0,bottom:0,left:0,right:0,height:620}}
          provider={PROVIDER_GOOGLE}
           showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          showsTraffic={true}
          moveOnMarkerPress={true}
          initialRegion={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421}}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color:'#2bf4ff'
  }
});
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'ONE CLICK',
    headerStyle: {
      backgroundColor: '#00000f',
    },
    headerTintColor: '#2bf4ff',
  };
  render() {
    return (
      
      <View style={{  backgroundColor: '#000000',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'#2bf4ff',fontSize:30,}}>Home Screen</Text>
        <Text></Text>
        <Text></Text>
         <Button
          title="Go to find location"
          onPress={() => this.props.navigation.navigate('Locations')}
        />
        <Text></Text>
        <Text></Text>
        <Button
          title="Go to PONDICHERRY"
          onPress={() => this.props.navigation.navigate('Pondicity')}
        />
        <Text></Text>
        <Text></Text>
        <Button
          title="Go to CHENNAI"
          onPress={() => this.props.navigation.navigate('Chncity')}
        />
        <Text></Text>
        <Text></Text>
         <Button
          title="Go to CUDDALORE"
          onPress={() => this.props.navigation.navigate('Cuddacity')}
        />
        <Text></Text>
        <Text></Text>
      </View>
    );
  }
}
class ChennaiCity extends React.Component{
  static navigationOptions = {
    title: 'CHENNAI CITY',
    headerStyle: {
      backgroundColor: '#00000f',
    },
    headerTintColor: '#2bf4ff',
  }; 
  render(){
    return(
      <View style={{  backgroundColor: '#000000',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'#2bf4ff',fontSize:30,}}>CHENNAI CITY</Text>
        <Text></Text>
        <Text></Text>
        <Button
          title="Go to Mogappair"
          onPress={() => this.props.navigation.navigate('Moga')}
        />
        <Text></Text>
        <Text></Text>
         <Button
          title="Go to RedHills"
          onPress={() => this.props.navigation.navigate('Red')}
        />
        <Text></Text>
        <Text></Text>
         <Button
          title="Go to Surapet"
          onPress={() => this.props.navigation.navigate('Sura')}
        />
      </View>
    );
  }
}
class Pondicity extends React.Component{
  static navigationOptions = {
    title: 'PONDI CITY',
    headerStyle: {
      backgroundColor: '#00000f',
    },
    headerTintColor: '#2bf4ff',
  }; 
  render(){
    return(
      <View style={{  backgroundColor: '#000000',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'#2bf4ff',fontSize:30,}}>PONDI CITY</Text>
        <Text></Text>
        <Text></Text>
        <Button
          title="Go to White Town"
          onPress={() => this.props.navigation.navigate('White')}
        />
        <Text></Text>
        <Text></Text>
        <Button
          title="Go to Laws Pet"
          onPress={() => this.props.navigation.navigate('Laws')}
        />
        <Text></Text>
        <Text></Text>
         <Button
          title="Go to Ilango Nagar"
          onPress={() => this.props.navigation.navigate('Ilango')}
        />
      </View>

    );
  }
}
class Cuddacity extends React.Component{
  static navigationOptions = {
    title: 'CUDDA CITY',
    headerStyle: {
      backgroundColor: '#00000f',
    },
    headerTintColor: '#2bf4ff',
  }; 
  render(){
    return(
      <View style={{  backgroundColor: '#000000',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'#2bf4ff',fontSize:30,}}>CUDDALORE CITY</Text>
        <Text></Text>
        <Text></Text>
        <Button
          title="Go to All pettai"
          onPress={() => this.props.navigation.navigate('Allpettai')}
        />
        <Text></Text>
        <Text></Text>
        <Button
          title="Go to Cuddalore Port"
          onPress={() => this.props.navigation.navigate('Cuddaport')}
        />
        <Text></Text>
        <Text></Text>
         <Button
          title="Go to Cuddalore OldTown"
          onPress={() => this.props.navigation.navigate('Cuddaold')}
        />
      </View>
    );
  }
}
class Mogappair extends React.Component {
  static navigationOptions = {
    title: 'Mogappair',
    headerStyle: {
      backgroundColor: '#00000f',
      
    },
    headerTintColor: '#2bf4ff'
    
  };
    call = () => {
    const args = {
      number: '0000000000',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call1 = () => {
    const args = {
      number: '9940291444',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call2 = () => {
    const args = {
      number: '8825623541',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call3 = () => {
    const args = {
      number: '9840941444',
      prompt: false,
    };

    call(args).catch(console.error);
  };
  render() {
    return (
      <View style={{ backgroundColor: '#000000', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text></Text>
        <Text style={{color:'#2bf4ff',fontSize:20,}}>
          MOGAPPAIR AREA EMERGENCY NUMBERS
        </Text>
        <Text></Text>
        <Text></Text>
        <Button title="Make a Call to Police" onPress={this.call1} />
        <Text></Text>
        <Button title="Make a Call to Ambulance" onPress={this.call2} />
        <Text></Text>
        <Button title="Make a Call to Hospital" onPress={this.call3} />
        <Text></Text>
        <Button title="Make a Call to sos" onPress={this.call} />
        <Text></Text>
        <Button title="Make a Call" onPress={this.call} />
        <Text></Text>
        <Button title="Make a Call" onPress={this.call} />
        <Text></Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text></Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
class RedHills extends React.Component {
  static navigationOptions = {
    title: 'REDHILLS ',
    headerStyle: {
      backgroundColor: '#00000f',
    },
    headerTintColor: '#2bf4ff'
  };
  
    call = () => {
    const args = {
      number: '0000000000',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call1 = () => {
    const args = {
      number: '9940291444',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call2 = () => {
    const args = {
      number: '8825623541',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call3 = () => {
    const args = {
      number: '9840941444',
      prompt: false,
    };

    call(args).catch(console.error);
  };
  render() {
    return (
      <View style={{ backgroundColor: '#000000',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text></Text>
        <Text style={{color:'#2bf4ff',fontSize:20,}}>
          REDHILLS EMERGENCY NUMBERS
        </Text>
        <Text></Text>
        <Text></Text>
        <Button title="Make a Call to Hospital" onPress={this.call1} />
        <Text></Text>
        <Button title="Make a Call to Ambulance" onPress={this.call2} />
        <Text></Text>
        <Button title="Make a Call to Police" onPress={this.call3} />
        <Text></Text>
        <Button title="Make a Call to sos" onPress={this.call} />
        <Text></Text>
        <Button title="Make a Call" onPress={this.call} />
        <Text></Text>
        <Button title="Make a Call" onPress={this.call} />
        <Text></Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text></Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
class Surapet extends React.Component {
  static navigationOptions = {
    title: 'SURAPET',
    headerStyle: {
      backgroundColor: '#00000f',
    },
    headerTintColor: '#2bf4ff'
  };
  call = () => {
  const args = {
    number: '0000000000',
    prompt: false,
  };
  call(args).catch(console.error);
};
call1 = () => {
  const args = {
    number: '9940291444',
    prompt: false,
  };
  call(args).catch(console.error);
};
call2 = () => {
  const args = {
    number: '8825623541',
    prompt: false,
  };
  call(args).catch(console.error);
};
call3 = () => {
  const args = {
    number: '9840941444',
    prompt: false,
  };

  call(args).catch(console.error);
};
render() {
  return (
    <View style={{backgroundColor: '#000000', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text></Text>
      <Text style={{color:'#2bf4ff',fontSize:20,}}>
        SURAPET EMERGENCY NUMBERS
      </Text>
      <Text></Text>
      <Text></Text>
      <Button title="Make a Call to Police" onPress={this.call1} />
      <Text></Text>
      <Button title="Make a Call to Hospital" onPress={this.call2} />
      <Text></Text>
      <Button title="Make a Call to Ambulance" onPress={this.call3} />
      <Text></Text>
      <Button title="Make a Call to sos" onPress={this.call} />
      <Text></Text>
      <Button title="Make a Call" onPress={this.call} />
      <Text></Text>
      <Button title="Make a Call" onPress={this.call} />
      <Text></Text>
      <Button
        title="Go to Home"
        onPress={() => this.props.navigation.navigate('Home')}
      />
      <Text></Text>
      <Button
        title="Go back"
        onPress={() => this.props.navigation.goBack()}
      />
    </View>
  );
}
}
class WhiteTown extends React.Component {
  static navigationOptions = {
    title: 'WHITE TOWN',
    headerStyle: {
      backgroundColor: '#00000f',
      
    },
    headerTintColor: '#2bf4ff'
    
  };
    call = () => {
    const args = {
      number: '0000000000',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call1 = () => {
    const args = {
      number: '9940291444',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call2 = () => {
    const args = {
      number: '8825623541',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call3 = () => {
    const args = {
      number: '9840941444',
      prompt: false,
    };

    call(args).catch(console.error);
  };
  render() {
    return (
      <View style={{ backgroundColor: '#000000', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text></Text>
        <Text style={{color:'#2bf4ff',fontSize:20,}}>
          WHITE TOWN EMERGENCY NUMBERS
        </Text>
        <Text></Text>
        <Text></Text>
        <Button title="Make a Call to Police" onPress={this.call1} />
        <Text></Text>
        <Button title="Make a Call to Ambulance" onPress={this.call2} />
        <Text></Text>
        <Button title="Make a Call to Hospital" onPress={this.call3} />
        <Text></Text>
        <Button title="Make a Call to sos" onPress={this.call} />
        <Text></Text>
        <Button title="Make a Call" onPress={this.call} />
        <Text></Text>
        <Button title="Make a Call" onPress={this.call} />
        <Text></Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text></Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
class LAWSPET extends React.Component {
  static navigationOptions = {
    title: 'LAWSPET',
    headerStyle: {
      backgroundColor: '#00000f',
    },
    headerTintColor: '#2bf4ff'
  };
  
    call = () => {
    const args = {
      number: '0000000000',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call1 = () => {
    const args = {
      number: '9940291444',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call2 = () => {
    const args = {
      number: '8825623541',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call3 = () => {
    const args = {
      number: '9840941444',
      prompt: false,
    };

    call(args).catch(console.error);
  };
  render() {
    return (
      <View style={{ backgroundColor: '#000000',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text></Text>
        <Text style={{color:'#2bf4ff',fontSize:20,}}>
          LAWSPET EMERGENCY NUMBERS
        </Text>
        <Text></Text>
        <Text></Text>
        <Button title="Make a Call to Hospital" onPress={this.call1} />
        <Text></Text>
        <Button title="Make a Call to Ambulance" onPress={this.call2} />
        <Text></Text>
        <Button title="Make a Call to Police" onPress={this.call3} />
        <Text></Text>
        <Button title="Make a Call to sos" onPress={this.call} />
        <Text></Text>
        <Button title="Make a Call" onPress={this.call} />
        <Text></Text>
        <Button title="Make a Call" onPress={this.call} />
        <Text></Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text></Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
class IlangoNagar extends React.Component {
  static navigationOptions = {
    title: 'ILANGONAGAR',
    headerStyle: {
      backgroundColor: '#00000f',
    },
    headerTintColor: '#2bf4ff'
  };
  call = () => {
  const args = {
    number: '0000000000',
    prompt: false,
  };
  call(args).catch(console.error);
};
call1 = () => {
  const args = {
    number: '9940291444',
    prompt: false,
  };
  call(args).catch(console.error);
};
call2 = () => {
  const args = {
    number: '8825623541',
    prompt: false,
  };
  call(args).catch(console.error);
};
call3 = () => {
  const args = {
    number: '9840941444',
    prompt: false,
  };

  call(args).catch(console.error);
};
render() {
  return (
    <View style={{backgroundColor: '#000000', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text></Text>
      <Text style={{color:'#2bf4ff',fontSize:20,}}>
        ILANGO NAGAR EMERGENCY NUMBERS
      </Text>
      <Text></Text>
      <Text></Text>
      <Button title="Make a Call to Police" onPress={this.call1} />
      <Text></Text>
      <Button title="Make a Call to Hospital" onPress={this.call2} />
      <Text></Text>
      <Button title="Make a Call to Ambulance" onPress={this.call3} />
      <Text></Text>
      <Button title="Make a Call to sos" onPress={this.call} />
      <Text></Text>
      <Button title="Make a Call" onPress={this.call} />
      <Text></Text>
      <Button title="Make a Call" onPress={this.call} />
      <Text></Text>
      <Button
        title="Go to Home"
        onPress={() => this.props.navigation.navigate('Home')}
      />
      <Text></Text>
      <Button
        title="Go back"
        onPress={() => this.props.navigation.goBack()}
      />
    </View>
  );
}
}
class AllPettai extends React.Component {
  static navigationOptions = {
    title: 'ALL PETTAI',
    headerStyle: {
      backgroundColor: '#00000f',
      
    },
    headerTintColor: '#2bf4ff'
    
  };
    call = () => {
    const args = {
      number: '0000000000',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call1 = () => {
    const args = {
      number: '9940291444',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call2 = () => {
    const args = {
      number: '8825623541',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call3 = () => {
    const args = {
      number: '9840941444',
      prompt: false,
    };

    call(args).catch(console.error);
  };
  render() {
    return (
      <View style={{ backgroundColor: '#000000', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text></Text>
        <Text style={{color:'#2bf4ff',fontSize:20,}}>
          ALL PETTAI EMERGENCY NUMBERS
        </Text>
        <Text></Text>
        <Text></Text>
        <Button title="Make a Call to Police" onPress={this.call1} />
        <Text></Text>
        <Button title="Make a Call to Ambulance" onPress={this.call2} />
        <Text></Text>
        <Button title="Make a Call to Hospital" onPress={this.call3} />
        <Text></Text>
        <Button title="Make a Call to sos" onPress={this.call} />
        <Text></Text>
        <Button title="Make a Call" onPress={this.call} />
        <Text></Text>
        <Button title="Make a Call" onPress={this.call} />
        <Text></Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text></Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
class CuddalorePort extends React.Component {
  static navigationOptions = {
    title: 'CUDDALORE PORT',
    headerStyle: {
      backgroundColor: '#00000f',
    },
    headerTintColor: '#2bf4ff'
  };
  
    call = () => {
    const args = {
      number: '0000000000',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call1 = () => {
    const args = {
      number: '9940291444',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call2 = () => {
    const args = {
      number: '8825623541',
      prompt: false,
    };
    call(args).catch(console.error);
  };
  call3 = () => {
    const args = {
      number: '9840941444',
      prompt: false,
    };

    call(args).catch(console.error);
  };
  render() {
    return (
      <View style={{ backgroundColor: '#000000',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text></Text>
        <Text style={{color:'#2bf4ff',fontSize:20,}}>
          CUDDALORE PORT EMERGENCY NUMBERS
        </Text>
        <Text></Text>
        <Text></Text>
        <Button title="Make a Call to Hospital" onPress={this.call1} />
        <Text></Text>
        <Button title="Make a Call to Ambulance" onPress={this.call2} />
        <Text></Text>
        <Button title="Make a Call to Police" onPress={this.call3} />
        <Text></Text>
        <Button title="Make a Call to sos" onPress={this.call} />
        <Text></Text>
        <Button title="Make a Call" onPress={this.call} />
        <Text></Text>
        <Button title="Make a Call" onPress={this.call} />
        <Text></Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text></Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
class CuddaOldTown extends React.Component {
  static navigationOptions = {
    title: 'CUDDALORE OLD TOWN',
    headerStyle: {
      backgroundColor: '#00000f',
    },
    headerTintColor: '#2bf4ff'
  };
  call = () => {
  const args = {
    number: '0000000000',
    prompt: false,
  };
  call(args).catch(console.error);
};
call1 = () => {
  const args = {
    number: '9940291444',
    prompt: false,
  };
  call(args).catch(console.error);
};
call2 = () => {
  const args = {
    number: '8825623541',
    prompt: false,
  };
  call(args).catch(console.error);
};
call3 = () => {
  const args = {
    number: '9840941444',
    prompt: false,
  };

  call(args).catch(console.error);
};
render() {
  return (
    <View style={{backgroundColor: '#000000', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text></Text>
      <Text style={{color:'#2bf4ff',fontSize:20,}}>
        CUUDALORE OLD TOWN EMERGENCY NUMBERS
      </Text>
      <Text></Text>
      <Text></Text>
      <Button title="Make a Call to Police" onPress={this.call1} />
      <Text></Text>
      <Button title="Make a Call to Hospital" onPress={this.call2} />
      <Text></Text>
      <Button title="Make a Call to Ambulance" onPress={this.call3} />
      <Text></Text>
      <Button title="Make a Call to sos" onPress={this.call} />
      <Text></Text>
      <Button title="Make a Call" onPress={this.call} />
      <Text></Text>
      <Button title="Make a Call" onPress={this.call} />
      <Text></Text>
      <Button
        title="Go to Home"
        onPress={() => this.props.navigation.navigate('Home')}
      />
      <Text></Text>
      <Button
        title="Go back"
        onPress={() => this.props.navigation.goBack()}
      />
    </View>
  );
}
}
const RootStack = createStackNavigator({
  Home: HomeScreen,
  Locations: HomeActivity,
  Chncity: ChennaiCity,
  Pondicity: Pondicity,
  Cuddacity: Cuddacity,
  Allpettai: AllPettai,
  Cuddaport: CuddalorePort,
  Cuddaold: CuddaOldTown,
  Moga: Mogappair,
  Sura: Surapet,
  Red: RedHills,
  Laws: LAWSPET,
  Ilango :IlangoNagar,
  White: WhiteTown,
});
export default createAppContainer(RootStack);
{
  /*  react-native run-android */
}
