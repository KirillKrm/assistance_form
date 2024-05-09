import * as React from 'react'

//TODO FinancialForm
export default function FinancialForm() {
  return (
    <>
      <h1 className={styles.form__title}>Види допомоги</h1>
      <span className={styles.form__span}>Ви можете змінити вид допомоги</span>
    </>
  )
}

const styles = {
  form__title: `
    text-[68px]
    font-[Geometria-ExtraBold]
    leading-none
  `,
  form__span: `
    mt-4
    font-[Geometria-Light]
    text-lg
  `,
}
