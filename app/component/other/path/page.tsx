import React from 'react';

import PathAnimation from '@/components/CustomComponent/Other/PathTrace';
import ComponentWrapper from '@/components/MainContent';
import ComponentPreview from '@/components/MainContent/PreviewCode';
import { Component } from '@/config/components';
import { CodeStringConvertor } from '@/config/codestring';

const page = () => {
  return (
    <>
      {Component.Other.filter(
        (component) => component.name === 'PathAnimation'
      ).map((component) => (
        <ComponentWrapper
          key={component.title} // Assuming each component has a unique id
          description={component.description}
          installCommand={component.installCommand}
          packageName={component.packageName}
          sourceUrl={component.sourceUrl}
          title={component.title}
        >
          <ComponentPreview
            codestring={CodeStringConvertor(component.filePath)}
            showcasestring=""
          >
            <PathAnimation />
          </ComponentPreview>
        </ComponentWrapper>
      ))}
    </>
  );
};

export default page;
