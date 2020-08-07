import React from 'react';
class Register extends React.Component{
  constructor(props){
      super(props);
      this.state={
      email:'',
      password:'',
      name:'',
      }
  }
  calculateemail = (event)=>{
      this.setState({ email: event.target.value });
  }
  calculatepassword = (event)=>{
      this.setState({ password: event.target.value });
  }
   calculatename = (event)=>{
      this.setState({ name: event.target.value });
  }
  onsubmit = (event)=>{
    event.preventDefault();
      fetch('https://sleepy-chamber-33829.herokuapp.com/register',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          email:this.state.email,
          password:this.state.password,
          name:this.state.name
        })
      }).then(response=>response.json())
       .then(data=>{
        if(data === 'unable to register'){
           alert("account with similer details already exits")
        }
        else{
           this.props.loaduser(data);
          this.props.onroute('home');
        }
      })
       console.log("mom");
  }
  render(){
	return(
		<div>
		<article class="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
           <main class="pa4 black-80">
  <form class="measure">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f2 fw6 ph0 mh0">Register</legend>
       <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Name</label>
        <input onChange={this.calculatename} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
      </div>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
        <input onChange={this.calculateemail} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Password</label>
        <input onChange={this.calculatepassword} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
     
    </fieldset>
    <div class="">
      <input onClick={this.onsubmit}class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
    </div>
    <div class="lh-copy mt3">
     
    </div>
  </form>
</main>
</article>

		</div>
		
		);
}
}
export default Register;