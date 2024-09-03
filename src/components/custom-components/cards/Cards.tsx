interface CardProps {
  children: React.ReactNode
}

const Cards = ({children}: CardProps) => {
  return (
    <div className='card-layout'>{children}</div>
  )
}

export default Cards