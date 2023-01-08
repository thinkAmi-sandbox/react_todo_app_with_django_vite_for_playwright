import {Control, Controller} from "react-hook-form";
import {FormInput} from "./MuiForm";
import {FormControl, FormLabel, FormControlLabel, FormHelperText, Radio, RadioGroup} from "@mui/material";

export type RadioItem = {
  label: string
  value: string
}

type Props = {
  control: Control<FormInput>
  items: RadioItem[]
}

export const MuiRadioGroup = ({control, items}: Props): JSX.Element => {
  return (
    <>
      <FormControl>
        <FormLabel>色</FormLabel>
        <Controller
          name="muiRadio"
          control={control}
          render={({field, fieldState: {error}}) => (
            <>
              <RadioGroup>
                {items.map((radio: RadioItem) =>
                  (
                    <FormControlLabel {...field}
                                      key={radio.value}
                                      id={`mui_radio_${radio.value}`}
                                      label={radio.label}
                                      value={radio.value}
                                      control={<Radio />}
                    />
                  )
                )}
              </RadioGroup>
            </>
          )}
        />
      </FormControl>
    </>
  )
}