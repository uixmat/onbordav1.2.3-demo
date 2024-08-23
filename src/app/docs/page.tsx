import { DocsNav } from "@/components/organisms/docs-nav";
import { CodeBlock } from "@/components/molecules/code-block";

// shadcn
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// snippets
import { install, tailwind } from "@/constants/code";

export default function Docs() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-full w-6xl m-auto py-24 px-3 lg:px-6">
          <div className="space-y-16 flex flex-col w-full col-span-1 lg:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <DocsNav />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8 flex flex-col w-full col-span-1 lg:col-span-8">
            <h2 className="font-semibold text-2xl">Onborda setup</h2>
            <Card>
              <CardHeader>
                <CardTitle>Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Getting started with Onborda is fast and simple. Let&apos;s
                  start by installing our package using one of the commands
                  below.
                </p>
              </CardContent>
              <CodeBlock language="bash" code={install} />
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tailwind config</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Tailwind CSS will need to scan the node module in order to
                  include the classes used. See{" "}
                  <a
                    href="https://tailwindcss.com/docs/content-configuration#configuring-source-paths"
                    target="_blank"
                  >
                    configuring source paths
                  </a>{" "}
                  for more information about this topic.
                </p>
              </CardContent>
              <CodeBlock language="typescript" code={tailwind} />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
