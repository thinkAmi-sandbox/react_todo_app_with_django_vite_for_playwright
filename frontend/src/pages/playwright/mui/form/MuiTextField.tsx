import {Control, Controller, FieldValues} from "react-hook-form";
import {FormInput} from "./MuiForm";
import {TextField} from "@mui/material";

type Props = {
  control: Control<FormInput>
}

export const MuiTextField = ({control}: Props): JSX.Element => {
  return (
    <>
      <Controller
        control={control}
        name="muiTextField"
        render={({field}) =>
          (
            <TextField
              {...field}
              type="text"
              label="品種名"
              id="mui_textfield"
            />
          )}
      />
    </>
  )
}