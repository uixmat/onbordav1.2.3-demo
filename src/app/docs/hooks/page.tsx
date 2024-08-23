import { DocsNav } from "@/components/organisms/docs-nav";
import { CodeBlock } from "@/components/molecules/code-block";

// shadcn
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// snippets
import { hookUsage, hook } from "@/constants/code";

export default function DocsHooks() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl m-auto py-24 px-6">
          <div className="space-y-16 flex flex-col w-full col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <DocsNav />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8 flex flex-col w-full col-span-8">
            <h2 className="font-semibold text-2xl">
              Initilializing &amp; Hooks
            </h2>

            <Card>
              <CardHeader>
                <CardTitle>Using hooks with Onborda</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Onborda comes pre-packed with helpful hooks to give you
                  greater control over your users tour experience.
                </p>
              </CardContent>
              <CodeBlock language="typescript" code={hookUsage} />
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <code>startOnborda</code> hook
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The <code>startOnborda</code> hook is used to start a tour.
                </p>
              </CardContent>
              <CodeBlock language="typescript" code={hook} />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
