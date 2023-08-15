export function Characters ({ characters }) {
  return (
    <main className='bg-[#030005] flex flex-1 justify-center items-center'>

      <ul className=' grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5 place-items-center justify-center'>
        {
          characters?.map((char) => {
            return (
              <li className='flex flex-col justify-center items-center relative mx-4 my-6' key={char.id}>
                {
                  char.status === 'Alive'
                    ? <><i className='border-[#00ff0a]  shadow-alive' /><i className='border-[#00ff0a] shadow-alive' /><i className='border-[#00ff0a] shadow-alive' /></>
                    : char.status === 'Dead'
                      ? <><i className='border-[#ff0057]  shadow-dead' /><i className='border-[#ff0057] shadow-dead' /><i className='border-[#ff0057] shadow-dead' /></>
                      : <><i className='border-[#fffd44]  shadow-unknown' /><i className='border-[#fffd44] shadow-unknown' /><i className='border-[#fffd44] shadow-unknown' /></>

                }
                <img src={char.image} alt='character' className='rounded-3xl mb-2 mt-2 w-[70%] h-[70%]' />
                <h1 className='font-bold font-mono italic text-white'>Name: <span className='text-white'>{char.name}</span></h1>
                <p className='font-bold font-mono mb-2 italic text-white'>Specie: <span className='text-white'>{char.species}</span></p>
              </li>
            )
          })
        }
      </ul>

    </main>
  )
}

/**
 * <i className={char.status === 'Alive' ? 'border-[#00ff0a] ' : 'border-[#fff]'} />
                <i className={char.status === 'Dead' ? 'border-[#ff0057]' : 'border-[#fff]'} />
                <i className={char.status === 'unknown' ? 'border-[#fffd44]' : 'border-[#fff]'} />
 */
