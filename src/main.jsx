import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Button from "./ui/atoms/button/button.jsx";
import Icon from "./ui/atoms/icon/icon.jsx";
import {MdEdit} from "react-icons/md";
import Text from "./ui/atoms/text/text.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button style="primary" color="blue">
        <Icon icon={MdEdit}/>
        <Text color='white'>Hola que tal</Text></Button>
      <Button style="rounded" color="red">Hello World</Button>
  </StrictMode>,
)
