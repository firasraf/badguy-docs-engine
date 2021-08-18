import React from "react"

import DocsNavLogoLockup from "./docs-nav-logo-lockup"

const DocsSidebarHeaderSection = () => (
  <div className="DocsSidebar--section DocsSidebar--header-section">
    <a className="DocsSidebar--cloudflare-logo-link DocsSidebar--link" href="/">
      <DocsNavLogoLockup
        text={(
          <>
            <span data-text="Bad Guy">Bad Guy</span>
            <span>&nbsp;</span>
            <span data-text="Express">Express</span>
          </>
        )}
      />
    </a>
  </div>
)

export default DocsSidebarHeaderSection
