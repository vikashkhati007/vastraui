import ShimmerButton from '@/components/CustomComponent/Button/ShimmerButton'
import ComponentWrapper from '@/components/MainContent'
import ComponentPreview from '@/components/MainContent/PreviewCode'
import { Component } from '@/config/components'
import { CodeStringConvertor } from '@/config/codestring'
import React from 'react'
import ShimmerButtonShowcase from '@/components/ComponentShowcase/Button/ShimmerButton'

const page = () => {
  return (
    <>
    {Component.Button.filter(component => component.name === "Shimmer").map((component) => (
      <ComponentWrapper
        key={component.title} // Assuming each component has a unique id
        title={component.title}
        description={component.description}
        installCommand={component.installCommand}
        sourceUrl={component.sourceUrl}
        packageName={component.packageName}
      >
        <ComponentPreview codestring={CodeStringConvertor(component.filePath)} showcasestring={CodeStringConvertor(component.showcasePath)} props={component.PropsDetails} >
        <ShimmerButtonShowcase/>
        </ComponentPreview>
      </ComponentWrapper>
    ))}
     </>
  )
}
export default page

