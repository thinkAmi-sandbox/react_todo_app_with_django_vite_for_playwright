import {MuiSnackbar} from "./MuiSnackbar"
import {MuiModal} from "./MuiModal";
import {MuiForm} from "./form/MuiForm";

export const MuiIndex = () => {
  return (
    <>
      <h1>Mui Component</h1>

      <MuiForm />
      <MuiModal />
      <MuiSnackbar />
    </>
  )
}