import React from 'react';

import ComponentWrapper from '@/components/MainContent';
import ComponentPreview from '@/components/MainContent/PreviewCode';
import { Component } from '@/config/components';
import { CodeStringConvertor } from '@/config/codestring';
import ShimmerButtonShowcase from '@/components/ComponentShowcase/Button/ShimmerButton';

const page = () => {
  return (
    <>
      {Component.Button.filter((component) => component.name === 'Shimmer').map(
        (component) => (
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
              props={component.PropsDetails}
              showcasestring={CodeStringConvertor(component.showcasePath)}
            >
              <ShimmerButtonShowcase />
            </ComponentPreview>
          </ComponentWrapper>
        )
      )}
    </>
  );
};

export default page;
