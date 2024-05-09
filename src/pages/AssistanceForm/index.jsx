import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
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

export default function AssistanceForm() {
  const [alignment, setAlignment] = React.useState('physical')

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  return (
    <div className={styles.container}>
      <IconButton className={styles.container__close}>
        <CloseIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <form className={styles.container__form}>
        <h1 className={styles.form__title}>Заповніть форму</h1>
        <ToggleButtonGroup
          classes={{
            root: styles.form__ToggleButtonGroup,
          }}
          value={alignment}
          exclusive
          onChange={handleChange}
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
              <div className={styles.inputGroup}>
                <label for="name">Ім'я</label>
                <input
                  className={styles.inputGroup__input}
                  type="text"
                  id="name"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label for="surname">Фамілія</label>
                <input
                  className={styles.inputGroup__input}
                  type="text"
                  id="surname"
                  required
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label for="organization">Назва компанії, організації</label>
              <input
                className={styles.inputGroup__input}
                type="text"
                id="organization"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label for="email">Email-адрес</label>
              <input
                className={styles.inputGroup__input}
                type="text"
                id="email"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label for="phone">Номер телефону</label>
              <input
                className={styles.inputGroup__input}
                type="text"
                id="phone"
                required
              />
            </div>
          </div>
          <div className={styles.columns__rightColumn}>
            <div className={styles.inputGroup}>
              <label for="country">Країна</label>
              <input
                className={styles.inputGroup__input}
                type="text"
                id="country"
                required
              />
            </div>
            <div className="flex gap-6">
              <div className={styles.inputGroup}>
                <label for="sity">Місто</label>
                <input
                  className={styles.inputGroup__input}
                  type="text"
                  id="sity"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label for="state">Штат, район</label>
                <input
                  className={styles.inputGroup__input}
                  type="text"
                  id="state"
                  required
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label for="address">Адреса</label>
              <input
                className={styles.inputGroup__input}
                type="text"
                id="address"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label for="postal">Поштовий індекс</label>
              <input
                className={styles.inputGroup__input}
                type="text"
                id="postal"
                required
              />
            </div>
          </div>
        </div>
        <h1 className={styles.form__title}>Види допомоги</h1>
        <span className="font-[Geometria-Light] text-lg mt-4">
          Ви можете змінити вид допомоги
        </span>
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
  `,
  inputGroup__input: `
    flex
    flex-col
    w-full
    h-10
    px-2
    bg-[rgba(243,247,250)]
    rounded
    outline-none

    focus:border-2
    focus:border-primary
  `,
}
