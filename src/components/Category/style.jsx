import styled from '@emotion/styled'
import { Link } from 'wouter'
import { bps } from 'styles'

export const CategoryTitle = styled.h3`
    color: #175578;
    font-weight: bold;
    margin-button: 13px;
    margin-top: 12px

    ${bps.greaterThanMobile}{
        text-align: right;
    }
`
export const CategoryList = styled.ul`
    list-style-position: inside;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margins: 0;

    ${bps.greaterThanMobile}{
        justify-content: flex-end;s
    } 
`
const generateMultiColorCategory = props => {
  const NEED_WHITE_COLOR = [3, 4]
  const colorIndex = props.index % 5 + 1
  const needWhite = NEED_WHITE_COLOR.includes(colorIndex)
  const colorText = needWhite ? 'white' : '#2B0A72'

  return `
    background-color: #78659F_${colorIndex};
    color: ${colorText};
    `
}

export const CategoryListItem = styled.li`
    list-style: none;
    padding: 6px;
    margin: 8px;
    font-size: 18px

    ${generateMultiColorCategory}
    `
export const CategoryLink = styled(Link)`
    color: inherit;
    font-size: 16px;
    text-decoration: none;
    sont-size: 16px;
    transition: color ease-in 0.1s;
`
