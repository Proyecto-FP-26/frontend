import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Button from "./ui/atoms/button/button.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button style="primary" color="blue">Hello World</Button>
      <Button style="rounded" color="red">Hello World</Button>
  </StrictMode>,
)
