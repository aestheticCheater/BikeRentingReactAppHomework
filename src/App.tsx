import { Box, Typography } from "@mui/material";
import { Form, Table } from "./components2";
import { useData } from "./hooks";

const App = () => {
  const [data, setData] = useData();

  return (
    <Box bgcolor="#f6f3a4" minHeight={"100vh"} pt="50px">
      <Typography variant="h3" textAlign={"center"} mb="30px">
        Bike Renting App
      </Typography>
      <Form addData={(state) => setData((oldData) => [...oldData, state])} />

      <Table rows={data} />
    </Box>
  );
};

export default App;
