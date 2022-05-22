import { TagsItem } from '@/types/search'

export function searchByTitle (data: TagsItem[], title: string): TagsItem[] {
  return data.filter(item => item.title.indexOf(title) > -1)
}

export function closeTag (tags: string[], tag: string): string[] {
  return tags.filter(item => item !== tag)
}

export function addTag (tags: string[], tag: string): {
  type: 'failed' | 'success',
  msg: string,
  tags: string[]
} {
  if (tag === '') {
    return {
      type: 'failed',
      msg: 'The tag must be not empty',
      tags
    }
  }
  if (tags.includes(tag)) {
    return {
      type: 'failed',
      msg: `The tag ${tag} is repeated`,
      tags
    }
  }
  tags.push(tag)
  return {
    type: 'success',
    msg: `Success removed the tag ${tag}`,
    tags
  }
}
