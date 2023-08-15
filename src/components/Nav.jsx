import title from '../assets/titlepng.png'
import back from '../assets/background.jpg'

function Nav () {
  return (

    <div className='flex justify-center flex-col items-center relative bg-gradient-to-b from-transparent from-1% via-transparent via-1% to-[#030005] to-97%'>
      <img className='absolute w-[40%] h-[40%] mt-[-28%]' src={title} alt='title image' />
      <img className=' top-0 left-0 w-full h-[100vh] mix-blend-overlay' src={back} alt='background image' />
    </div>
  )
}

export default Nav
