window.MathJax = {
  tex: {
    tags: "ams",
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
  options: {
    renderActions: {
      addCss: [
        200,
        function (doc) {
          const style = document.createElement("style");
          style.innerHTML = `
          .mjx-container {
            color: inherit;
          }
          .mjx-container[jax="CHTML"][display="true"] {
            display: block;
            text-align: center;
            margin: 1em 0;
            overflow: visible !important;
          }
          mjx-container {
            overflow: visible !important;
          }
        `;
          document.head.appendChild(style);
        },
        "",
      ],
    },
  },
};
