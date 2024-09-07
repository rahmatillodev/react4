import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const {t} = useTranslation("global")
  return (
    <div>
        <h1>{t("header")}</h1>
    </div>
  )
}
export default Header