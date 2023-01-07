import { Link } from 'react-router-dom';
import Product from '../components/Product';
import { useCallback, useState } from 'react';
import { productColumns, productsRow } from '../data';

const Products = () => {
    const [data, setData] = useState(productsRow);

    const handleDelete = useCallback(
        (id) => {
            setTimeout(() => {
                setData(data.filter((item) => item._id !== id));
            });
        },
        [data],
    );

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='cellAction'>
                        <Link
                            to={`/products/${params.row._id}`}
                            className='cellAction__viewBtn'
                        >
                            view
                        </Link>
                        <button
                            className='cellAction__deleteBtn'
                            onClick={() => handleDelete(params.row._id)}
                        >
                            Delete
                        </button>
                    </div>
                );
            },
        },
    ];

    return (
        <div className='table'>
            <div className='table__header'>
                <h3 className='table__title'>Products List</h3>
                <Link to='/products/new' className='table__btn btn'>
                    Add New
                </Link>
            </div>
            <Product
                data={data}
                actionColumn={actionColumn}
                productColumns={productColumns}
            />
        </div>
    );
};

export default Products;
