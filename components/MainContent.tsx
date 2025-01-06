'use client'
import React, { ReactNode } from 'react'
import { Button } from "@nextui-org/button"
import { FaGithub } from "react-icons/fa"

interface ComponentWrapperProps {
  children: ReactNode
  title: string
  description: string
  installCommand: string
  storybookUrl?: string
  sourceUrl?: string
  stylesSourceUrl?: string
  packageName?: string
}

export default function ComponentWrapper({
  children,
  title,
  description,
  installCommand,
  storybookUrl,
  sourceUrl,
  stylesSourceUrl,
  packageName
}: ComponentWrapperProps) {
  return (
    <main className="flex-1 p-4 sm:p-6 overflow-auto">
      <div className="max-w-4xl mx-auto flex flex-col gap-3">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-default-500 mb-8">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {storybookUrl && (
            <Button
              as="a"
              href={storybookUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
              variant="flat"
              startContent={<span className="text-pink-500">S</span>}
            >
              Storybook
            </Button>
          )}
          {packageName && (
            <Button color="default" variant="flat">
              {packageName}
            </Button>
          )}
          {sourceUrl && (
            <Button
              as="a"
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="default"
              variant="flat"
              startContent={<FaGithub />}
            >
              Source
            </Button>
          )}
          {stylesSourceUrl && (
            <Button
              as="a"
              href={stylesSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="default"
              variant="flat"
              startContent={<FaGithub />}
            >
              Styles source
            </Button>
          )}
        </div>

        <div className="border border-divider rounded-lg p-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Installation</h2>
          <div className="bg-default-400/20 p-4 rounded-lg overflow-x-auto">
            <code>{installCommand}</code>
          </div>
        </div>
        
        <div className="mt-8">
          {children}
        </div>
      </div>
    </main>
  )
}