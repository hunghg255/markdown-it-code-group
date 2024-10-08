export const css = `:root {
  --bg-code-group: #242424;
  --color-active: #ffa500;
}

.dark {
  --bg-code-group: #242424;
  --color-active: #ffa500;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-code-group: #242424;
    --color-active: #ffa500;
  }
}

.markdown-code-group {
  background-color: var(--bg-code-group);
  contain: content;
  border-radius: 8px;
  padding: 4px 8px;
}

.markdown-group-tab {
  display: flex;
  align-items: center;
  gap: 8px;
}

.markdown-group-tab .markdown-group-tab-item {
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-bottom: 1px solid transparent;
  font-size: 16px;
  cursor: pointer;
  color: white;
}

.markdown-group-tab .markdown-group-tab-item.active {
  border-bottom: 1px solid var(--color-active);
  color: var(--color-active);
}

.markdown-group-tab .markdown-group-tab-item svg {
  max-width: 14px;
  max-height: 14px;
}
`
