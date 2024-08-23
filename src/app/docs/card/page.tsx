import { DocsNav } from "@/components/organisms/docs-nav";
import { CodeBlock } from "@/components/molecules/code-block";

// shadcn
import { Button } from "@/components/ui/button";
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
import { cardtypes, cardbasic } from "@/constants/code";

export default function DocsAppRouter() {
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
          <div className="space-y-16 flex flex-col w-full col-span-1 lg:col-span-8">
            <h2 className="font-semibold text-2xl">Card</h2>

            <Card>
              <CardHeader>
                <CardTitle>Card types and example</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Your card component describes the content of your step,
                  it&apos;s also used for navigating back and forth through your
                  product tour.
                </p>

                <Button size="lg" asChild>
                  <a
                    href="https://github.com/uixmat/onbordav1.2.3-demo/blob/main/src/components/tour/index.tsx"
                    target="_blank"
                  >
                    Example card with shadcn/ui
                  </a>
                </Button>

                <p>
                  As Onborda is written in typescript, to build your card
                  you&apos;ll need to import the prop types drectly from onborda
                  as shown below.
                </p>
              </CardContent>
              <CodeBlock language="typescript" code={cardtypes} />
              <CardFooter className="border-t pt-4 border-border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Property</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        <code>step</code>
                      </TableCell>
                      <TableCell>
                        <code>Step</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <code>currentStep</code>
                      </TableCell>
                      <TableCell>
                        <code>number</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <code>totalSteps</code>
                      </TableCell>
                      <TableCell>
                        <code>number</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <code>nextStep</code>
                      </TableCell>
                      <TableCell>
                        <code>() =&gt; void</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <code>prevStep</code>
                      </TableCell>
                      <TableCell>
                        <code>() =&gt; void</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <code>arrow</code>
                      </TableCell>
                      <TableCell>
                        <code>JSX.Element</code>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Basic example</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  This is a basic example of a card component with a title and
                  content.
                </p>
                <p>
                  Your card will need to be a client component and so make sure
                  to add the <code>&quot;use client&quot;;</code> directive.
                </p>
              </CardContent>
              <CodeBlock language="typescript" code={cardbasic} />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
