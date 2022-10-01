import {
  Box,
  Table as MuiTable,
  TableHead,
  TableRow,
  tableCellClasses,
  TableBody,
  TableCell,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataState } from "../../types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface TableProps {
  rows: DataState[];
}

const Table = ({ rows }: TableProps) => {
  if (!rows.length) {
    return null;
  }

  return (
    <Box width="700px" maxWidth={"100%"} mx="auto" mt="30px">
      <MuiTable sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>From</StyledTableCell>
            <StyledTableCell>To</StyledTableCell>
            <StyledTableCell>Price Per Day</StyledTableCell>
            <StyledTableCell>Added</StyledTableCell>
            <StyledTableCell>Current Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{row.from}</StyledTableCell>
              <StyledTableCell>{row.to}</StyledTableCell>
              <StyledTableCell>{row.ppd}</StyledTableCell>
              <StyledTableCell>{row.added}</StyledTableCell>
              <StyledTableCell align="right">
                {row.currentPrice}
              </StyledTableCell>
            </StyledTableRow>
          ))}
          <TableRow>
            <TableCell
              colSpan={5}
              align="right"
              component="th"
              scope="row"
              sx={{ bgcolor: "black", color: "white", fontWeight: "bold" }}
            >
              {rows.reduce((total, row) => total + row.currentPrice, 0)}
            </TableCell>
          </TableRow>
        </TableBody>
      </MuiTable>
    </Box>
  );
};

export default Table;
