import { useEffect } from 'react';
import { Widgets, Featured, Chart, Transactions } from '../components'; 
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const user = useSelector(state => state.auth.login?.currentUser);
    const navigate = useNavigate();

    console.log('User: ', user)

    useEffect(() => {
        if(!user) {
            navigate('/login');
        }
    }, [navigate, user])
    
    return (
        <div className='home'>
            <Widgets />
            <div className="home__featured">
                <Featured />
                <Chart aspect={3/1} title='User Spending (Last 6 month)' />
            </div>
            <Transactions />
        </div>
    );
}

export default Home;
