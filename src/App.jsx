import { useState } from 'react'
import './App.css'
import { ProjectButton } from './components/ProjectButton/ProjectButton'
import { ProjectCkeckbox } from './components/ProjectCheckbox/ProjectCheckbox'
import { ProjectInput } from './components/ProjectInput/ProjectInput'

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  })

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData)
  }

  const setData = (e) => {
     setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form className="flex max-w-md flex-col gap-4">
      <ProjectInput 
        id="email1" 
        label="Електронна адреса" 
        type="email"
        name="email"
        value={formData.email} 
        required={true} 
        placeholder="email@example.com"
        onChange={setData}
      />
      <ProjectInput 
        id="password1" 
        label="Пароль" 
        type="password" 
        required={true}
      />
      <ProjectCkeckbox 
        id="remember" 
        label="Запам'ятати мене" 
        isChecked={formData.remember} 
        checkHandler={setData}
      />
      <ProjectButton 
        label="Відправити" 
        onClick={handleClick}
      />
    </form>
  )
}

export default App
