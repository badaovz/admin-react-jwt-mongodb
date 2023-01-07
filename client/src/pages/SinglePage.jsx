import { useParams } from 'react-router-dom';
import { UserInfo, ProductInfo, Chart, Transactions } from '../components';
import Product from '../components/Product';

const SinglePage = ({data, type}) => {
    const param = useParams();
    console.log('Param: ', param)
    const {Id} = param;

    let newData;
    if(Id){
        newData = data.find(i => (i._id) === Id);
    } else {
        newData = data;
    }

    return (
        <div className='singlePage'>
            <div className="singlePage__container">
                {
                    type==='user' ?
                    <UserInfo data={newData} />:
                    <ProductInfo data={newData} />
                }
                    
                <Chart aspect={3/1} title='User Spending (Last 6 month)'/>
            </div>
            <Transactions />
            {/* {
                type==='user' ?
                <Transactions /> :
                <Product />
            } */}
        </div>
    );
}

export default SinglePage;
