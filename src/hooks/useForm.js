import { useState } from 'react'

export function useForm ({ initialControls = {} }) {
  const [formControls, setFormControls] = useState(initialControls)

  const handleChange = ({ target }) => {
    const { name, value } = target
    setFormControls({
      ...formControls,
      [`${name}`]: value
    })
  }

  return {
    ...formControls,
    formControls,
    handleChange
  }
}
