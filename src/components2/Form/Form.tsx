import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TextField, Button } from "@mui/material";
import { useForm, Controller, FormProvider } from "react-hook-form";
import dayjs from "dayjs";

import DateInput from "../DateInput";
import { DataState } from "../../types";

interface FormData {
  from: dayjs.Dayjs;
  to: dayjs.Dayjs;
  ppd: number;
}

const dateFormat = "YYYY-MM-DD";

interface FormProps {
  addData: (state: DataState) => void;
}

const Form = ({ addData }: FormProps) => {
  const form = useForm<FormData>();

  const { handleSubmit, register } = form;
//@ts-ignore
  const submitHandler = handleSubmit((values) => {
    const ppd = values.ppd || 5;
    const to = dayjs(values.to).format(dateFormat);
    const from = dayjs(values.from).format(dateFormat);

    addData({
      from,
      to,
      ppd: ppd,
      added: dayjs(new Date()).format(dateFormat),
      currentPrice: dayjs(to).diff(from, "days") * ppd,
    });
  });

  return (
    <Box
      width="400px"
      maxWidth={"100%"}
      p="20px"
      borderRadius={"4px"}
      boxShadow={1}
      mx="auto"
      bgcolor={"#ffffff"}
    >
      <FormProvider {...form}>
        <form onSubmit={submitHandler}>
          <Box display="flex" flexDirection={"column"} gap="30px">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateInput name="from" label="From" />
              <DateInput name="to" label="To" />
              <TextField
                type="number"
                label="Price per day"
                {...register("ppd")}
                fullWidth
              />
            </LocalizationProvider>
            <Button fullWidth variant="outlined" type="submit">
              Complete
            </Button>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};

export default Form;
