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
      {/* <nav className={links} aria-label="footer">
        <ul className={footerNavList}>
          <li className={footerNavListItem}>
            <a href="https://github.com/gatsbyjs/gatsby-starter-shopify">
              Source Code and Docs
            </a>
          </li>
          <li className={footerNavListItem}>
            <a href="https://www.gatsbyjs.com/cloud/">About Gatsby Cloud</a>
          </li>
          {process.env.GATSBY_DEMO_STORE === "true" && (
            <li className={footerNavListItem}>
              <a href="https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-shopify&utm_campaign=shopify-starter">
                <img
                  src="https://www.gatsbyjs.com/deploynow.png"
                  alt="Deploy to Gatsby Cloud"
                  height="38"
                  width="251"
                />
              </a>
            </li>
          )}
        </ul>
      </nav> */}
      <div className={copyright}>
        Copyright &copy; {new Date().getFullYear()} · All rights reserved
      </div>
    </footer>
  )
}
