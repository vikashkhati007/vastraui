"use client"

import { Component } from "@/config/components"
import { Accordion, AccordionItem } from "@nextui-org/accordion"
import Link from "next/link"
export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-background
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      sm:relative sm:translate-x-0
      overflow-y-auto border-r border-divider p-4 -z-0
    `}>
      <Accordion selectionMode="multiple" defaultExpandedKeys={['Guide', 'Frameworks', 'Customization']}>
        {Object.entries(Component).map(([category, items]) => (
          <AccordionItem key={category} aria-label={category} title={category}>
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <Link
                  key={item.title}
                  color="foreground"
                  href={`/component${item.href}`}
                  className="text-sm px-2 py-1.5 rounded-lg hover:bg-default-100"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  )
}