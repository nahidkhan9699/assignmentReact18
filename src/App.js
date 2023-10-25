import React from "react";
import { Card,CardContent } from "@mui/material";
import { Assignreplace } from "./components/Assignreplace";

function App() {
  return (
    <Card sx={{bgcolor:"rgb(118,135,155)", padding:3}}>
      <CardContent>

         <Assignreplace/>
      </CardContent>
    </Card>
  );
}

export default App;
