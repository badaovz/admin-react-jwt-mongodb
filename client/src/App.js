import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { productInputs, productsRow, userInputs } from './data';
import ConfirmUser from './pages/ConfirmUser';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import New from './pages/New';
import PagesNotFound from './pages/PagesNotFound';
import Products from './pages/Products';
import Setting from './pages/Setting';
import SinglePage from './pages/SinglePage';
import Users from './pages/Users';

function App() {
    const user = useSelector((state) => state.auth.login?.currentUser);
    let userList = useSelector((state) => state.users.users?.allUsers);
    const isDarkMode = useSelector((state) => state.def.isDarkMode);

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: isDarkMode ? 'dark' : 'light',
                },
                // components: {
                //     // Use `MuiDataGrid` on DataGrid, DataGridPro and DataGridPremium
                //     MuiDataGrid: {
                //         styleOverrides: {
                //             root: {
                //                 backgroundColor: '#0A1929',
                //                 // color: '#fff',
                //             },
                //         },
                //     },
                // },
            }),
        [isDarkMode],
    );

    console.log('log ')

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='products'>
                            <Route index element={<Products />} />
                            <Route
                                path=':Id'
                                element={
                                    <SinglePage
                                        data={productsRow}
                                        type='product'
                                    />
                                }
                            />
                            <Route
                                path='new'
                                element={
                                    <New infos={productInputs} name='product' />
                                }
                            />
                        </Route>
                        <Route path='users'>
                            <Route index element={<Users />} />
                            <Route
                                path=':Id'
                                element={
                                    <SinglePage data={userList} type='user' />
                                }
                            />
                            <Route
                                path='new'
                                element={<New infos={userInputs} name='user' />}
                            />
                        </Route>
                        <Route path='login'>
                            <Route index element={<Login />} />
                            <Route path='forgot' element={<ConfirmUser />} />
                        </Route>
                        <Route path='new' element={<New />} />
                        <Route path='single' element={<SinglePage />} />
                        <Route path='logout' element={<Login />} />
                        <Route
                            path='profile'
                            element={<SinglePage data={user} type='user' />}
                        />
                        <Route path='settings' element={<Setting />} />
                        <Route path='*' element={<PagesNotFound />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
