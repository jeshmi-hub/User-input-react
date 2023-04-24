import React , {useState} from 'react'
import Card from '../UI/Card';
import  classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const addUserHandler= (event)=>{
        event.preventDefault();
    }

    const usernameChangeHandler = (event) =>{
        setEnteredName(event.target.value);
        console.log(enteredName, enteredAge)
    }

    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }
  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label>Username</label>
        <input id='username' type='text' onChange={usernameChangeHandler}></input>
        <label htmlFor='age'>Age</label>
        <input id='username' type='number' onChange={ageChangeHandler}></input>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
  )
}

export default AddUser
