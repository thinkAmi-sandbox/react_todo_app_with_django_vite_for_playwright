import {TextField} from "@mui/material";
import {Control, Controller} from "react-hook-form";
import {FormInput} from "./MuiForm";
import {UseFormSetValue} from "react-hook-form/dist/types/form";
import {DateTimePicker} from "@mui/x-date-pickers";

type Props = {
  control: Control<FormInput>
  setValue: any
}

export const MuiDateTimePicker = ({control, setValue}: Props) => {
  return (
    <Controller
        control={control}
        name="muiDateTimePicker"
        render={({field}) =>
          (
            <DateTimePicker
              {...field}
              label="input"
              mask="____/__/__ __:__:__"
              inputFormat="yyyy/MM/dd HH:mm:ss"
              renderInput={(props) => <TextField id="mui_datetime_picker" {...props} />}
              onChange={(newValue) => {
                console.log(newValue)
                setValue('muiDateTimePicker', newValue)
              }}
            />
          )}
      />
  )
}