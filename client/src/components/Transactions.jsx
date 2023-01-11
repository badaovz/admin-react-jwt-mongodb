import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { transactions } from '../data';

const Transactions = () => {

    return (
        <div className='transactions'>
            <p className='transactions__title'>latest transactions</p>
            <TableContainer component={Paper} className="transactions__container">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="transactions__tableCell">Tracking ID</TableCell>
                            <TableCell className="transactions__tableCell">Product</TableCell>
                            <TableCell className="transactions__tableCell">Customer</TableCell>
                            <TableCell className="transactions__tableCell">Date</TableCell>
                            <TableCell className="transactions__tableCell">Amount</TableCell>
                            <TableCell className="transactions__tableCell">Payment Method</TableCell>
                            <TableCell className="transactions__tableCell">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                        <TableCell className="transactions__tableCell">{transaction.id}</TableCell>
                        <TableCell className="transactions__tableCell">
                            <div className="transactions__cellWrapper">
                                <img src={transaction.img} alt="" className="transactions__img" />
                                {transaction.product}
                            </div>
                        </TableCell>
                        <TableCell className="transactions__tableCell">{transaction.customer}</TableCell>
                        <TableCell className="transactions__tableCell">{transaction.date}</TableCell>
                        <TableCell className="transactions__tableCell">{transaction.amount}</TableCell>
                        <TableCell className="transactions__tableCell">{transaction.method}</TableCell>
                        <TableCell className="transactions__tableCell">
                            <span className={`transactions__tableCell ${transaction.status}`}>{transaction.status}</span>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Transactions;
