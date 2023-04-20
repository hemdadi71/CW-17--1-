import { Button } from '@/Components/Button/index'

export const Footer = () => {
  return (
    <>
      <footer className="lg:flex hidden justify-center">
        <div className="flex gap-1 w-full justify-center">
          <Button className="text-[#4444FF]" title="تماس با ما" />
          <Button className="text-[#4444FF]" title="اخبار سایت" />
          <Button className="text-[#4444FF]" title="گزارش تخلف" />
          <Button className="text-red-500" title="تبلیغات در وبلاگ" />
          <Button className="text-[#4444FF]" title="راهنما" />
          <Button className="text-[#4444FF]" title="ثبت وبلاگ جدید" />
          <Button className="text-[#4444FF]" title="فهرست وبلاگ ها" />
          <Button className="text-[#4444FF]" title="وبلاگ های بروز شده" />
        </div>
      </footer>
    </>
  )
}
