export default function App(){
  return (

    <div>

        {/* <div className="card">

          <div>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/042/332/066/small_2x/person-photo-placeholder-woman-default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-social-media-free-vector.jpg" alt="" />
              <h3>Arpita Sahoo</h3>
              <h5>Kolkata ✈️</h5>
              <button>contact me</button>

          </div>

        </div> */}


        <div id="regform">
          <div>

            <h2>Registration Form</h2>
            <form action="">
            
              <label htmlFor="name">Name : </label><input type="text" name="" id="name" placeholder=" Enter your Name"/>&nbsp;&nbsp;&nbsp;
              <label htmlFor="roll">Roll : </label><input type="number" name="" id="roll" placeholder=" Enter your Roll"/><br /><br />
              <label htmlFor="reg no">Reg no : </label><input type="text" name="" id="reg no" placeholder=" Enter your Reg no."/>&nbsp;&nbsp;&nbsp;
              <label htmlFor="email">Email : </label><input type="text" name="" id="email"placeholder=" Enter your Email"/><br/><br/>
              <label htmlFor="mob no">Mobile no : </label><input type="number" name="" id="mob no" placeholder=" Enter your Mobile No"/>&nbsp;&nbsp;&nbsp;
              Sem : <select name="" id="sem"> 
                <option value="">Select your currnet semester</option>
                <option value="">I</option>
                <option value="">II</option>
                <option value="">III</option>
                <option value="">IV</option>
                <option value="">V</option>
                <option value="">VI</option>
                <option value="">VII</option>
                <option value="">VIII</option>
              </select><br/><br/>

              <label htmlFor="techstack">Tech Stack : </label><input type="text" id="techstack" list="subjects" placeholder=" Choose Tech stack"/>
              <datalist id="subjects">
                <option value="Full Stack">Full Stack</option>
                <option value="Java Tech Stack">Java Tech Stack</option>
                <option value="Mern Stack">MERN Stack</option>
              </datalist>&nbsp;&nbsp;&nbsp;

              <label htmlFor="experience">Experience : </label><input type="text" name="" id="experience" placeholder=" Year of Experience"/><br/><br/><br/>

              <button>Submit</button>&nbsp;&nbsp;
              <button>Reset</button>

            </form>

          </div>

        </div>

          
        
    </div>
  )
}