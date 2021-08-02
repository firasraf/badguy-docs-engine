import React from "react"

import getCloudflareDocsConfig from "../utils/get-cloudflare-docs-config"

import DocsTitle from "./docs-title"
import DocsSearch from "./docs-search"
import AccessibleSVG from "./accessible-svg"
import ThemeToggle from "./theme-toggle"

const DocsToolbar = () => {
  const { contentRepo }  = getCloudflareDocsConfig()

  return (
    <div className="DocsToolbar">
      <div className="DocsToolbar--search">
        <DocsSearch/>
      </div>

      <div className="DocsToolbar--tools">
        <div className="DocsToolbar--tools-icon-item">
          <div className="Tooltip---root">
            <div className="DocsToolbar--tools-icon-item-content">
              
            </div>

            <span className="Tooltip" role="tooltip" position="bottom-end">
              Visit {DocsTitle()} on GitHub
            </span>
          </div>
        </div>

        <div className="DocsToolbar--tools-spacer"/>

        <div className="DocsToolbar--theme-toggle">
          <ThemeToggle/>
        </div>
      </div>
    </div>
  )
}

export default DocsToolbar
