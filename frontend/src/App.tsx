import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Index} from "./pages/Index";
import {TaskDetail} from "./pages/TaskDetail";
import {TaskForm} from "./pages/TaskForm";
import {AfterRedirect} from "./pages/playwright/redirect/AfterRedirect";
import {Clipboard} from "./pages/playwright/clipboard/Clipboard";
import {Alert} from "./pages/playwright/alert/Alert";
import {I18nMain} from "./pages/playwright/i18n/I18nMain";
import {Increment} from "./pages/playwright/state/Increment";
import {MuiIndex} from "./pages/playwright/mui/MuiIndex";
import {MuiDataGrid} from "./pages/playwright/mui/MuiDataGrid";

function App() {
  return (
    <Routes>
      <Route path="tasks">
        <Route path="" element={<Index />} />
        <Route path="registration" element={<TaskForm />} />
        <Route path=":taskId" element={<TaskDetail />} />
      </Route>

      <Route path="playwright">
        <Route path="react">
          <Route path="redirect" >
            <Route path="from" element={<Navigate to="/playwright/react/redirect/to" replace />} />
            <Route path="to" element={<AfterRedirect />} />
          </Route>
          <Route path="clipboard" element={<Clipboard />} />
          <Route path="alert" element={<Alert />} />
          <Route path="i18n" element={<I18nMain />} />
          <Route path="state" element={<Increment />} />

          <Route path="mui" element={<MuiIndex />} />
          <Route path="mui-datagrid" element={<MuiDataGrid />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="tasks" replace />} />
    </Routes>
  )
}

export default App
