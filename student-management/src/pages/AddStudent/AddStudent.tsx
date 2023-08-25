import { useMatch } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { addStudent } from 'apis/students.api'
import { Student } from 'types/students.type'
import { useState } from 'react'

type FormStateType = Omit<Student, 'id'>
const initialFormState: FormStateType = {
  avatar: '',
  btc_address: '',
  country: '',
  email: '',
  first_name: '',
  gender: 'other',
  last_name: ''
}

export default function AddStudent() {
  const [formState, setFormState] = useState<FormStateType>(initialFormState)
  const addMatch = useMatch('/students/add')
  const isAddMode = Boolean(addMatch)
  const { mutate } = useMutation({
    mutationFn: (body: FormStateType) => {
      return addStudent(body)
    }
  })
  // Dùng currying
  const handleChange = (name: keyof FormStateType) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [name]: event.target.value }))
  }

  return (
    <div>
      <h1 className='text-lg'>{isAddMode ? 'Add' : 'Edit'} Student</h1>
      <form className='mt-6'>
        <div className='group relative z-0 mb-6 w-full'>
          <input
            type='email'
            name='floating_email'
            id='floating_email'
            className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
            placeholder=' '
            value={formState.email}
            onChange={handleChange('email')}
            required
          />
          <label
            htmlFor='floating_email'
            className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
          >
            Email address
          </label>
        </div>

        <div className='group relative z-0 mb-6 w-full'>
          <div>
            <div>
              <div className='mb-4 flex items-center'>
                <input
                  id='gender-1'
                  type='radio'
                  name='gender'
                  value='male'
                  checked={formState.gender === 'male'}
                  onChange={handleChange('gender')}
                  className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                />
                <label htmlFor='gender-1' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Male
                </label>
              </div>
              <div className='mb-4 flex items-center'>
                <input
                  defaultChecked
                  id='gender-2'
                  type='radio'
                  name='gender'
                  value='female'
                  checked={formState.gender === 'female'}
                  onChange={handleChange('gender')}
                  className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                />
                <label htmlFor='gender-2' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Female
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  defaultChecked
                  id='gender-3'
                  type='radio'
                  name='gender'
                  value='other'
                  checked={formState.gender === 'other'}
                  onChange={handleChange('gender')}
                  className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                />
                <label htmlFor='gender-3' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Other
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='group relative z-0 mb-6 w-full'>
          <input
            type='text'
            name='country'
            id='country'
            value={formState.country}
            onChange={handleChange('country')}
            className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
            placeholder=' '
            required
          />
          <label
            htmlFor='country'
            className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
          >
            Country
          </label>
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='group relative z-0 mb-6 w-full'>
            <input
              type='tel'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              name='first_name'
              id='first_name'
              value={formState.first_name}
              onChange={handleChange('first_name')}
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
              placeholder=' '
              required
            />
            <label
              htmlFor='first_name'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              First Name
            </label>
          </div>
          <div className='group relative z-0 mb-6 w-full'>
            <input
              type='text'
              name='last_name'
              id='last_name'
              value={formState.last_name}
              onChange={handleChange('last_name')}
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
              placeholder=' '
              required
            />
            <label
              htmlFor='last_name'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              Last Name
            </label>
          </div>
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='group relative z-0 mb-6 w-full'>
            <input
              type='text'
              name='avatar'
              id='avatar'
              value={formState.avatar}
              onChange={handleChange('avatar')}
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
              placeholder=' '
              required
            />
            <label
              htmlFor='avatar'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              Avatar Base64
            </label>
          </div>
          <div className='group relative z-0 mb-6 w-full'>
            <input
              type='text'
              name='btc_address'
              id='btc_address'
              value={formState.btc_address}
              onChange={handleChange('btc_address')}
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
              placeholder=' '
              required
            />
            <label
              htmlFor='btc_address'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              BTC Address
            </label>
          </div>
        </div>

        <button
          type='submit'
          className='mr-2 mb-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800 '
        >
          Submit
        </button>
      </form>
    </div>
  )
}
