/* eslint-disable ts/ban-ts-comment */
import { css } from './style'

function injectStyle(styleId: string): void {
  // Check if the style tag with the specified ID already exists
  // @ts-expect-error
  if (!document.getElementById(styleId)) {
    // Create a new style element
    // @ts-expect-error
    const styleElement = document.createElement('style')
    styleElement.id = styleId
    styleElement.textContent = css

    // Append the style element to the document head
    // @ts-expect-error
    document.head.appendChild(styleElement)

    console.warn(`Style with ID '${styleId}' injected successfully.`)
  }
  else {
    console.warn(`Style with ID '${styleId}' already exists.`)
  }
}

export function markdownItCodeGroupDom() {
  injectStyle('code-group-css-unique')

  // @ts-expect-error
  const eleCodeGroups = document.querySelectorAll('.markdown-code-group')

  const removeCodeBlockClass = (el: any) => {
    const codeBlocks = el.querySelectorAll('.code-blocks-group')
    codeBlocks.forEach((el: any) => {
      el.classList.remove('active')
    })
  }

  const removeTabClass = (el: any) => {
    const codeBlocks = el.querySelectorAll('.markdown-group-tab-item')
    codeBlocks.forEach((el: any) => {
      el.classList.remove('active')
    })
  }

  const initCodeGroupActive = (el: any) => {
    const tabActive = el.querySelector('.markdown-group-tab-item.active')
    const dataCodeGroupActive = tabActive?.dataset.codeGroup

    const codeActive = el.querySelector(`.code-blocks-group.${dataCodeGroupActive}`)

    if (codeActive)
      codeActive.classList.add('active')
  }

  if (eleCodeGroups?.length) {
    eleCodeGroups.forEach((el: any) => {
      const btns = el.querySelectorAll('.markdown-group-tab-item')

      initCodeGroupActive(el)

      btns.forEach((btn: any) => {
        btn.addEventListener('click', () => {
          const dataCodeGroup = btn.dataset.codeGroup

          removeCodeBlockClass(el)
          removeTabClass(el)

          const code = el.querySelector(`.code-blocks-group.${dataCodeGroup}`)
          code.classList.add('active')
          btn.classList.add('active')
        })
      })
    })
  }
}
