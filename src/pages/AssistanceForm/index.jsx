import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import UserDetailsForm from './components/UserDetailsForm'
import FinancialForm from './components/FinancialForm'

export default function AssistanceForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    surname: '',
    organization: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    state: '',
    address: '',
    postal: '',
  })
  const [errors, setErrors] = React.useState({})

  const handleSetFormData = (data) => setFormData(data)

  const handleSubmit = (e) => {
    e.preventDefault()

    //TODO Validation logic
    const newErrors = {}

    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Будь ласка, введіть дійсний номер телефону'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Будь ласка, введіть дійсну адресу електронної пошти'
    }

    const postalRegex = /^[0-9]{5}$/
    if (!postalRegex.test(formData.postal)) {
      newErrors.postal = 'Введіть дійсний поштовий індекс (5 цифр)'
    }

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `Це поле є обов'язковим`
      }
    })

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData)
    }
  }

  return (
    <div className={styles.container}>
      <IconButton className={styles.container__close}>
        <CloseIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <form
        className={styles.container__form}
        onSubmit={handleSubmit}
        noValidate
      >
        <UserDetailsForm
          formData={formData}
          handleSetFormData={handleSetFormData}
          errors={errors}
        />
        <FinancialForm />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const styles = {
  container: `
    flex
    flex-col
    px-12
    pt-10
    bg-blue-900
    bg-opacity-60
    backdrop-blur
    font-[Geometria-Bold]
  `,
  container__close: `
    flex
    self-end
    w-min
  `,
  container__form: `
    flex
    flex-col
    items-center
    mt-2
    pt-12
    px-36
    h-[1000px]
    rounded-2xl
    bg-white
  `,
}
