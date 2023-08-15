function Pagination ({ onPrev, onNext, prev, next }) {
  const handlePrev = () => {
    onPrev()
  }

  const handleNext = () => {
    onNext()
  }

  return (
    <div className='bg-[#030005]'>
      <ul className='flex justify-center items-center'>
        {
         prev
           ? <li><button className='border-[#00ff08a1] bg-[#030005] text-white font-mono rounded-md border-solid border-4 mx-1 p-1 my-5' onClick={handlePrev}>Prev</button></li>
           : null
        }
        {
            next
              ? <li><button className='border-[#00ff08a1] bg-[#030005] text-white font-mono rounded-md border-4 border-solid mx-1 p-1 my-5' onClick={handleNext}>Next</button></li>
              : null
        }

      </ul>
    </div>
  )
}

export default Pagination
