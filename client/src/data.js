import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const dataNav = [
    {
        id: 1,
        name: 'main',
        contents: [
            {
                id: 101,
                icon: <DashboardCustomizeOutlinedIcon />,
                title: 'dashboard', 
                link: '/',
            } 
        ]
    },
    {
        id: 2,
        name: 'lists',
        contents: [
            {
                id: 102,
                icon: <PersonOutlineIcon />,
                title: 'users', 
                link: '/users', 
            },
            {
                id: 103,
                icon: <StoreOutlinedIcon />,
                title: 'products', 
                link: '/products', 
            },
            {
                id: 104,
                icon: <InventoryTwoToneIcon />,
                title: 'orders',
                link: '/orders',
            },
            {
                id: 105,
                icon: <LocalShippingIcon />,
                title: 'delivery', 
                link: '/delivery', 
            },

        ]
    },
    {
        id: 3,
        name: 'useful',
        contents: [
            {
                id: 106,
                icon: <QueryStatsIcon />,
                title: 'stats', 
                link: '/stats', 
            }, 
            {
                id: 107,
                icon: <NotificationsNoneIcon />,
                title: 'notifications', 
                link: '/notifications', 
            } 
        ]
    },
    {
        id: 4,
        name: 'service',
        contents: [
            {
                id: 108,
                icon: <SettingsSystemDaydreamIcon />,
                title: 'system health', 
                link: '/system health', 
            }, 
            {
                id: 109,
                icon: <PsychologyOutlinedIcon />,
                title: 'logs', 
                link: '/logs', 
            }, 
            {
                id: 110,
                icon: <SettingsOutlinedIcon />,
                title: 'settings', 
                link: '/settings', 
            }, 
        ]
    },
    {
        id: 5,
        name: 'user',
        contents: [
            {
                id: 111,
                icon: <AccountCircleOutlinedIcon />,
                title: 'profile', 
                link: '/profile', 
            }, 
            {
                id: 112,
                icon: <ExitToAppOutlinedIcon />,
                title: 'logout', 
                link: '/login', 
            }, 
        ]
    },

];

const dataWidget = [
    {
        id: 1,
        title: 'user',
        percent: 20,
        total: 100,
        text: 'see all users',
        icon: <PersonOutlineIcon />,
        color: '#dc233c',
        bgColor: '#ffcccc',
    },
    {
        id: 2,
        title: 'orders',
        percent: -10,
        total: 10,
        text: 'view all orders',
        icon: <ShoppingCartOutlinedIcon />,
        color: '#e1b74c',
        bgColor: '#f8edd2',
    },
    {
        id: 3,
        title: 'earnings',
        percent: 30,
        total: '$ 600',
        text: 'view net earnings',
        icon: <PaidOutlinedIcon />,
        color: '#006013',
        bgColor: '#cce6cc',
    },
    {
        id: 4,
        title: 'balance',
        percent: 40,
        total: '$ 800',
        text: 'see details',
        icon: <AccountBalanceWalletOutlinedIcon />,
        color: '#7451f8',
        bgColor: '#e6ccd6',
    },


];

const transactions = [
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Delivery",
        status: "Approved",
      },
      {
        id: 2235235,
        product: "Playstation 5",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Michael Doe",
        date: "1 March",
        amount: 900,
        method: "Online Payment",
        status: "Pending",
      },
      {
        id: 2342353,
        product: "Redragon S101",
        img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        date: "1 March",
        amount: 35,
        method: "Cash on Delivery",
        status: "Pending",
      },
      {
        id: 2357741,
        product: "Razer Blade 15",
        img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Jane Smith",
        date: "1 March",
        amount: 920,
        method: "Online",
        status: "Approved",
      },
      {
        id: 2342355,
        product: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Harold Carol",
        date: "1 March",
        amount: 2000,
        method: "Online",
        status: "Pending",
      },
];

const userInputs = [
    {
      id: 1,
      label: "Username",
      value: "username",
      type: "text",
      placeholder: "john_doe",
    },
    {
      id: 2,
      label: "Email",
      value: "email",
      type: "mail",
      placeholder: "john_doe@gmail.com",
    },
    {
      id: 3,
      label: "Password",
      value: "password",
      type: "text",
      placeholder: "John Doe",
    },
    {
      id: 4,
      label: "Phone",
      value: "phone",
      type: "text",
      placeholder: "+1 234 567 89",
    },
    {
      id: 5,
      label: "Age",
      value: "age",
      type: "number",
      placeholder: "Age"
    },
    {
      id: 6,
      label: "Address",
      value: "address",
      type: "text",
      placeholder: "Elton St. 216 NewYork",
    },
    {
      id: 7,
      label: "Country",
      value: "country",
      type: "text",
      placeholder: "USA",
    },
    {
        id: 8,
        label: "Status",
        value: "status",
        type: "text",
        placeholder: "Status",
    },
    {
        id: 9,
        label: "img",
        value: "img",
        type: "text",
        placeholder: "url",
    },

];
  
const productInputs = [
    {
      id: 1,
      label: "Title",
      type: "text",
      placeholder: "Apple Macbook Pro",
    },
    {
      id: 2,
      label: "Description",
      type: "text",
      placeholder: "Description",
    },
    {
      id: 3,
      label: "Category",
      type: "text",
      placeholder: "Computers",
    },
    {
      id: 4,
      label: "Price",
      type: "text",
      placeholder: "100",
    },
    {
      id: 5,
      label: "Stock",
      type: "text",
      placeholder: "in stock",
    },
];

const userColumns = [
    { field: '_id', headerName: 'ID', width: 100 },
    { field: 'username', 
        headerName: 'User Name', 
        width: 240,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className='cellWithImg__img' src={params.row.img} alt='avatar' />
                    {params.row.username}
                </div>
            );
        }, 
    },
    { field: 'email', headerName: 'Email', width: 240 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 100,
      renderCell: (params) => {
        return (
            <div className='cellWithAge'>
                {params.row.age}
            </div>
        )
      }
    },
    { 
        field: 'status', 
        headerName: 'Status', 
        width: 150,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
  ];

const usersRow = [
    {
        id: 1,
        username: "Snow",
        phone: '012345678',
        password: '11111111',
        img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        status: "active",
        email: "1snow@gmail.com",
        address: 'noth london',
        country: 'england',
        age: 35,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        password: '11111111',
        phone: '012345678',
        img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        email: "2snow@gmail.com",
        address: 'noth london',
        country: 'england',
        status: "passive",
        age: 42,
    },
    {
        id: 3,
        username: "Lannister",
        password: '11111111',
        phone: '012345678',
        img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        email: "3snow@gmail.com",
        address: 'noth london',
        country: 'england',
        status: "pending",
        age: 45,
    },
    {
        id: 4,
        username: "Stark",
        password: '11111111',
        phone: '012345678',
        img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        email: "4snow@gmail.com",
        address: 'noth london',
        country: 'england',
        status: "active",
        age: 16,
    },
    {
        id: 5,
        username: "Targaryen",
        password: '11111111',
        phone: '012345678',
        img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        email: "5snow@gmail.com",
        address: 'noth london',
        country: 'england',
        status: "passive",
        age: 22,
    },
    {
        id: 6,
        username: "Melisandre",
        password: '11111111',
        phone: '012345678',
        img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        email: "6snow@gmail.com",
        address: 'noth london',
        country: 'england',
        status: "active",
        age: 15,
    },
    {
        id: 7,
        username: "Clifford",
        password: '11111111',
        phone: '012345678',
        img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        email: "7snow@gmail.com",
        address: 'noth london',
        country: 'england',
        status: "passive",
        age: 40,
    },
    {
        id: 8,
        username: "Frances",
        password: '11111111',
        phone: '012345678',
        img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        email: "8snow@gmail.com",
        address: 'noth london',
        country: 'england',
        status: "active",
        age: 36,
    },
    {
        id: 9,
        username: "Roxie",
        password: '11111111',
        phone: '012345678',
        img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        email: "snow@gmail.com",
        address: 'noth london',
        country: 'england',
        status: "pending",
        age: 65,
    },
    {
        id: 10,
        username: "Roxieg",
        password: '11111111',
        phone: '012345678',
        img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        email: "snow@gmail.com",
        address: 'noth london',
        country: 'england',
        status: "active",
        age: 65,
    },
];

const productColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'productName', 
        headerName: 'Product Name', 
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className='cellWithImg__img' src={params.row.img} alt='avatar' />
                    {params.row.productName}
                </div>
            );
        }, 
    },
    { field: 'address', headerName: 'Address', width: 230 },
    {
      field: 'code',
      headerName: 'Code',
      width: 100,
    },
    { 
        field: 'status', 
        headerName: 'Status', 
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
  ];

const productsRow = [
    {
        _id: "1",
        productName: "Snow",
        code: '012345678',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        address: 'noth london',
        country: 'england',
    },
    {
        _id: "2",
        productName: "Jamie Lannister",
        code: '012345678',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        address: 'noth london',
        country: 'england',
        status: "passive",
    },
    {
        _id: "3",
        productName: "Lannister",
        code: '012345678',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        address: 'noth london',
        country: 'england',
        status: "pending",
    },
    {
        _id: "4",
        productName: "Stark",
        code: '012345678',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        address: 'noth london',
        country: 'england',
        status: "active",
    },
    {
        _id: "5",
        productName: "Targaryen",
        code: '012345678',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        address: 'noth london',
        country: 'england',
        status: "passive",
    },
    {
        _id: "6",
        productName: "Melisandre",
        code: '012345678',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        address: 'noth london',
        country: 'england',
        status: "active",
    },
    {
        _id: "7",
        productName: "Clifford",
        code: '012345678',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        address: 'noth london',
        country: 'england',
        status: "passive",
    },
    {
        _id: "8",
        productName: "Frances",
        code: '012345678',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        address: 'noth london',
        country: 'england',
        status: "active",
    },
    {
        _id: "9",
        productName: "Roxie",
        code: '012345678',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        address: 'noth london',
        country: 'england',
        status: "pending",
    },
    {
        _id: "10",
        productName: "Roxie",
        code: '012345678',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        address: 'noth london',
        country: 'england',
        status: "active",
    },
];

const follows = [
    {
        id: 1,
        text: 'Facebook',
        icon: <FacebookOutlinedIcon />,
        url: 'https://www.facebook.com/',
    },
    {
        id: 2,
        text: 'Instagram',
        icon: <InstagramIcon />,
        url: 'https://www.instagram.com/',
    },
    {
        id: 3,
        text: 'Linkedln',
        icon: <LinkedInIcon />,
        url: 'https://www.linkedin.com/',
    },
];

const chartData = [
    {
        name: 'January',
        Total: 1200,
    },
    {
        name: 'February',
        Total: 2100,
    },
    {
        name: 'March',
        Total: 800,
    },
    {
        name: 'April',
        Total: 1600,
    },
    {
        name: 'May',
        Total: 900,
    },
    {
        name: 'June',
        Total: 1700,
    },
];

const notifies = [
    {
        id: 1,
        title: 'New product for you lorem',
        desc: 'description of our product',
        img: 'https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn'
    },
    {
        id: 2,
        title: 'Confirm your order',
        desc: 'you can confirm oder before 15/12/2022',
        img: 'https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn'
    },
    {
        id: 3,
        title: 'Your order is success!',
        desc: 'You can check at this!',
        img: 'https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn'
    },
]
const messages = [
    {
        id: 1,
        title: 'IBug product',
        desc: 'hi!! i can connect with you',
        img: 'https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn'
    },
    {
        id: 2,
        title: 'TegG company',
        desc: 'order is success',
        img: 'https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn'
    },
    {
        id: 3,
        title: 'IIF official',
        desc: 'good luck!',
        img: 'https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn'
    },
]

export {
    dataNav,
    dataWidget,
    transactions,
    userInputs,
    productInputs,
    userColumns,
    usersRow,
    productColumns,
    productsRow,
    follows,
    chartData,
    notifies,
    messages
};