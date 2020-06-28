import React, { useState } from "react";
import "./MainContent.styles.scss";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import SubHeading from "../SubHeading/SubHeading";
import TableContent from "../TableContent/TableContent";

const MainContent = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value);

  return (
    <div className="main-content">
      <Container maxWidth="false">
        <div className="heading mt-5">
          <Typography variant="h4">Upcoming Meetings</Typography>
        </div>
        <SubHeading value={value} handleChange={handleChange} />
        {value === 0 ? <TableContent /> : <h1>yohai</h1>}
      </Container>
    </div>
  );
};

export default MainContent;
