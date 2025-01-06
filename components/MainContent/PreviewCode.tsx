'use client'

import { Button } from "@nextui-org/button"
import { Tabs, Tab } from "@nextui-org/tabs"
import { useState, useCallback, memo } from "react"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-typescript"
import { Copy, Check } from 'lucide-react'

interface PropItem {
  name: string
  type: string
  description: string
  default: string | number
}

interface ComponentPreviewProps {
  children: React.ReactNode
  codestring: string
  showcasestring: string
  props?: PropItem[]
}

const CodeBlock = memo(({ code, language, onCopy, copied }: { code: string, language: string, onCopy: () => void, copied: boolean }) => (
  <div className="w-full max-w-3xl mx-auto">
    <div className="relative">
      <pre className="bg-[#2d2d2d] rounded-lg p-4 overflow-x-auto">
        <div className="absolute right-2 top-2 flex gap-2">
          <Button
            isIconOnly
            size="sm"
            variant="light"
            onPress={onCopy}
            className="text-gray-400 hover:text-gray-300"
            aria-label="Copy code"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </Button>
        </div>
        <code
          className={`language-${language} text-sm`}
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(code, Prism.languages[language] || Prism.languages.jsx, language)
          }}
        />
      </pre>
    </div>
  </div>
))

const PropsTable = memo(({ props }: { props: PropItem[] }) => (
  <div className="w-full max-w-3xl mx-auto">
    <div className="overflow-x-auto shadow-md ">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="py-2 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold text-gray-300">Prop</th>
            <th className="py-2 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold text-gray-300">Type</th>
            <th className="py-2 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold text-gray-300">Description</th>
            <th className="py-2 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold text-gray-300">Default</th>
          </tr>
        </thead>
        <tbody>
          {props.map(prop => (
            <tr key={prop.name} className="border border-divider">
              <td className="py-2 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-mono text-gray-300">{prop.name}</td>
              <td className="py-2 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-mono text-blue-400">{prop.type}</td>
              <td className="py-2 sm:py-4 px-4 sm:px-6 text-sm sm:text-base text-gray-300">{prop.description}</td>
              <td className="py-2 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-mono text-gray-300">{prop.default}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
))

const PreviewContent = memo(({ children }: { children: React.ReactNode }) => (
  <section className="bg-black h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex flex-col items-center justify-center w-full rounded-md overflow-hidden p-4">
    {children}
  </section>
))

export default function ComponentPreview({
  children, 
  codestring, 
  showcasestring,
  props = []
}: ComponentPreviewProps) {
  const [selectedTab, setSelectedTab] = useState("preview")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = useCallback(async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Handle error if needed
    }
  }, [])

  return (
    <div className="w-full min-h-[600px] p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Usage</h1>
        <Tabs 
          selectedKey={selectedTab}
          onSelectionChange={(key) => setSelectedTab(key.toString())}
          variant="underlined"
          aria-label="Component preview tabs"
          classNames={{
            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-primary",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-primary"
          }}
        >
          <Tab
            key="preview"
            title={<span>Preview</span>}
          >
            <section className="flex flex-col w-full gap-5">
              <PreviewContent>
                {children}
              </PreviewContent>
          <h1 className="text-4xl font-bold my-6">Preview Code</h1>
              <CodeBlock 
                code={showcasestring} 
                language="jsx" 
                onCopy={() => copyToClipboard(showcasestring)}
                copied={copied}
              />
              {props.length > 0 && (
                <>
   <h1 className="text-4xl font-bold my-6">Props</h1>
                  <PropsTable props={props} />
                </>
              )}
            </section>
          </Tab>
          <Tab
            key="code"
            title={<span>Code</span>}
          >
            <CodeBlock 
              code={codestring} 
              language="jsx" 
              onCopy={() => copyToClipboard(codestring)}
              copied={copied}
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}
