import Parser from 'rss-parser'
import News from '../models/news.model.js'
import Categories from '../models/categories.model.js'

const crawlNews = async () => {
  const parser = new Parser()
  const categories = await Categories.find({})
  categories.forEach(async (category) => {
    let slug = category.slug
    let feed = await parser.parseURL(`https://vnexpress.net/rss/${slug}.rss`)
    feed.items.forEach(async (item) => {
      const existsLink = await News.findOne({ link: item.link })
      if (!existsLink) {
        const imgRex = /<img.*?src="(.*?)"[^>]+>/g
        let img = imgRex.exec(item.content.toString())
        let data = {
          title: item.title,
          link: item.link,
          image: img ? img[1] : 'https://i.imgur.com/Ri32L8S.jpg',
          content: item.content,
          description: item.contentSnippet,
          date: item.pubDate,
          category_id: category._id,
        }
        await News.create(data)
      }
    })
  })
}

export default crawlNews
