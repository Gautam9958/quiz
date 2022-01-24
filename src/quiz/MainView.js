import React , {useState}  from 'react'
import QuizView from './QuizView';

const MainView = (props) => {
    
    const [inputName, setInputName] = useState({
        name:"",
        nextView:0
    });
     
    const handleInput = (e) =>{
        const name = e.target.name;
        const value= e.target.value;
        console.log(name, value);

        setInputName({...inputName, [name]:value});
    }

    return (
        <>
        <div className='container'>
        <h1 className='head'>Start Quiz</h1>
            <form action=''>
                <div className='form'>
                    <lable htmlFor="name" className="name">Name:</lable>
                    <input className="input" type="text" autoComplete='off' 
                    value={inputName.name} 
                    onChange={handleInput}
                    name="name" id="name"></input>
                </div>
            </form>
            <div className='button'>
            <button className='btn' type='submit' onClick={props.clickBtn}>submit</button>
            </div>
           
        </div>
       
        </>
    )
}

export default MainView;

