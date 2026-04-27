import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Button from "./ui/atoms/button/button.jsx";
import Icon from "./ui/atoms/icon/icon.jsx";
import {MdEdit, MdList, MdLocationOn, MdMap} from "react-icons/md";
import Text from "./ui/atoms/text/text.jsx";
import Link from "./ui/atoms/link/link.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button style="primary" color="blue">
        <Icon icon={MdEdit}/>
        <Text color='white'>Hola que tal</Text></Button>
      <Button style="rounded" color="red">Hello World</Button>
      <Link href="/map" icon={MdMap} active>Map View</Link>
      <Link href="/incidents" icon={MdList}>Incident List</Link>
      <Link href="/resources" icon={MdLocationOn}>Resource Mgmt</Link>
  </StrictMode>,
)
