import React from 'react';

import ComponentWrapper from '@/components/MainContent';
import ComponentPreview from '@/components/MainContent/PreviewCode';
import { Component } from '@/config/components';
import { CodeStringConvertor } from '@/config/codestring';
import ParticlesShowcase from '@/components/ComponentShowcase/Background/Particles';

const page = () => {
  return (
    <>
      {Component.Background.filter(
        (component) => component.name === 'Particles'
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
            showcasestring={CodeStringConvertor(component.showcasePath)}
          >
            <ParticlesShowcase />
          </ComponentPreview>
        </ComponentWrapper>
      ))}
    </>
  );
};

export default page;
