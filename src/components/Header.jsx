
 import { useNavigate } from 'react-router-dom'


 export default function Header(){
        const Navigate = useNavigate() 
    return (
        <div>
            <button onClick={()=>{Navigate('/')}}>Home</button>
            <button onClick={()=>{Navigate('/gallery')}}>Gallery</button>
            <button onClick={()=>{Navigate('/about')}}>About</button>
            <button onClick={()=>{Navigate('/contact')}}>Contact</button>
            <h2></h2>          
        </div>
    )
} 











// const Header = ()=>{

// }
