export default function toText(node) {
  let tag = document.createElement('div')
  tag.innerHTML = node
  node = tag.innerText
  return node
}
