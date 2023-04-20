export const Button = props => {
  return (
    <>
      <div className="flex gap-2">
        <div className='w-[2px] h-[80%] mt-1 bg-gray-500'></div>
        <p className={`text-[15px] ${props.className}`}>{props.title}</p>
      </div>
    </>
  )
}
