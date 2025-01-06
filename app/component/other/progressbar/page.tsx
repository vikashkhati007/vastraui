import ComponentWrapper from '@/components/MainContent'
import ComponentPreview from '@/components/MainContent/PreviewCode'
import { Component } from '@/config/components'
import { CodeStringConvertor } from '@/config/codestring'
import React from 'react'
import AdvancedCircularProgress from '@/components/CustomComponent/Other/ProgressBar'
import ProgressBar from '@/components/ComponentShowcase/Other/ProgressBar'

const page = () => {
  return (
    <>
    {Component.Other.filter(component => component.name === "ProgressBar").map((component) => (
      <ComponentWrapper
        key={component.title} // Assuming each component has a unique id
        title={component.title}
        description={component.description}
        installCommand={component.installCommand}
        sourceUrl={component.sourceUrl}
        packageName={component.packageName}
      >
        <ComponentPreview codestring={CodeStringConvertor(component.filePath)} showcasestring={CodeStringConvertor(component.showcasePath)} props={component.PropsDetails}>
<ProgressBar/>
        </ComponentPreview>
      </ComponentWrapper>
    ))}
     </>
  )
}
export default page


