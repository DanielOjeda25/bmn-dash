import React, { useEffect } from 'react'
import Link from 'next/link'
import { useStateContext } from '../context/StateContext'
import { BsBagCheckFill } from 'react-icons/bs'
import { runFirework } from '../lib/utils'

const Success = () => {
  const { setTotalPrice, setCartItems, setTotalQuantities } = useStateContext()
  useEffect(() => {
    localStorage.clear()
    setTotalQuantities(0)
    setTotalPrice(0)
    setCartItems([])
    runFirework()
  }, [])

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order</h2>
        <p className='email-msg'>Check your email for receipt.</p>
        <p className='description'>
          if you have any question , please contact
          <a href="mailto:order@example.com" className='email'>
            order@example.com
          </a>
        </p>
        <Link href={'/'}>
          <button className='btn' type='button'>Continue Shopping</button>
        </Link>
      </div>
    </div>
  )
}

export default Success