import { useSelector } from 'react-redux';
import { ConfirmEmail, ResetPass } from "../components";


const ConfirmUser = () => {
    const code = useSelector(state => state.auth.confirm?.code);

    return (
        <div className='confirmUser'>
           {
               code ? 
               <ResetPass /> :  
               <ConfirmEmail />
           }
        </div>
    );
}

export default ConfirmUser;
