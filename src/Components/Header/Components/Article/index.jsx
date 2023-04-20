import { Cart } from '@/Components/Cart/index'

export const Article = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-10">
        <div className="relative w-full h-[1px] bg-gray-500">
          <p className="text-[#4444FF] bg-white w-fit absolute  left-1/2 top-[-20px] -translate-x-1/2 p-2">
            وبلاگ های بروز شده
          </p>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-3 gap-x-2'>
          <Cart></Cart>
          <Cart></Cart>
          <Cart></Cart>
          <Cart></Cart>
          <Cart></Cart>
          <Cart></Cart>
          <Cart></Cart>
          <Cart></Cart>
        </div>
      </div>
    </>
  )
}
