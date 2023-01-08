import {Control, Controller} from "react-hook-form";
import {FormInput} from "./MuiForm";
import {MenuItem, Select} from "@mui/material"

export type SelectItem = {
  label: string
  value: string
}

type Props = {
  control: Control<FormInput>
  items: SelectItem[]
}

export const MuiSelect = ({control, items}: Props): JSX.Element => {
  return (
    <>
      <Controller control={control}
                  name="muiSelect"
                  defaultValue=""
                  render={({field, fieldState: {error}}) => (
                    <>
                      <Select {...field}
                                 id="mui_select"
                                 sx={{width: 200}}
                                 label="目的">
                        {items.map((item) => (
                          <MenuItem key={item.value} id={`mui_select_${item.value}`} value={item.value}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </>
                  )}
        />
    </>
  )
}