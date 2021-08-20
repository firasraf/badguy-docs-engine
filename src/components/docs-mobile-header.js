import React from "react"

import DocsNavLogoLockup from "./docs-nav-logo-lockup"

const DocsMobileHeader = () => (
  <div className="DocsMobileHeader">
    <a className="DocsMobileHeader--cloudflare-logo-link Link Link-without-underline" href="/">
      <DocsNavLogoLockup
        small={true}
        text={(
          <>
            <span data-text="Cloudflare">Bad Guy</span>
            <span>&nbsp;</span>
            <span data-text="Docs">Express</span>
          </>
        )}
      />
    </a>
  </div>
)

export default DocsMobileHeader
