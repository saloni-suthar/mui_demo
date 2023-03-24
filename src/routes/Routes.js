import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccordionContent from '../container/pages/accordion/AccordionContent';
import PrimaryButtonPage from '../container/pages/button/PrimaryButtonPage';
import Checkboxpage from '../container/pages/checkbox/Checkboxpage';
import Grid from '../container/pages/grid/Grid';
import HeaderDrop from '../container/pages/headerdropdown/HeaderDrop';
import InputSimple from '../container/pages/input/InputSimple';
import InputDropDown from '../container/pages/inputdropdown/InputDropDown';
import ModalDetails from '../container/pages/modal/ModalDetails';
import RadioPage from '../container/pages/radio/RadioPage';
import SwitchBtn from '../container/pages/switchbtn/SwitchBtn';
import TabContent from '../container/pages/tabcontent/TabContent';
import ToggleBtn from '../container/pages/togglebtn/ToggleBtn';
import UploadFileBtn from '../container/pages/uploadfile/UploadFileBtn';




const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="checkbox" element={<Checkboxpage />} />
        <Route path="radiobox" element={<RadioPage />} />
        <Route path="primary-button" element={<PrimaryButtonPage />} />
        <Route path="header-drop" element={<HeaderDrop />} />
        <Route path="input-dropdown" element={<InputDropDown />} />
        <Route path="grid" element={<Grid />} />
        <Route path="inputsimple" element={<InputSimple />} />
        <Route path="upload-file-btn" element={<UploadFileBtn />} />
        <Route path="toggle-btn" element={<ToggleBtn />} />
        <Route path="switch-btn" element={<SwitchBtn />} />
        <Route path="tab-content" element={<TabContent />} />
        <Route path="accordion-content" element={<AccordionContent />} />
        <Route path="modal-details" element={<ModalDetails />} />
   
      </Routes>
    </BrowserRouter>
  )
}

export default Routers;