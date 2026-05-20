// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reverse chronological order. * denotes equal contribution. Full list also available on Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Updates on research, talks, and milestones.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Click the PDF icon (top-right) to download the full CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses I have served as a Teaching Assistant.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-successfully-defended-my-ph-d-thesis-at-the-university-of-hong-kong-under-the-supervision-of-prof-guodong-li-and-dr-aijun-zhang",
          title: 'Successfully defended my Ph.D. thesis at The University of Hong Kong under the...',
          description: "",
          section: "News",},{id: "news-started-as-a-postdoctoral-research-associate-in-the-department-of-computational-biology-at-st-jude-children-s-research-hospital-working-with-dr-xiang-chen",
          title: 'Started as a Postdoctoral Research Associate in the Department of Computational Biology at...',
          description: "",
          section: "News",},{id: "news-contributed-talk-har-itô-models-and-high-dimensional-har-modeling-for-high-frequency-data-at-jsm-2024-in-portland-usa",
          title: 'Contributed talk: HAR-Itô Models and High-dimensional HAR Modeling for High-frequency Data at JSM...',
          description: "",
          section: "News",},{id: "news-awarded-the-hku-tec-seed-program-hkd-100-000-from-hku-amp-amp-hkstp-supporting-demetech-s-ai-driven-clinical-decision-support-work",
          title: 'Awarded the HKU-TEC Seed Program (HKD 100,000) from HKU &amp;amp;amp; HKSTP, supporting Demetech’s...',
          description: "",
          section: "News",},{id: "news-conditional-value-at-risk-portfolio-optimization-in-high-dimensions-joint-with-jin-hong-du-and-xueqin-wang-accepted-at-statistics-and-its-interface",
          title: 'Conditional Value-at-Risk Portfolio Optimization in High Dimensions (joint with Jin-Hong Du and Xueqin...',
          description: "",
          section: "News",},{id: "news-our-paper-ai-driven-prediction-of-cancer-pain-episodes-a-hybrid-decision-support-approach-has-been-accepted-at-ieee-jbhi",
          title: 'Our paper AI-Driven Prediction of Cancer Pain Episodes: A Hybrid Decision Support Approach...',
          description: "",
          section: "News",},{id: "news-presented-flow-disentangled-feature-importance-as-a-poster-at-iclr-2026-in-rio-de-janeiro-brazil",
          title: 'Presented Flow-Disentangled Feature Importance as a poster at ICLR 2026 in Rio de...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_YifengGuo.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%59%69%66%65%6E%67.%47%75%6F@%73%74%6A%75%64%65.%6F%72%67", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=0hHXvrgAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gyf9712", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
