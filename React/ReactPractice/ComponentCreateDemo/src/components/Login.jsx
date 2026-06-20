import './Login.css';

export default function Login(){
    return(
        <div>
            <div className="login">
                <h2>Verify your email and password</h2>
                Enter email : <input type="text" placeholder="enter your email here ..."  /><br/><br/>
                Enter Password : <input type="text" placeholder="enter password....." />
            </div>
            
        </div>
    )
}