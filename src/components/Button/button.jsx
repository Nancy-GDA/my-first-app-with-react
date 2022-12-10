import { Link as LinkWouter } from 'wouter'
import styled from '@emotion/styked'

const sizes = {
  small: '16px',
  medium: '32px',
  large: '48px'
}

const getFontSize = props => {
  const size = sizes[props.size]
  if (!size) {
    console.warn(`[Button Styled Component] This size is not corret. Use ${Object.keys(sizes).join(', ')}`)
    return sizes.small
  }
  return size
}

export const Link = styled(LinkWouter)`
    backgraound-color : ${props => props.theme.color.primary};
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.textColor};
    cursor: pointer;
    font-size: ${getFontSize};
    padding: 80px 16px;

    :hover{
        backgraound-color : #42E7E7;
    }

    [disabled]{
        opacity: .3;
        pointer-events: none;s
    }
`
export const Bstn = Link.withComponet('button')
