// import Image from "next/image"
// import {ReactNode} from "react"
//
// interface AccordionItemProps {
//   title?: string;                // Простой заголовок
//   titleContent?: ReactNode;     // Кастомный заголовок
//   icon?: string;
//   children: ReactNode;          // Контент внутри
//   className?: string;           // Класс на <li>
//   summaryClassName?: string;
//   bodyClassName?: string;       // Класс на <div> внутри
//   defaultOpen?: boolean;        // Открыт ли по умолчанию
// }
//
// export default function AccordionItem(
//   {
//     title,
//     titleContent,
//     icon = "/icons/close.svg",
//     children,
//     className = "",
//     summaryClassName = "",
//     bodyClassName = "",
//     defaultOpen = false,
//   }: AccordionItemProps) {
//   return (
//     <li className={`whom__item ${className}`}>
//       <details open={defaultOpen}>
//         <summary className={summaryClassName}>
//           {titleContent ? (
//             titleContent
//           ) : title ? (
//             <h3>{title}</h3>
//           ) : null}
//           {icon && (
//             <Image
//               src={icon}
//               alt=""
//               width={41}
//               height={42}
//             />
//           )}
//         </summary>
//         <div className={`whom__body ${bodyClassName}`}>
//           {children}
//         </div>
//       </details>
//     </li>
//   );
// }


import Image from "next/image";
import {ReactNode} from "react";

interface AccordionItemProps {
  title?: string;                // Простой заголовок
  titleContent?: ReactNode;      // Кастомный заголовок
  icon?: string;
  children: ReactNode;           // Контент внутри
  className?: string;            // Класс на <li>
  summaryClassName?: string;     // Класс на <summary>
  bodyClassName?: string;        // Класс на <div> с контентом
  defaultOpen?: boolean;         // Открыт ли по умолчанию
}

export default function AccordionItem(
  {
    title,
    titleContent,
    icon = "/icons/close.svg",
    children,
    className = "",
    summaryClassName = "",
    bodyClassName = "",
    defaultOpen = false,
  }: AccordionItemProps) {
  return (
    <li className={className}>
      <details open={defaultOpen}>
        <summary className={summaryClassName}>
          {titleContent ? (
            titleContent
          ) : title ? (
            <h3>{title}</h3>
          ) : null}
          {icon && (
            <Image
              src={icon}
              alt=""
              width={41}
              height={42}
            />
          )}
        </summary>
        <div className={bodyClassName}>
          {children}
        </div>
      </details>
    </li>
  );
}
