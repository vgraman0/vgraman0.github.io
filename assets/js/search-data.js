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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-library",
          title: "library",
          description: "Books, courses, and learning resources by topic",
          section: "Navigation",
          handler: () => {
            window.location.href = "/library/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "A curated collection of my open-source projects and contributions",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-2-data-models-and-query-languages",
        
          title: "2. Data Models and Query Languages",
        
        description: "Comparing relational, document, and graph data models—and the query languages that accompany them",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ddia-ch2/";
          
        },
      },{id: "post-1-reliable-scalable-and-maintainable-applications",
        
          title: "1. Reliable, Scalable, and Maintainable Applications",
        
        description: "The three fundamental concerns for building data systems: reliability, scalability, and maintainability",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ddia-ch1/";
          
        },
      },{id: "post-4-interest-rates",
        
          title: "4. Interest Rates",
        
        description: "Hull, Options, Futures, and Other Derivatives",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hull-options-ch4/";
          
        },
      },{id: "post-3-hedging-strategies-using-futures",
        
          title: "3. Hedging Strategies Using Futures",
        
        description: "Hull, Options, Futures, and Other Derivatives",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hull-options-ch3/";
          
        },
      },{id: "post-from-chicago-to-mumbai-a-year-of-shifting-gears-and-building-foundations",
        
          title: "From Chicago to Mumbai: A Year of Shifting Gears and Building Foundations",
        
        description: "2025 reflection + 2026 broad goals",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/welcome/";
          
        },
      },{id: "books-example-book-a-template-for-reviews",
          title: 'Example Book: A Template for Reviews',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/example-book/";
            },},{id: "projects-example-project",
          title: 'Example Project',
          description: "A template showing how to document your projects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/example-project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75%72-%65%6D%61%69%6C@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/vgraman0", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/", "_blank");
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
