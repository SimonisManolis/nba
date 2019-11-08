import React , {Component} from 'react';
import style from './signIn.module.css';
import FormFields from '../Widgets/FormFields/formFields';
import { firebase } from '../../firebase';

class SignIn extends Component {
   
    state ={
        registerError:'',
        loading:false,
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'Enter your email'
                },
                validation:{
                    required:true,
                    email:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            
            password:{
                element:'input',
                value:'',
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder:'Enter your password'
                },
                validation:{
                    required:true,
                    password:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            }
        }
    }
   
    updateForm =(element)=>{
        const newFormdata = {
            ...this.state.formdata
        }
        

        const newElement = {
            ...newFormdata[element.id]
        }
        
        newElement.value = element.event.target.value;
        if(element.blur){
            let valiData = this.validate(newElement);
            newElement.valid = valiData[0];
            newElement.validationMessage = valiData[1]; 
        }

        newElement.touched = element.blur;
        newFormdata[element.id] = newElement;
        console.log(newFormdata);
        this.setState({
            formdata:newFormdata
        })
    }

    validate = (element ) =>{
        let error = [true,''];

        if(element.validation.email){
            const valid = /\S+@\S+\.\S+/.test(element.value);//email check
            const message = `${!valid ? 'Must be a valid email':''}`;
            error = !valid ? [false,message] : error;
        }

        if(element.validation.password){
            const valid = element.value.length >5;//epistrefei bool
            const message = `${!valid ? 'Must be greater than 5 characters':''}`;
            error = !valid ? [false,message] : error;
        }

        if(element.validation.required){
            const valid = element.value.trim() !=='';//epistrefei bool
            const message = `${!valid ? 'This field is rquired':''}`;
            error = !valid ? [false,message] : error;
        }
       
        return error;
    }

    submitForm = (event, type) =>{
        event.preventDefault();

        if(type !== null){
            let dataToSubmit = {};
            let formIsValid = true;

            for(let key in this.state.formdata){
                dataToSubmit[key] = this.state.formdata[key].value;
            }
            for(let key in this.state.formdata){
                formIsValid = this.state.formdata[key].valid && formIsValid;
            }

            if(formIsValid){
                this.setState({
                    loading:true,
                    registerError:''
                })
                if(type){
                    firebase.auth()
                    .signInWithEmailAndPassword(
                        dataToSubmit.email,
                        dataToSubmit.password
                    ).then(()=>{
                        this.props.history.push('/')
                    }).catch(error=>{
                        this.setState({
                            loading:false,
                            registerError:error.message
                        })
                    })
                } else {
                    firebase.auth()
                    .createUserWithEmailAndPassword(
                        dataToSubmit.email,
                        dataToSubmit.password
                    ).then(()=>{
                        this.props.history.push('/')//take back to home
                    }).catch(error=>{
                        this.setState({
                            loading:false,
                            registerError:error.message
                    })
                })
            }}

        }
    }

    submitButton =() =>(
        this.state.loading ?
            'loading...'
        :
        <div>
            <button onClick={(event)=>this.submitForm(event,false)}>Register now</button>
            <button onClick={(event)=>this.submitForm(event,true)}>Log In</button>
        </div>    
    )

    showError= () =>(
        this.state.registerError !== '' ? 
    <div className={style.error}>{this.state.registerError}</div>
        :''
    )

    render(){
        return(
            <div className={style.logInContainer}>
                <form onSubmit={(event)=>this.submitForm(event,null)}>
                    <h2>Login / Register</h2>
                    <FormFields 
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={(element)=>this.updateForm(element)}
                    />
                    <FormFields 
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(element)=>this.updateForm(element)}
                    />

                    {this.submitButton()}
                    {this.showError()}
                </form>
                
            </div>
        )
    }
}

export default SignIn;