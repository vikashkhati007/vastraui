'use client';

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@nextui-org/button';
import { Search, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Modal, ModalContent } from '@nextui-org/modal';

import { Component } from '@/config/components';

interface SearchItem {
  name: string;
  href: string;
  title: string;
  description: string;
  type: 'recent' | 'result';
}

export default function SearchBar({mode}: {mode: 'home' | 'component'}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches] = useState<SearchItem[]>([
    {
      name: 'Button',
      href: '/button/gradient',
      title: 'Gradient Button',
      description: 'A simple button component with gradient background color.',
      type: 'recent',
    },
    {
      name: 'Star Falling ',
      href: '/background/starfalling',
      title: 'Star Falling Background',
      description: 'A simple background component with noisy effect.',
      type: 'recent',
    },
  ]);

  const allComponents = useMemo(() => {
    return Object.values(Component).flat();
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery) return [];

    return allComponents.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allComponents]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Button
        className="h-10 gap-2 rounded-lg text-default-500 px-3 bg-gray-200 dark:bg-black"
        endContent={
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-medium text-default-500 bg-default-100 rounded-md">
            ^K
          </kbd>
        }
        startContent={<Search size={18} />}
        onPress={() => setIsOpen(true)}
      >
        Quick Search...
      </Button>

      <Modal
        hideCloseButton
        classNames={{
          base: 'max-w-[640px] bg-white dark:bg-black',
          backdrop: 'bg-black/80',
          wrapper: 'items-start pt-[12vh]',
        }}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ModalContent>
          <div className="p-0">
            <div className="flex items-center gap-3 p-4 border-b border-divider">
              <Search className="text-default-400" size={20} />
              <input
                //@ts-ignore
                ref={(input) => input && input.focus()}
                className="flex-1 bg-transparent outline-none text-default-700 dark:text-default-900 placeholder:text-default-500 text-lg"
                placeholder="Search documentation"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <kbd className="px-2 py-1 text-xs font-medium text-default-500 bg-default-200/50 rounded-md">
                ESC
              </kbd>
            </div>
            <div className="p-2 max-h-[60vh] overflow-y-auto">
              {searchQuery ? (
                searchResults.length > 0 ? (
                  <div>
                    <div className="px-3 py-2 text-sm text-default-500">
                      Search Results
                    </div>
                    <div className="space-y-1">
                      {searchResults.map((item) => (
                        <Link
                          key={item.href}
                          href={`${mode === 'home' ? `/component${item.href}`: `/component${item.href}`}`}
                          onClick={() => setIsOpen(false)}
                        >
                          <SearchResultItem
                            item={{ ...item, type: 'result' }}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="px-3 py-2 text-sm text-default-500">
                    No results found
                  </div>
                )
              ) : (
                <div>
                  <div className="px-3 py-2 text-sm text-default-500">
                    Recent
                  </div>
                  <div className="space-y-1">
                    {recentSearches.map((item) => (
                      <Link
                        key={item.href}
                        href={`${mode === 'home' ? `/component${item.href}` : `/component${item.href}`}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <SearchResultItem item={item} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}

function SearchResultItem({ item }: { item: SearchItem }) {
  return (
    <div
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left hover:bg-${item.type === 'recent' ? 'default-100/50' : 'transparent'} dark:hover:bg-${item.type === 'recent' ? 'default-100/50' : 'transparent'}`}
    >
      <div className="flex flex-col">
        <span className="text-sm font-medium text-default-900">
          {item.title}
        </span>
        <span className="text-xs text-default-500">{item.description}</span>
      </div>
      <ChevronRight className="text-default-400" size={18} />
    </div>
  );
}
