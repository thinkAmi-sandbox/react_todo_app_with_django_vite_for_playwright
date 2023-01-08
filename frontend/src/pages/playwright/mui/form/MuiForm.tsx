import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {Box, Snackbar, Stack, TextField} from "@mui/material";
import {MuiTextField} from "./MuiTextField";
import {MuiRadioGroup, RadioItem} from "./MuiRadioGroup";
import {MuiTextSelect, SelectItem} from "./MuiTextSelect";
import {MuiCheck} from "./MuiCheck";
import {MuiTextAreaAutosize} from "./MuiTextAreaAutosize";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {MuiDateTimePicker} from "./MuiDateTimePicker";
import axios from "axios";
import {CsrfToken} from "./CsrfToken";
import {SyntheticEvent, useState} from "react";
import {MuiSelect} from "./MuiSelect";

export type FormInput = {
  muiTextField: string
  muiRadio: string
  muiTextSelect: string
  muiSelect: string
  muiCheck: boolean
  muiDateTimePicker: Date
  muiTextAreaAutosize: string
}

const colors: RadioItem[] = [
    { label: '赤', value: 'red' },
    { label: '黄', value: 'yellow' }
]

const shops: SelectItem[] = [
  { label: 'スーパー', value: 'supermarket' },
  { label: '産直所', value: 'farmersMarket' },
]

const purposes: SelectItem[] = [
  { label: '家庭用', value: 'household' },
  { label: '贈答品', value: 'farmersMarket' },
]

export function MuiForm() {
  // for snackbar
  const [open, setOpen] = useState<boolean>(false)
  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    setOpen(false)
  }

  const {control, handleSubmit, setValue} = useForm<FormInput>({
    // defaultValues: {
    //   muiTextField: '',
    //   muiTextSelect: '',
    //   muiSelect: '',
    //   // muiTextField: '王林',
    //   // muiRadio: '',
    //   muiTextAreaAutosize: '',
    //   // muiDateTimePicker: new Date()
    // }
  })

  // const onSubmit: SubmitHandler<FormInput> = (data) => {
  const onSubmit: SubmitHandler<FormInput> = async (
    {
      muiTextField,
      muiRadio,
      muiTextSelect,
      muiSelect,
      muiCheck,
      muiDateTimePicker,
      muiTextAreaAutosize
    }) => {

    // CSRF
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'

    await axios.post('/api/playwright/mui/', {
      muiTextField,
      muiRadio,
      muiTextSelect,
      muiSelect,
      muiCheck,
      muiDateTimePicker,
      muiTextAreaAutosize
    })

    setOpen(true)
  }

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CsrfToken />

          <Stack spacing={3}>
            <MuiTextField control={control} />

            <MuiRadioGroup control={control} items={colors} />

            <MuiTextSelect control={control} items={shops} />

            <MuiSelect control={control} items={purposes} />

            <MuiCheck control={control} />

            <MuiTextAreaAutosize control={control} />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MuiDateTimePicker control={control} setValue={setValue} />
            </LocalizationProvider>

            <input id="submit" type="submit" />
          </Stack>

        </form>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message='送信しました'
      />
    </>
  )
}