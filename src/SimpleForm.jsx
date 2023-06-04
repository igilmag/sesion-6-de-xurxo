import { Title } from './Components'
import { Input } from './Components/Input'
import { useForm } from './hooks/useForm'

function SimpleForm () {
  const { nombre = '', apellidos = '', email = '', handleChange } = useForm({ nombre: '', apellidos: '', email: '' })

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <main className='grid gap-10 p-5'>
      <Title title='Simple Form' />
      <form className='grid gap-2' onSubmit={handleSubmit}>
        <div>
          <Input
            textValue='Nombre'
            name='nombre'
            placeholder='Xurxo'
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            textValue='Apellidos'
            name='apellidos'
            placeholder='González'
            value={apellidos}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            textValue='Correo electrónico'
            name='email'
            required
            placeholder='xurxo@webferrol.com'
            value={email}
            onChange={handleChange}
          />
        </div>
        <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >Enviar
        </button>
      </form>
      {
        Boolean(nombre.length) && (
          <div>
            <ul className='flex flex-col gap-3'>
              <li><strong className='text-bold'>Nombre</strong>: {nombre}</li>
              <li><strong className='text-bold'>Apellidos</strong>: {apellidos}</li>
              <li><strong className='text-bold'>Correo</strong>: {email}</li>
            </ul>
          </div>
        )
      }
    </main>
  )
}

export default SimpleForm
