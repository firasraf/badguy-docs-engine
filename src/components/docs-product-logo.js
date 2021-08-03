import React from "react"
import getCloudflareDocsConfig from "../utils/get-cloudflare-docs-config"
import AccessibleSVG from "./accessible-svg"

export default () => {
  const { product, productLogoPathD }  = getCloudflareDocsConfig()

  return (
    <AccessibleSVG title={`Bad Guy Express`} viewBox="0 0 48 48">
      <path d={productLogoPathD}/>
    </AccessibleSVG>
  )
}
