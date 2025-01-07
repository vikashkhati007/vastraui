import React from 'react';

import ComponentWrapper from '@/components/MainContent';
import ComponentPreview from '@/components/MainContent/PreviewCode';
import { Component } from '@/config/components';
import GradientSearchInputDemo from '@/components/ComponentShowcase/Input/GradientInput';
import { CodeStringConvertor } from '@/config/codestring';

const Page = () => {
  return (
    <>
      {Component.Input.filter(
        (component) => component.name === 'Input Gradient'
      ).map((component) => (
        <ComponentWrapper
          key={component.title}
          description={component.description}
          installCommand={component.installCommand}
          packageName={component.packageName}
          sourceUrl={component.sourceUrl}
          title={component.title}
        >
          <ComponentPreview
            codestring={CodeStringConvertor(component.filePath)}
            props={component.PropsDetails}
            showcasestring={CodeStringConvertor(component.showcasePath)}
          >
            <GradientSearchInputDemo />
          </ComponentPreview>
        </ComponentWrapper>
      ))}
    </>
  );
};

export default Page;
