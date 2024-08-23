export const install = `# pnpm
pnpm add onborda
# yarn
yarn add onborda`;

export const layout = `import { Onborda, OnbordaProvider } from "onborda";`;

export const components = `<div id="foo-step1">Onboard Step</div>`;

export const tailwind = `const config: Config = {
  content: [
    './node_modules/onborda/dist/**/*.{js,ts,jsx,tsx}' // Add this
  ]
}`;

export const provider = `<OnbordaProvider>
  <Onborda
    steps={steps}
    showOnborda={true}
    shadowRgb="55,48,163"
    shadowOpacity="0.8"
    cardComponent={FooCard}
    cardTransition={{ duration: 2, type: "tween" }}
  >
    {children}
  </Onborda>
</OnbordaProvider>`;

export const stepsobject = `{
  tour: "firstyour",
  steps: [
    Step
  ],
  tour: "secondtour",
  steps: [
    Step
  ]
}`;

export const toursteps = `{
  tour: "firsttour",
  steps: [
    {
      icon: <>👋</>,
      title: "Tour 1, Step 1",
      content: <>First tour, first step</>,
      selector: "#tour1-step1",
      side: "top",
      showControls: true,
      pointerPadding: 10,
      pointerRadius: 10,
      nextRoute: "/foo",
      prevRoute: "/bar"
    }...`

export const hookUsage = `import { useOnborda } from "onborda"`;
export const hook = `const { startOnborda } = useOnborda();

const onClickHandler = (tourName: string) => {
  startOnborda(tourName);
};`;