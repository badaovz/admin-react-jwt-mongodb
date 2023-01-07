import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { chartData } from '../data';

const Chart = ({ title, aspect }) => {

    return (
        <div style={{ width: '100%', height: '100%' }} className='chart'>
            <h3 className='chart__title'>{title}</h3>
            <ResponsiveContainer width='100%' aspect={aspect}>
                <AreaChart
                    data={chartData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
                            <stop
                                offset='5%'
                                stopColor='#8884d8'
                                stopOpacity={0.8}
                            />
                            <stop
                                offset='95%'
                                stopColor='#8884d8'
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis  />
                    <Tooltip />
                    <Area
                        type='monotone'
                        dataKey='Total'
                        stroke='#8884d8'
                        fillOpacity={1}
                        // fill="#8884d8"
                        fill='url(#total)'
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
