import GradientText from '@/components/CustomComponent/Text/GradientText'
import ComponentWrapper from '@/components/MainContent'
import ComponentPreview from '@/components/MainContent/PreviewCode'
import { Component } from '@/config/components'
import { CodeStringConvertor } from '@/config/codestring'
import React from 'react'
import GradientTextDemo from '@/components/ComponentShowcase/Text/GradientText'

const page = () => {
  return (
    <>
    {Component.Text.filter(component => component.name === "Gradient").map((component) => (
      <ComponentWrapper
        key={component.title} // Assuming each component has a unique id
        title={component.title}
        description={component.description}
        installCommand={component.installCommand}
        sourceUrl={component.sourceUrl}
        packageName={component.packageName}
      >
        <ComponentPreview codestring={CodeStringConvertor(component.filePath)} showcasestring={CodeStringConvertor(component.showcasePath)} props={component.PropsDetails}>
        <GradientTextDemo/>
        </ComponentPreview>
      </ComponentWrapper>
    ))}
     </>
  )
}
export default page
