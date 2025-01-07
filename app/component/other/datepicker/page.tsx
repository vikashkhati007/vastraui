import React from 'react';

import ComponentWrapper from '@/components/MainContent';
import ComponentPreview from '@/components/MainContent/PreviewCode';
import { Component } from '@/config/components';
import { CodeStringConvertor } from '@/config/codestring';
import DatePickerShowCase from '@/components/ComponentShowcase/Other/DatePicker';

const page = () => {
  return (
    <>
      {Component.Other.filter((component) => component.name === 'Date').map(
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
              <DatePickerShowCase />
            </ComponentPreview>
          </ComponentWrapper>
        )
      )}
    </>
  );
};

export default page;
