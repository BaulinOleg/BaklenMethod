import Link from 'next/link'
import Image from 'next/image'


interface LogotypeProps {
  className?: string
  imageWidth?: number
  imageHeight?: number
  showText?: boolean
  text?: string
  href?: string
}

export default function Logotype(
  {
    className,
    imageWidth = 148,
    imageHeight = 60,
    showText = true,
    text = 'Школа гармоничного развития',
    href = '/',
  }: LogotypeProps) {
  const combinedClassName = `logotype${className ? ` ${className}` : ''}`

  return (
    <Link href={href} className={combinedClassName}>
      <Image
        src="/images/logotype/logo.png"
        alt="Логотип Баклен метод"
        width={imageWidth}
        height={imageHeight}
        priority
      />
      {showText && <p className="logotype__text">{text}</p>}
    </Link>
  )
}
