import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface DateInputProps {
  name: string;
  label: string;
}

const DateInput = ({ name, label }: DateInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DesktopDatePicker
          label={label}
          inputFormat="MM/DD/YYYY"
          {...field}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
      )}
    />
  );
};

export default DateInput;
