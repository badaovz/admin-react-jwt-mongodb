import { DataGrid } from '@mui/x-data-grid';
import React, { memo } from 'react';

function Product({data, actionColumn, productColumns}) {
    

    return (
        <div className='table__main'>
            <DataGrid
                getRowId={(row) => row._id}
                className='table__datagrid'
                rows={data}
                columns={productColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
}

export default memo(Product);
