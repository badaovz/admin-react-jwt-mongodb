import React from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const Featured = () => {
    return (
        <div className='featured'>
            <div className='featured__header'>
                <p className='featured__title'>total revenue</p>
                <MoreVertOutlinedIcon className='featured__icon' />
            </div>
            <div className='featured__content'>
                <CircularProgressbar
                    className='featured__circle'
                    value='70'
                    text='70%'
                    strokeWidth={5}
                />
                <p>total sales made today</p>
                <p className='featured__total'>$420</p>
                <p className='featured__note'>
                    previous transactions last payments may not be included
                </p>
                <div className='featured__footer'>
                    <div className='featured__items'>
                        <p>target</p>
                        <p className='featured__item featured__item--target '>
                            <ExpandMoreOutlinedIcon />
                            $12.4k
                        </p>
                    </div>
                    <div className='featured__items'>
                        <p>last week</p>
                        <p className='featured__item'>
                            <ExpandLessOutlinedIcon />
                            $14.4k
                        </p>
                    </div>
                    <div className='featured__items'>
                        <p>last month</p>
                        <p className='featured__item'>
                            <ExpandLessOutlinedIcon />
                            $36.4k
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
