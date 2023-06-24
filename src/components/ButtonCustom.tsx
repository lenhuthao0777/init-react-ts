import clsx from 'clsx'
import type { FC, MouseEventHandler, ReactNode } from 'react'

interface CButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
  label: string
  fullWith?: boolean
  icon?: ReactNode
  secondary?: boolean
  danger?: boolean
  disable?: boolean
  children?: ReactNode
  onClick?: MouseEventHandler
}

const Btn: FC<CButtonProps> = ({
  label = '',
  type = 'button',
  icon,
  fullWith,
  secondary,
  danger,
  children,
  disable,
  onClick,
}) => {
  return (
    <div className='flex items-center'>
      {icon ? <span className='block'>{icon}</span> : null}
      <button
        type={type}
        disabled={disable}
        onClick={onClick}
        className={clsx(
          `
        text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible: outline-offset-2 px-3 py-1 rounded
        `,
          fullWith && 'w-full',
          secondary
            ? 'text-gray-700 hover:opacity-10 transition border border-sky-500'
            : 'text-white',
          danger &&
            'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
          !secondary &&
            !danger &&
            ' bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600'
        )}
      >
        {children ? children : label}
      </button>
    </div>
  )
}
export default Btn
