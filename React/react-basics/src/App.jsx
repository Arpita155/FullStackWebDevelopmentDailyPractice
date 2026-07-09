import Login, { SignUp} from "./auth.jsx"
import Header from "./components/Header.jsx"

export default function App(){
  return(
    <div>
      <h1>App File</h1>
      
      <Header />
      <Login/>
      <SignUp/>
    </div>
  )
}