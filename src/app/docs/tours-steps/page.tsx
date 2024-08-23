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
import { stepsobject, toursteps } from "@/constants/code";

export default function DocsToursSteps() {
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
            <h2 className="font-semibold text-2xl">Tours &amp; steps</h2>
            <Card>
              <CardHeader>
                <CardTitle>Tours object</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your steps object contains all of your tours identified with
                  the key <code>tour</code> and a steps object containing an
                  array of steps as shown below.
                </p>
              </CardContent>
              <CodeBlock language="bash" code={stepsobject} />
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your steps object contains all of your tours identified with
                  the key <code>tour</code> and a steps object containing an
                  array of steps as shown below.
                </p>
              </CardContent>
              <CodeBlock language="bash" code={toursteps} />
              <CardFooter className="border-t pt-4 border-border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Prop</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">icon</TableCell>
                      <TableCell>
                        <code>React.ReactNode | string | null</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">title</TableCell>
                      <TableCell>
                        <code>string</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">content</TableCell>
                      <TableCell>
                        <code>React.ReactNode</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">selector</TableCell>
                      <TableCell>
                        <code>string</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">side</TableCell>
                      <TableCell>
                        <code>
                          &quot;top&quot;, &quot;bottom&quot;, &quot;left&quot;,
                          &quot;right&quot;
                        </code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        showControls
                      </TableCell>
                      <TableCell>
                        <code>boolean</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        pointerPadding
                      </TableCell>
                      <TableCell>
                        <code>number</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        pointerRadius
                      </TableCell>
                      <TableCell>
                        <code>number</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">nextRoute</TableCell>
                      <TableCell>
                        <code>string</code>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">prevRoute</TableCell>
                      <TableCell>
                        <code>string</code>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
