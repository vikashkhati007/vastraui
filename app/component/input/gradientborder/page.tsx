import ComponentWrapper from '@/components/MainContent'
import ComponentPreview from '@/components/MainContent/PreviewCode'
import { Component } from '@/config/components'
import React from 'react'
import GradientSearchInputDemo from '@/components/ComponentShowcase/Input/GradientInput'
import { CodeStringConvertor } from '@/config/codestring'

const Page = () => {
  return (
    <>
      {Component.Input.filter(component => component.name === "Input Gradient").map((component) => (
        <ComponentWrapper
          key={component.title}
          title={component.title}
          description={component.description}
          installCommand={component.installCommand}
          sourceUrl={component.sourceUrl}
          packageName={component.packageName}
        >
          <ComponentPreview codestring={CodeStringConvertor(component.filePath)} showcasestring={CodeStringConvertor(component.showcasePath)} props={component.PropsDetails}>
            <GradientSearchInputDemo/>
          </ComponentPreview>
        </ComponentWrapper>
      ))}
    </>
  )
}

export default Page

