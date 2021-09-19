import { Card, CardBody } from '@windmill/react-ui'
import React from 'react'
import moment from 'moment'
import 'moment/locale/vi'
moment.locale('vi')

function Article({ article }) {
  const capitalize = (s) => {
    return s && s[0].toUpperCase() + s.slice(1)
  }
  return (
    <Card className="flex h-50 mt-10 mx-40 cursor-pointer">
      <a className="flex" href={article.link} target="_blank" rel="noreferrer">
        <img className="object-cover w-1/3" src={article.image} alt="" />
        <CardBody>
          <p className="mb-4 font-bold text-xl hover:text-pink-800 text-black dark:text-gray-300">
            {article.title}
          </p>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            {article.description}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            {capitalize(moment(article.date).format('LLLL')) + ' (GMT+7)'}
          </p>
        </CardBody>
      </a>
    </Card>
  )
}

export default Article
