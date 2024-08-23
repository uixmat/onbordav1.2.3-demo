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
import { layout, components, provider } from "@/constants/code";

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
            <h2 className="font-semibold text-2xl">Using the app router</h2>

            <Card>
              <CardHeader>
                <CardTitle>Import onborda</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Simply import Onborda and the Provider directly into your{" "}
                  <code>layout.tsx</code> file.
                </p>
              </CardContent>
              <CodeBlock language="typescript" code={layout} />
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Using the provider</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Wrap your app in the <code>OnbordaProvider</code> and{" "}
                  <code>Onborda</code> components.
                </p>
              </CardContent>
              <CodeBlock language="typescript" code={provider} />
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
                        <code>children</code>
                      </TableCell>
                      <TableCell>
                        <code>React.ReactNode</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <code>steps</code>
                      </TableCell>
                      <TableCell>
                        <code>Array[]</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <code>showOnborda</code>
                      </TableCell>
                      <TableCell>
                        <code>boolean</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <code>shadowRgb</code>
                      </TableCell>
                      <TableCell>
                        <code>string</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <code>shadowOpacity</code>
                      </TableCell>
                      <TableCell>
                        <code>string</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <code>customCard</code>
                      </TableCell>
                      <TableCell>
                        <code>React.ReactNode</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <code>cardTransition</code>
                      </TableCell>
                      <TableCell>
                        <code>Transition</code>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Components</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Target anything in your app using the elements <code>id</code>{" "}
                  attribute.
                </p>
              </CardContent>
              <CodeBlock language="typescript" code={components} />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
