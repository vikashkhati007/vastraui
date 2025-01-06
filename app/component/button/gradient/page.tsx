import ComponentWrapper from '@/components/MainContent'
import ComponentPreview from '@/components/MainContent/PreviewCode'
import { Component } from '@/config/components'
import { CodeStringConvertor } from '@/config/codestring'
import React from 'react'
import GradientButtonShowcase from '@/components/ComponentShowcase/Button/GradientButton'

const page = () => {
  return (
    <>
    {Component.Button.filter(component => component.name === "Gradient").map((component) => (
      <ComponentWrapper
        key={component.title} // Assuming each component has a unique id
        title={component.title}
        description={component.description}
        installCommand={component.installCommand}
        sourceUrl={component.sourceUrl}
        packageName={component.packageName}
      >
        <ComponentPreview codestring={CodeStringConvertor(component.filePath)} showcasestring={CodeStringConvertor(component.showcasePath!)} props={component.PropsDetails}>
      <GradientButtonShowcase/>
        </ComponentPreview>
      </ComponentWrapper>
    ))}
     </>
  )
}
export default page







