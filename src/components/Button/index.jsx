import React from 'react'
import { Button, Link } from './button'

export default function BtnComponet ({ children, href, size = 'jdsfjksdjfkskdfjfkjsdsdsd' }) {
  return href
    ? <Link sise={size} href={href}>{children}</Link>
    : <Button size={size}>{children}</Button>
}
