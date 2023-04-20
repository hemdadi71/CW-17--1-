export const HeaderRight = () => {
  return (
    <>
      <div className="lg:w-[30%] md:w-full bg-[#F0F0F0] py-2 px-4 flex flex-col gap-4">
        <form className="w-full flex flex-col gap-3" action="#">
          <input
            className="py-1 px-2 text-center outline-none border border-gray-300 w-full"
            type="text"
            placeholder="نام کاربری"
          />
          <input
            className="py-1 px-2 text-center outline-none border border-gray-300 w-full"
            type="password"
            placeholder="رمز عبور"
          />
          <input type="submit" className="w-full bg-[#4444FF] py-1 text-center text-white mt-2" value={'ورود به بخش مدیریت وبلاگ'}  />
        </form>
        <p className="text-[#4444FF] text-center">کلمه عبور خود را فراموش کردم</p>
      </div>
    </>
  )
}
