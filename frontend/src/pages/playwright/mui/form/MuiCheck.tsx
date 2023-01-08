import {Checkbox, FormControl, FormControlLabel, FormHelperText} from "@mui/material";
import {Control, Controller} from "react-hook-form";
import {FormInput} from "./MuiForm";

type Props = {
  control: Control<FormInput>
}

export const MuiCheck = ({control}: Props): JSX.Element => {
  return (
    <>
      <FormControl>
        <Controller name="muiCheck"
                    defaultValue={false}
                    control={control}
                    render={({field, fieldState: {error}}) => (
                      <>
                        <FormControlLabel {...field}
                          label="在庫あり"
                          control={<Checkbox id="mui_checkbox" />}
                        />
                        <FormHelperText error={!!error?.message}>
                          {error?.message}
                        </FormHelperText>
                      </>
                    )}
        />
      </FormControl>
    </>
  )
}