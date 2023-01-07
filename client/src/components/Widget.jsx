import { Link } from 'react-router-dom';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const Widget = ({widget}) => {
    const { title, percent, total, text, icon, color, bgColor } = widget;
    return (
        <div className='widget'>
            <div className="widget__header">
                <h3 className='widget__title'>{title}</h3>
                <p className="widget__percent">
                    {percent >= 0 ? <ExpandLessOutlinedIcon style={{color: 'green'}}/> : <ExpandMoreOutlinedIcon style={{color: 'red'}} />}
                    {percent} %
                </p>
            </div>
            <p className="widget__total">{total}</p>
            <div className="widget__footer">

                <Link to='/users'>
                    <p className='widget__text'>{text}</p>
                </Link>
                <p className="widget__icon" style={{color: `${color}`, backgroundColor: `${bgColor}`, cursor: 'unset'}}>{icon}</p>
            </div>
        </div>
    );
}

export default Widget;
