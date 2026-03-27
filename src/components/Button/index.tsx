import { ReactNode } from 'react'
import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  variant?: 'primary' | 'secondary'
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: ReactNode
}

const Button = ({
  type,
  children,
  title,
  to,
  onClick,
  variant = 'primary'
}: Props) => {
  if (type == 'button') {
    return (
      <ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink title={title} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button
