export interface Node {
  title: string
  children?: Node[]
}

export type Tree = Node[]
