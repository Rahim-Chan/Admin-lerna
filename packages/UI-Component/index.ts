interface UI {
  name: string
}
export default function ui(props: UI) {
  return props.name
}
