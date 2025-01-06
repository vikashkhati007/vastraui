import GlidingRadioButton from '@/components/CustomComponent/Other/GliderRadio'
import PathAnimation from '@/components/CustomComponent/Other/PathTrace'
import ComponentWrapper from '@/components/MainContent'
import ComponentPreview from '@/components/MainContent/PreviewCode'
import { Component } from '@/config/components'
import { CodeStringConvertor } from '@/config/codestring'
import React from 'react'

const page = () => {
  return (
    <>
    {Component.Other.filter(component => component.name === "PathAnimation").map((component) => (
      <ComponentWrapper
        key={component.title} // Assuming each component has a unique id
        title={component.title}
        description={component.description}
        installCommand={component.installCommand}
        sourceUrl={component.sourceUrl}
        packageName={component.packageName}
      >
        <ComponentPreview codestring={CodeStringConvertor(component.filePath)} showcasestring=''>
        <PathAnimation/>
        </ComponentPreview>
      </ComponentWrapper>
    ))}
     </>
  )
}
export default page


