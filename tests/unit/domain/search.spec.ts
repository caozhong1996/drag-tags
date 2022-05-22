import { searchByTitle, closeTag, addTag } from '@/domain/search'
import testJson from '@/components/test.json'

describe('searchByTitle', () => {
  it('searchByTitle should return correct tag', () => {
    const title = 'Lorem ipsum dolor sit amet'
    const res = searchByTitle(testJson.data, title)
    expect(res).toMatchObject([{
      title: 'Lorem ipsum dolor sit amet',
      tags: [
        'tag1',
        'tag2',
        'tag3'
      ]
    }])
  })
})

describe('closeTag', () => {
  it('closeTag should return correct tag', () => {
    const res = closeTag(testJson.data[0].tags, 'tag1')
    expect(res).toMatchObject([
      'tag2',
      'tag3'
    ])
  })
})

describe('addTag', () => {
  it('addTag should return The tag must be not empty', () => {
    const res = addTag(testJson.data[0].tags, '')
    expect(res.msg).toBe('The tag must be not empty')
  })
  it('addTag should return The tag tag2 is repeated', () => {
    const res = addTag(testJson.data[0].tags, 'tag2')
    expect(res.msg).toBe('The tag tag2 is repeated')
  })
  it('addTag should return Success removed the tag tag11', () => {
    const res = addTag(testJson.data[0].tags, 'tag11')
    expect(res.msg).toBe('Success removed the tag tag11')
  })
})
