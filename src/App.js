import React,{Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import brain from './components/Logo/brain.png';
import Image from './components/Image/Image';
import Rank from './components/Rank/Rank';
import Face from './components/Face/Face';
import Signin from './components/Signin/Signin'
import Particles from 'react-particles-js';
import Register from './components/Register/Register'
import Clarifai from 'clarifai';
import './App.css';
import 'tachyons';
const app = new Clarifai.App({
 apiKey: 'f568161301024d90b6998f3eb69372b2'
});

const particles = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageurl: '',
      box: {},
      route: 'signin',
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loaduser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('im');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  display = (box) => {
    this.setState({box: box});
  }

  onInput= (event) => {
    this.setState({input: event.target.value});
  }

  onsubmit = () => {
    this.setState({imageurl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => 
        this.display(this.calculateFaceLocation(response))
      )
      .catch(err => console.log(err));
  }

  onroute=(route)=>{
      if(this.state.is === 'home'){
            this.setstate({is:'xyz'});
       }
       this.setState({route:route});
       
    }

   render(){
        return (
          <div className="App">
            <Particles className='particles'
              params={particles}/>
                <Navigation onroute={this.onroute}/>
                  {this.state.route === 'home' ?<div>
              <Logo className='dib'/>
            

              <Image onInchange={this.onInput} onsubmit={this.onsubmit}/>
              <Face box={this.state.box} imageurl={this.state.imageurl}/>
              </div>

              :(this.state.route === 'signin'? <Signin loaduser={this.loaduser} onroute={this.onroute}/>: <Register loaduser={this.loaduser} onroute={this.onroute}/>)
            }
          </div>
        );
    }
  }

export default App;
