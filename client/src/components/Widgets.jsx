import { dataWidget } from '../data';
import Widget from './Widget';

const Widgets = () => {
    return (
        <div className='widgets'>
            {
                dataWidget.map(widget => (
                    <Widget key={widget.id} widget={widget}/>
                ))
            }
        </div>
    );
}

export default Widgets;
