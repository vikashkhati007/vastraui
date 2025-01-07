'use client';
import { motion } from 'framer-motion';
import { Shield, Users, Code, Check, Copy } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import { Button } from '@nextui-org/button';
import { useCallback, useState } from 'react';

export default function Page() {
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = useCallback(async (code: string, key: string) => {
    await navigator.clipboard.writeText(code);
    setCopied((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [key]: false })), 2000);
  }, []);

  return (
    <main className="flex-1 p-4 pt-10 sm:p-6 overflow-auto">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="space-y-24"
        initial={{ opacity: 0, y: 20 }}
      >
        {/* Introduction Section */}
        <section className="space-y-6">
          <motion.h1
            animate={{ opacity: 1 }}
            className="text-5xl font-bold tracking-tight"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Introduction
          </motion.h1>
          <p className="text-2xl text-gray-700 dark:text-gray-400">
            Create magical landing pages with components that transform your
            vision into reality.
          </p>
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Vastra UI is more than just a collection of components - it&apos;s
              a carefully crafted ecosystem of reusable elements designed to
              empower developers in creating exceptional web experiences. Each
              component is built with performance, accessibility, and aesthetics
              in mind.
            </p>
            <p>
              Our library primarily focuses on components, blocks, and templates
              specifically engineered for creating impressive landing pages and
              user-facing marketing materials that convert visitors into
              customers.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">Philosophy</h2>
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
            <p>
              We fundamentally believe that exceptional design is not just about
              aesthetics - it&apos;s about creating trust and credibility in the
              digital space. It&apos;s one of the primary ways to establish a
              connection between you and your potential customers.
            </p>
            <p>
              In today&apos;s digital landscape, trust is the currency that
              drives conversions. It&apos;s the first thing visitors evaluate
              before making any commitment, whether that&apos;s sharing their
              email or making a purchase.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">
                Common Visitor Concerns We Address:
              </h3>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-center gap-3"
                  whileHover={{ x: 10 }}
                >
                  <Shield className="w-5 h-5 text-gray-700 dark:text-gray-400" />
                  &quot;Is this company legitimate and trustworthy?&quot;
                </motion.li>
                <motion.li
                  className="flex items-center gap-3"
                  whileHover={{ x: 10 }}
                >
                  <Users className="w-5 h-5 text-gray-700 dark:text-gray-400" />
                  &quot;Who else is using this solution?&quot;
                </motion.li>
                <motion.li
                  className="flex items-center gap-3"
                  whileHover={{ x: 10 }}
                >
                  <Code className="w-5 h-5 text-gray-700 dark:text-gray-400" />
                  &quot;Can I implement this effectively?&quot;
                </motion.li>
              </ul>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">Getting Started</h2>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Installation</h3>
              <div className="w-full">
                <div className="relative">
                  <pre className="bg-[#2d2d2d] rounded-lg p-4 overflow-x-auto">
                    <div className="absolute right-2 top-2 flex gap-2">
                      <Button
                        isIconOnly
                        aria-label="Copy code"
                        className="text-gray-400 hover:text-gray-300"
                        size="sm"
                        variant="light"
                        onPress={() =>
                          copyToClipboard(`npm install -g vastraui`, 'install')
                        }
                      >
                        {copied['install'] ? (
                          <Check size={18} />
                        ) : (
                          <Copy size={18} />
                        )}
                      </Button>
                    </div>
                    <code
                      dangerouslySetInnerHTML={{
                        __html: Prism.highlight(
                          'npm install -g vastraui',
                          Prism.languages['jsx'] || Prism.languages.jsx,
                          'jsx'
                        ),
                      }}
                      className={`language-${'jsx'} text-sm`}
                    />
                  </pre>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Installing Component Command
              </h3>
              <div className="w-full">
                <div className="relative">
                  <pre className="bg-[#2d2d2d] rounded-lg p-4 overflow-x-auto">
                    <div className="absolute right-2 top-2 flex gap-2">
                      <Button
                        isIconOnly
                        aria-label="Copy code"
                        className="text-gray-400 hover:text-gray-300"
                        size="sm"
                        variant="light"
                        onPress={() =>
                          copyToClipboard(
                            `vastraui add @vastra/glowing`,
                            'component'
                          )
                        }
                      >
                        {copied['component'] ? (
                          <Check size={18} />
                        ) : (
                          <Copy size={18} />
                        )}
                      </Button>
                    </div>
                    <code
                      dangerouslySetInnerHTML={{
                        __html: Prism.highlight(
                          'vastraui add @vastra/glowing',
                          Prism.languages['jsx'] || Prism.languages.jsx,
                          'jsx'
                        ),
                      }}
                      className={`language-${'jsx'} text-sm`}
                    />
                  </pre>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Our components are designed to be intuitive and easy to
                implement. Here&apos;s a quick example:
              </p>

              <pre className="bg-[#2d2d2d] rounded-lg p-4 overflow-x-auto">
                <code
                  dangerouslySetInnerHTML={{
                    __html: Prism.highlight(
                      `import GlowButton from "@/components/CustomComponent/Button/GlowingButton";

export default function GlowButtonShowcase() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <GlowButton
        width="300px"
        height="90px"
        glowFromColor="230, 50%, 50%"
        glowToColor="280, 70%, 60%"
      >
        Glowing Button
      </GlowButton>
   
    </div>
  )
}
`,
                      Prism.languages.jsx,
                      'jsx'
                    ),
                  }}
                />
              </pre>
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
