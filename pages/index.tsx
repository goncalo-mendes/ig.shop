import Head from 'next/head'
import Image from 'next/image'
import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$teste',
  cursor: 'pointer'
}
)

export default function Home() {
  return (
    <Button>Hello world</Button>
  )
}
