import React, { useId } from 'react'
import PropTypes from 'prop-types'

export function Input ({ textValue, ...props }) {
  const id = useId()
  return (
    <>
      <label
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        htmlFor={id}
      >{textValue}
      </label>
      <input
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        id={id}
        {...props}
      />
    </>
  )
}

Input.propTypes = {
  textValue: PropTypes.string.isRequired,
  props: PropTypes.any
}
