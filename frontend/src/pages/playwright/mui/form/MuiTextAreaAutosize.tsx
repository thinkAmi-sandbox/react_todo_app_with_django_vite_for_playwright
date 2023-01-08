import {TextareaAutosize} from "@mui/material";
import {Control, Controller} from "react-hook-form";
import {FormInput} from "./MuiForm";

type Props = {
  control: Control<FormInput>
}

export const MuiTextAreaAutosize = ({control}: Props) => {
  return (
    <>
      <Controller
        control={control}
        name="muiTextAreaAutosize"
        render={({field}) =>
          (
            <TextareaAutosize
              id="mui_textarea"
              {...field}
            />
          )}
      />
    </>
  )
}