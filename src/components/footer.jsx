import * as React from "react"
import endertechLogo from '../../static/endertech-logo.png'
import {
  footerStyle,
  copyright,
  blurb,
  logos,
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={blurb}>
        <div className={logos} >
        <img src={endertechLogo} alt="endertech logo" style={{height: '25px', width: '25px'}}/>
        </div>
        <strong>EnderCloud</strong>
      </div>
      <div className={copyright}>
        Copyright &copy; {new Date().getFullYear()} · All rights reserved
      </div>
    </footer>
  )
}
