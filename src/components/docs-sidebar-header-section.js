import React from "react"

import DocsNavLogoLockup from "./docs-nav-logo-lockup"

const DocsSidebarHeaderSection = () => (
  <div className="DocsSidebar--section DocsSidebar--header-section">
    <a className="DocsSidebar--cloudflare-logo-link DocsSidebar--link" href="https://duckduckgo.com">
      <DocsNavLogoLockup
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

export default DocsSidebarHeaderSection
