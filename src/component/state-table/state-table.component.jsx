import React ,{useState,useEffect} from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
	root:{
		maxWidth: 800,
		margin: 'auto',
		marginTop: '1rem',
	},
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === false
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, order,orderBy) {
  const stabilizedThis = array.map((el, index) => [el, index]);
	const compartor = getComparator(order ,orderBy )
	stabilizedThis.sort((a, b) => {
	return compartor(a[0], b[0]);
	});
	return stabilizedThis.map((el) => el[0]);
}

export default function StateTable(props) {
  const classes = useStyles();
	const [heading] = useState(['totalConfirmed','deaths','discharged'])
	const [currentTitle,setCurrentTitle] = useState('totalConfirmed')
	const [regional, setRegional] = useState(props.regional)
	const [order,setOrder] = useState(false);
	useEffect(()=>{
		setRegional(stableSort(regional,order,currentTitle) );
	},[currentTitle,order])
	
  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell >State</StyledTableCell>
						{
							heading.map(title => (
								<StyledTableCell 
									key={title}
									onClick={()=>
										title!==currentTitle ? setCurrentTitle(title): setOrder(!order)
									}
									align="right">
									<span style={{cursor: 'pointer'}}>{title}</span>
								</StyledTableCell>
							))
						}
          </TableRow>
        </TableHead>
        <TableBody>
          {regional.map(state => (
            <TableRow key={state.loc}>
              <TableCell component="th" scope="row">
                {state.loc}
              </TableCell>
              <TableCell align="right">{state.totalConfirmed}</TableCell>
              <TableCell align="right">{state.deaths}</TableCell>
              <TableCell align="right">{state.discharged}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};