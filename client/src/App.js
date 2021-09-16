import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import useForceUpdate from 'use-force-update'
import newsApi from './api/newsApi'
import Article from './components/Article'
import Header from './components/Header'

function App() {
  const forceUpdate = useForceUpdate()

  const [news, setNews] = useState([])
  const [category, setCategory] = useState('tin-moi-nhat')
  const [page, setPage] = useState(0)

  useEffect(() => {
    const fetchNews = async () => {
      const response = await newsApi.getNewsByCategory(category, {
        page,
        size: 10,
      })
      setNews([...new Set([...news, ...response])])
    }
    fetchNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, page])

  const onChangeCategory = (data) => {
    if (category === data) {
      forceUpdate()
    } else {
      setNews([])
      setPage(0)
      setCategory(data)
    }
  }

  return (
    <React.Fragment>
      <Header onChangeCategory={onChangeCategory} />
      <div className="container mt-20">
        <InfiniteScroll
          dataLength={news.length}
          next={() => setPage((page) => page + 1)}
          hasMore={true}>
          {news.map((item, index) => (
            <Article key={index} article={item} />
          ))}
        </InfiniteScroll>
      </div>
    </React.Fragment>
  )
}

export default App
