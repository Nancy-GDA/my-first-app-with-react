import React from 'react'
import { Link } from 'wouter'

import {
  CategoryTitle,
  CategoryListItem,
  CategoryLink,
  CategoryList
} from 'style.jsx'

import './Category.css'

export default function Category ({ name, options = [] }) {
  return (
    <section>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.maps((singleOption, index) => (
          <CategoryListItem
            key={singleOption}
            index={index}
            type='primary'
          >
            <CategoryLink to={`/seach/ ${singleOption}}`}>
              {singleOption}
            </CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </section>
  )
}
