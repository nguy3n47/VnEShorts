import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import categoriesApi from '../api/categoriesApi'

function Header(props) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await categoriesApi.getCategories()
      setCategories(response)
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    $('.category__name').click(function () {
      $('.category__name').removeClass('text-pink-800')
      $(this).addClass('text-pink-800')
    })
  })

  const handleChangeCategory = (e) => {
    props.onChangeCategory(e.target.getAttribute('data-slug'))
  }

  return (
    <header className="fixed top-0 w-full bg-white pb-5">
      <div className="md:container md:mx-auto flex mt-3 justify-center">
        <img
          className="cursor-pointer"
          src="https://s1.vnecdn.net/vnexpress/restruct/i/v431/v2_2019/pc/graphics/logo.svg"
          alt="logo"
        />
      </div>
      <section className="mt-3">
        <nav>
          <ul className="flex justify-between px-20">
            {categories.map((category, index) => {
              return (
                <li
                  key={index}
                  data-slug={category.slug}
                  onClick={handleChangeCategory}
                  className={`category__name cursor-pointer font-bold ${
                    index === 0 ? 'text-pink-800' : ''
                  } hover:text-pink-800`}>
                  {category.name}
                </li>
              )
            })}
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Header
