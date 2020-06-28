import React, { useState } from "react";
import "./TableContent.styles.scss";

import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import Avatar from "@material-ui/core/Avatar";

function createData(
  title,
  subTitle,
  type,
  startIn,
  ticket,
  status,
  creator,
  createTime
) {
  return {
    title,
    subTitle,
    type,
    startIn,
    ticket,
    status,
    creator,
    createTime,
  };
}

const rows = [
  createData(
    "Lorem Ipsum",
    "Design Team",
    "Remote",
    "2 Hours",
    "Hidden",
    "Pending Confirmation",
    "Admin",
    "12/02/15"
  ),
  createData(
    "Lorem Ipsum1",
    "Design Team",
    "Remote",
    "2 Hours",
    "Hidden",
    "Pending Confirmation",
    "Admin",
    "12/02/15"
  ),
  createData(
    "Lorem Ipsum3",
    "Design Team",
    "Remote",
    "2 Hours",
    "Hidden",
    "Pending Confirmation",
    "Admin",
    "12/02/15"
  ),
  createData(
    "Lorem Ipsum4",
    "Design Team",
    "Remote",
    "2 Hours",
    "Hidden",
    "Pending Confirmation",
    "Admin",
    "12/02/15"
  ),
  createData(
    "Lorem Ipsum5",
    "Design Team",
    "Remote",
    "2 Hours",
    "Hidden",
    "Pending Confirmation",
    "Admin",
    "12/02/15"
  ),
  createData(
    "Lorem Ipsum6",
    "Design Team",
    "Remote",
    "2 Hours",
    "Hidden",
    "Pending Confirmation",
    "Admin",
    "12/02/15"
  ),
  createData(
    "Lorem Ipsum7",
    "Design Team",
    "Remote",
    "2 Hours",
    "Hidden",
    "Pending Confirmation",
    "Admin",
    "12/02/15"
  ),
  createData(
    "Lorem Ipsum8",
    "Design Team",
    "Remote",
    "2 Hours",
    "Hidden",
    "Pending Confirmation",
    "Admin",
    "12/02/15"
  ),
  createData(
    "Lorem Ipsum9",
    "Design Team",
    "Remote",
    "2 Hours",
    "Hidden",
    "Pending Confirmation",
    "Admin",
    "12/02/15"
  ),
  createData(
    "Lorem Ipsum10",
    "Design Team",
    "Remote",
    "2 Hours",
    "Hidden",
    "Pending Confirmation",
    "Admin",
    "12/02/15"
  ),
  createData(
    "Lorem Ipsum10",
    "Design Team",
    "Remote",
    "2 Hours",
    "Hidden",
    "Pending Confirmation",
    "Admin",
    "12/02/15"
  ),
  createData(
    "Lorem Ipsum10",
    "Design Team",
    "Remote",
    "2 Hours",
    "Hidden",
    "Pending Confirmation",
    "Admin",
    "12/02/15"
  ),
];

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
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "title",
    numeric: false,
    disablePadding: true,
    label: "TITLE",
  },
  { id: "type", numeric: false, disablePadding: false, label: "TYPE" },
  {
    id: "starts in",
    numeric: false,
    disablePadding: false,
    label: "STARTS IN",
  },
  { id: "ticket", numeric: false, disablePadding: false, label: "TICKET(S)" },
  { id: "starts", numeric: false, disablePadding: false, label: "STATUS" },
  { id: "creator", numeric: false, disablePadding: false, label: "CREATOR" },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className={classes.tableRowHead}>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "center"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  tableRow: {
    backgroundColor: "#fff",
    height: "5rem",
    fontSize: "13px",
  },
  tableRowEmpty: {
    height: "1rem",
  },
  tableRowHead: {
    fontSize: "10px",
  },
  tableRowTitle: {
    fontWeight: "600",
  },
  tableRowStartIn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "30px",
    width: "120px",
    borderRadius: "1000px",
    backgroundColor: "rgb(255, 88, 88)",
  },
}));

const TableContent = (props) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.title);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
      <div className={classes.root}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.title);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <>
                      <TableRow
                        className={classes.tableRow}
                        hover
                        onClick={(event) => handleClick(event, row.title)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell align="center" padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell
                          align="center"
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          className={classes.tableRowTitle}
                        >
                          {row.title}
                        </TableCell>
                        <TableCell align="center">{row.type}</TableCell>
                        <TableCell align="center">
                          <div className="d-flex justify-content-center align-items-center">
                            <span className={classes.tableRowStartIn}>
                              {row.startIn}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="center">{row.ticket}</TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                        <TableCell align="center">
                          <div className="d-flex justify-content-center align-items-center">
                            <Avatar alt="Remy Sharp" />
                            <span className="ml-3">{row.creator}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className={classes.tableRowEmpty}></TableRow>
                    </>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell align="center" colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};

export default TableContent;