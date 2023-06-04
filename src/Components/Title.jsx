import PropTypes from 'prop-types'

export function Title ({ title }) {
  return (
    <h1 className='text-4xl font-bold text-gray-900'>{title}</h1>
  )
}

Title.propTypes = {
  title: PropTypes.string
}
