import * as React from 'react'
import MuiToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { styled } from '@mui/material/styles'
import MuiToggleButton from '@mui/material/ToggleButton'

const ToggleButtonGroup = styled(MuiToggleButtonGroup)({
  '& .MuiToggleButtonGroup-grouped': {
    border: '2px solid',
    borderColor: 'rgb(54,59,93)',
  },
})

const ToggleButton = styled(MuiToggleButton)({
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'white',
    backgroundColor: 'rgb(54,59,93)',
  },
})

const InputGroup = ({ label, id, required, value, onChange, error }) => (
  <div className={styles.inputGroup}>
    <label htmlFor={id}>{label}</label>
    <input
      className={styles.inputGroup__input}
      type="text"
      id={id}
      required={required}
      value={value}
      onChange={onChange}
    />
    {error && <span className={styles.errorMessage}>{error}</span>}
  </div>
)

export default function UserDetailsForm({
  formData,
  handleSetFormData,
  errors,
}) {
  const [alignment, setAlignment] = React.useState('physical')

  const handleChangeToggle = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  const handleChangeFormData = (e) => {
    const { id, value } = e.target
    handleSetFormData({ ...formData, [id]: value })
  }

  return (
    <>
      <h1 className={styles.form__title}>Заповніть форму</h1>
      <ToggleButtonGroup
        classes={{
          root: styles.form__ToggleButtonGroup,
        }}
        value={alignment}
        exclusive
        onChange={handleChangeToggle}
        aria-label="Subject"
      >
        <ToggleButton
          classes={{
            root: styles.toggleButtonGroup__toggleButton,
          }}
          value="physical"
        >
          <span className={styles.toggleButton__text}>Фіз. особа</span>
        </ToggleButton>
        <ToggleButton
          classes={{
            root: styles.toggleButtonGroup__toggleButton,
          }}
          value="juridical "
        >
          <span className={styles.toggleButton__text}>Юр. особа</span>
        </ToggleButton>
      </ToggleButtonGroup>
      <div className={styles.form__columns}>
        <div className={styles.columns__leftColumn}>
          <div className="flex gap-6">
            <InputGroup
              label="Ім'я"
              id="name"
              required
              value={formData.name}
              onChange={handleChangeFormData}
              error={errors.name}
            />
            <InputGroup
              label="Прізвище"
              id="surname"
              required
              value={formData.surname}
              onChange={handleChangeFormData}
              error={errors.surname}
            />
          </div>
          <InputGroup
            label="Назва компанії, організації"
            id="organization"
            required
            value={formData.organization}
            onChange={handleChangeFormData}
            error={errors.organization}
          />
          <InputGroup
            label="Email-адрес"
            id="email"
            required
            value={formData.email}
            onChange={handleChangeFormData}
            error={errors.email}
          />
          <InputGroup
            label="Номер телефону"
            id="phone"
            required
            value={formData.phone}
            onChange={handleChangeFormData}
            error={errors.phone}
          />
        </div>
        <div className={styles.columns__rightColumn}>
          <InputGroup
            label="Країна"
            id="country"
            required
            value={formData.country}
            onChange={handleChangeFormData}
            error={errors.country}
          />
          <div className="flex gap-6">
            <InputGroup
              label="Місто"
              id="city"
              required
              value={formData.city}
              onChange={handleChangeFormData}
              error={errors.city}
            />
            <InputGroup
              label="Штат, район"
              id="state"
              required
              value={formData.state}
              onChange={handleChangeFormData}
              error={errors.state}
            />
          </div>
          <InputGroup
            label="Адреса"
            id="address"
            required
            value={formData.address}
            onChange={handleChangeFormData}
            error={errors.address}
          />
          <InputGroup
            label="Поштовий індекс"
            id="postal"
            required
            value={formData.postal}
            onChange={handleChangeFormData}
            error={errors.postal}
          />
        </div>
      </div>
    </>
  )
}

const styles = {
  form__title: `
    text-[68px]
    font-[Geometria-ExtraBold]
    leading-none
  `,
  form__ToggleButtonGroup: `
    mt-6
    mb-10
  `,
  toggleButtonGroup__toggleButton: `
    w-26
    h-12
  `,
  toggleButton__text: `
    mx-4
    font-[Geometria-Bold]
    normal-case
  `,
  form__columns: `
    flex
    justify-between
    w-full
    text-[rgba(0,0,0,0.4)]
    mb-[72px]
  `,
  columns__leftColumn: `
    flex
    flex-col
    w-[450px]
    gap-8
  `,
  columns__rightColumn: `
    flex
    flex-col
    w-[450px]
    gap-8
  `,
  inputGroup: `
    flex
    flex-col
    w-full
    relative
  `,
  inputGroup__input: `
    flex
    flex-col
    w-full
    h-10
    px-2
    bg-[rgba(243,247,250)]
    text-primary
    rounded
    outline-none

    focus:border-2
    focus:border-primary
  `,
  errorMessage: `
    absolute
    -bottom-6
    text-red-500
  `,
}
