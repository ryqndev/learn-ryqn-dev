
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ryqndev/Desktop/Workspace/learn-ryqn-dev/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/ryqndev/Desktop/Workspace/learn-ryqn-dev/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/ryqndev/Desktop/Workspace/learn-ryqn-dev/src/pages/index.tsx")),
  "component---src-templates-lesson-tsx": preferDefault(require("/Users/ryqndev/Desktop/Workspace/learn-ryqn-dev/src/templates/Lesson.tsx"))
}

