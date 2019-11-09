import React , { Component } from 'react';
import FormFields from '../Widgets/FormFields/formFields';
import style from './dashboard.module.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import {firebaseTeams} from '../../firebase';


class Dashboard extends Component {
    state={
        editorState: EditorState.createEmpty(),
        postError:'',
        loading:false,
        formdata:{
            author:{
                element:'input',
                value:'',
                config:{
                    name:'author_input',
                    type:'text',
                    placeholder:'Enter your name'
                },
                validation:{
                    required:true,
                },
                valid:false,
                touched:false,
                validationMessage:''
            },    
            title:{
                element:'input',
                value:'',
                config:{
                    name:'title_input',
                    type:'text',
                    placeholder:'Enter your title'
                },
                validation:{
                    required:true,
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            body:{
                element:'texteditor',
                value:'',
                valid:true
            },
            teams:{
                element:'select',
                value:'',
                config:{
                    name:'teams_input',
                    
                   options :[]
                },
                validation:{
                    required:true,
                },
                valid:false,
                touched:false,
                validationMessage:''
            } 
        }

    }

    componentDidMount(){
        this.loadTeams()
    }

    loadTeams=()=>{
        firebaseTeams.once('value')
        .then((snapshot)=>{
            let teams = [];

            snapshot.forEach((childSnapshot)=>{
                teams.push({
                    id:childSnapshot.val().teamId,
                    name: childSnapshot.val().city
                })
            })

            const newFormdata = {...this.state.formdata};
            
            const newElement = {...newFormdata['teams']};
            

            newElement.config.options = teams;
            
            newFormdata['teams'] = newElement;
            

            this.setState({
                formdata:newFormdata
            })
        })
    }

    showError= () =>(
        this.state.postError !== '' ? 
    <div className={style.error}>{this.state.postError}</div>
        :''
    )

    updateForm =(element, content = '')=>{
        const newFormdata = {
            ...this.state.formdata
        }
        

        const newElement = {
            ...newFormdata[element.id]
        }
        
        if(content === ''){
            newElement.value = element.event.target.value;
        }else{
            newElement.value = content
        }

        
        if(element.blur){
            let valiData = this.validate(newElement);
            newElement.valid = valiData[0];
            newElement.validationMessage = valiData[1]; 
        }

        newElement.touched = element.blur;
        newFormdata[element.id] = newElement;
        
        this.setState({
            formdata:newFormdata
        })
    }

    validate = (element ) =>{
        let error = [true,''];

        

        if(element.validation.required){
            const valid = element.value.trim() !=='';//epistrefei bool
            const message = `${!valid ? 'This field is rquired':''}`;
            error = !valid ? [false,message] : error;
        }
       
        return error;
    }

    submitForm = (event) =>{
        event.preventDefault();
        

        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value;
        }
        for(let key in this.state.formdata){
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }
        

        if(formIsValid){
            
        }else{
            this.setState({
                postError:'Oops something went wrong!'
            })
        }
    }

    submitButton =() =>(
        this.state.loading ?
            'loading...'
        :
        <div>
            
            <button type="submit">Add Post</button>
        </div>    
    )

    onEditorStateChange = (editorState) =>{
        
        let contentState = editorState.getCurrentContent();
        //let rawState = convertToRaw(contentState)
        let html = stateToHTML(contentState)
        this.updateForm({id:'body'},html)
        this.setState({
            editorState,
        });
        
    }

    render(){
        return(
            <div className={style.postContainer}>
                <form onSubmit={this.submitForm}>
                    <h2>Add Post</h2>
                    <FormFields 
                        id={'author'}
                        formdata={this.state.formdata.author}
                        change={(element)=>this.updateForm(element)}
                    />
                    <FormFields 
                        id={'title'}
                        formdata={this.state.formdata.title}
                        change={(element)=>this.updateForm(element)}
                    />
                    <Editor 
                        editorState={this.state.editorState}
                        wrapperClassName="myEditor-wrapper"
                        editorClassName="myEditor-editor"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                    <FormFields 
                        id={'teams'}
                        formdata={this.state.formdata.teams}
                        change={(element)=>this.updateForm(element)}
                    />
                    {this.submitButton()}
                    {this.showError()}
                </form>

            </div>
        )
    }
}

export default Dashboard;