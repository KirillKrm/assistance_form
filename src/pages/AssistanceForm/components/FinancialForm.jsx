import * as React from 'react'
import classNames from 'classnames'
import BackHandIcon from '@mui/icons-material/BackHand'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import CheckroomIcon from '@mui/icons-material/Checkroom'
import FavoriteIcon from '@mui/icons-material/Favorite'

function AssistanceButton({ name, icon, isActive, onClick }) {
  const buttonIconStyle = classNames(styles.button__icon, {
    'bg-[rgb(156,93,154)]': isActive,
    'bg-white border-2 border-[rgb(197,213,230)] ': !isActive,
  })
  const buttonTextStyle = classNames(styles.button__text, {
    'text-[rgb(54,59,93)]': isActive,
    'text-[rgb(197,213,230)]': !isActive,
  })

  return (
    <button type="button" className={styles.options__button} onClick={onClick}>
      <div className={buttonIconStyle}>{icon}</div>
      <span className={buttonTextStyle}>{name}</span>
    </button>
  )
}

export default function FinancialForm() {
  const [activeAssistance, setAssistance] = React.useState('financial')

  const handleClickAssistance = (data) => {
    setAssistance(data)
  }

  return (
    <>
      <h1 className={styles.form__title}>Види допомоги</h1>
      <span className={styles.form__span}>Ви можете змінити вид допомоги</span>
      <div className={styles.form__assistance}>
        <div className={styles.assistance__options}>
          <AssistanceButton
            name="Зробити"
            icon={
              <BackHandIcon
                sx={{ fontSize: 50 }}
                style={{
                  color:
                    activeAssistance === 'work' ? 'white' : 'rgb(197,213,230)',
                }}
              />
            }
            isActive={activeAssistance === 'work'}
            onClick={() => handleClickAssistance('work')}
          />
          <AssistanceButton
            name="Фінансова допомога"
            icon={
              <AccountBalanceWalletIcon
                sx={{ fontSize: 50 }}
                style={{
                  color:
                    activeAssistance === 'financial'
                      ? 'white'
                      : 'rgb(197,213,230)',
                }}
              />
            }
            isActive={activeAssistance === 'financial'}
            onClick={() => handleClickAssistance('financial')}
          />
          <AssistanceButton
            name="Матеріальна допомога"
            icon={
              <CheckroomIcon
                sx={{ fontSize: 50 }}
                style={{
                  color:
                    activeAssistance === 'material'
                      ? 'white'
                      : 'rgb(197,213,230)',
                }}
              />
            }
            isActive={activeAssistance === 'material'}
            onClick={() => handleClickAssistance('material')}
          />
          <AssistanceButton
            name="Волонтерство"
            icon={
              <FavoriteIcon
                sx={{ fontSize: 50 }}
                style={{
                  color:
                    activeAssistance === 'volunteering'
                      ? 'white'
                      : 'rgb(197,213,230)',
                }}
              />
            }
            isActive={activeAssistance === 'volunteering'}
            onClick={() => handleClickAssistance('volunteering')}
          />
        </div>
        <div className={styles.assistance__popper}>
          <div className={styles.popper__payment}>
            <span>Спосіб оплати</span>
            <div className={styles.payment__methods}>
              <div className={styles.methods__methodCard}>
                <span>Карта Visa/MasterCard</span>
              </div>
              <div className={styles.methods__methodCard}>
                <span>Приват24</span>
              </div>
              <div className={styles.methods__methodCard}>
                <span>Термінали України</span>
              </div>
              <div className={styles.methods__methodCard}>
                <span>WebMoney</span>
              </div>
              <div className={styles.methods__methodCard}>
                <span>PayPal</span>
              </div>
            </div>
          </div>
          <div className={styles.popper__card}>
            <span>Введіть наступні данні</span>
            <div className={styles.card__cardDetails}></div>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  form__title: `
    text-center
    text-[68px]
    font-[Geometria-ExtraBold]
    leading-none
  `,
  form__span: `
    mt-4
    font-[Geometria-Light]
    text-lg
  `,
  form__assistance: `
    flex
    flex-col
    w-full
    mt-10
  `,
  assistance__options: `
    flex
    w-full
    justify-around
    mb-6
  `,
  options__button: `
    flex
    max-w-min
    items-center
    font-[Geometria-ExtraBold]
    text-left
    rounded-xl

    hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]
  `,
  button__icon: `
    flex
    shrink-0
    w-[82px]
    h-[82px]
    justify-center
    items-center
    rounded-xl
  `,
  button__text: `
    hidden
    mx-4

    xl:block
  `,
  assistance__popper: `
    flex
    flex-col
    justify-between
    gap-5
    w-full
    px-5
    pt-3
    pb-5
    rounded-2xl
    border-2
    border-[rgb(197,213,230)]

    xl:flex-row
    xl:gap-5
  `,
  popper__payment: `
    flex
    flex-col
    gap-2
  `,
  payment__methods: `
    grid
    grid-cols-2
    gap-6
    text-sm

    lg:grid-cols-3
  `,
  methods__methodCard: `
    flex
    flex-col
    max-w-[184px]
    h-[88px]
    p-2
    justify-center
    items-center
    text-center
    items-end
    rounded-lg
    bg-[rgb(197,213,230)]
  `,
  popper__card: `
    flex
    flex-col
    max-w-96
    gap-2

    lg:w-96
  `,
  card__cardDetails: `
    flex
    w-full
    h-[200px]
    rounded-xl
    bg-[rgb(197,213,230)]
  `,
}
