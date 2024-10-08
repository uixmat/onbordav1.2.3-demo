export const steps: any = [
  {
    tour: "tour1",
    steps: [
      {
        icon: <>👋</>,
        title: "Welcome to Onborda!",
        content: <>This is step 1</>,
        selector: "#tour1-step1",
        side: "top",
        showControls: true,
        pointerPadding: 0,
        pointerRadius: 11,
      },
      {
        icon: <>🪄</>,
        title: "It's like magic!",
        content: <>This is step 2</>,
        selector: "#tour1-step2",
        side: "top",
        showControls: true,
        pointerPadding: 0,
        pointerRadius: 999,
      },
      {
        icon: <>🎉</>,
        title: "Celebrate!",
        content: <>This is step 3</>,
        selector: "#tour1-step3",
        side: "top",
        showControls: true,
        pointerPadding: 0,
        pointerRadius: 11,
        nextRoute: "/page-two",
      },
      {
        icon: <>🎈</>,
        title: "Party time!",
        content: <>This is step 4</>,
        selector: "#tour1-step4",
        side: "top",
        showControls: true,
        pointerPadding: 0,
        pointerRadius: 11,
        prevRoute: "/",
      },
    ],
  },
  {
    tour: "tour2",
    steps: [
      {
        icon: <>🌟</>,
        title: "Welcome to Tour 2!",
        content: <>This is step 1 of Tour 2</>,
        selector: "#tour2-step1",
        side: "top",
        showControls: true,
        pointerPadding: 0,
        pointerRadius: 11,
      },
      {
        icon: <>🔥</>,
        title: "Feel the heat!",
        content: <>This is step 2 of Tour 2</>,
        selector: "#tour2-step2",
        side: "top",
        showControls: true,
        pointerPadding: 0,
        pointerRadius: 999,
      },
      {
        icon: <>🎈</>,
        title: "Party time!",
        content: <>This is step 3 of Tour 2</>,
        selector: "#tour2-step3",
        side: "top",
        showControls: true,
        pointerPadding: 0,
        pointerRadius: 11,
        nextRoute: "/page-two",
      },
      {
        icon: <>🎉</>,
        title: "Celebrate!",
        content: <>This is step 4 of Tour 2</>,
        selector: "#tour2-step4",
        side: "top",
        showControls: true,
        pointerPadding: 0,
        pointerRadius: 11,
        prevRoute: "/",
      },
    ],
  },
];
