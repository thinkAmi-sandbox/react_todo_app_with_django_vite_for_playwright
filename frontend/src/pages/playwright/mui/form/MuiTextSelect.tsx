import {Control, Controller} from "react-hook-form";
import {FormInput} from "./MuiForm";
import {MenuItem, TextField} from "@mui/material"

export type SelectItem = {
  label: string
  value: string
}

type Props = {
  control: Control<FormInput>
  items: SelectItem[]
}

export const MuiTextSelect = ({control, items}: Props): JSX.Element => {
  return (
    <>
      <Controller control={control}
                  name="muiTextSelect"
                  defaultValue=""
                  render={({field, fieldState: {error}}) => (
                    <>
                      <TextField {...field}
                                 id="mui_textfield_select"
                                 select
                                 sx={{width: 200}}
                                 label="店舗"
                                 error={!!error?.message}
                                 helperText={error?.message}>
                        {items.map((item) => (
                          <MenuItem key={item.value} id={`mui_textfield_select_${item.value}`} value={item.value}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </>
                  )}
        />
    </>
  )
}