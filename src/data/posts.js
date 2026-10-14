// ============================================================
//  EDIT THIS FILE to add blog posts. Newest first.
//
//  Two kinds of posts:
//   1. Write it here: give it `content`. It opens on its own page.
//   2. Link out:      give it `link` (e.g. a Medium URL). It opens in a new tab.
//
//  content can hold:
//    "A plain paragraph"
//    { heading: "A section heading" }
//    { code: "const x = 1;" }
// ============================================================

export const posts = [
  {
    slug: "my-first-post",
    title: "My first post: what I am learning",
    date: "2025-01-15",
    summary: "A short note on what I am learning right now and why.",
    content: [
      "This is a paragraph. Replace it with your own thoughts.",
      { heading: "A section heading" },
      "Another paragraph. Keep posts short and honest; that is enough.",
      { code: "function hello() {\n  return 'Hello, world';\n}" },
    ],
  },
  {
    slug: "medium-example",
    title: "An article I wrote on Medium",
    date: "2025-01-02",
    summary: "This one links out to Medium instead of opening here.",
    link: "https://medium.com/@your-username/your-article",
    source: "Medium",
  },
];
