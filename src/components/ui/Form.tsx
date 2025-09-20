import React, {useState, useRef, ReactNode} from 'react'
import SocialList from "@/components/ui/SocialList"


interface Props {
  onClose: () => void;
  title: ReactNode;
  commentPlaceholder?: string;
  buttonText?: string;
  successMessage?: ReactNode;
}

export default function Form(
  {
    onClose,
    title,
    commentPlaceholder = 'Комментарий',
    buttonText = 'Свяжитесь со мной',
    successMessage = (
      <>
        Спасибо!<br/> Мы свяжемся с Вами.
      </>
    ),
  }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const phoneInputRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) newErrors.name = 'Введите имя';
    if (!phone.trim()) newErrors.phone = 'Введите номер телефона';
    else if (!/^\+7\(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone))
      newErrors.phone = 'Неверный формат номера';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Имитация отправки
    console.log({name, phone, comment});

    setSubmitted(true);
    setName('');
    setPhone('');
    setComment('');
    setErrors({});

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const matrix = '+7(___) ___-__-__';
    let i = 0;
    const def = matrix.replace(/\D/g, '');
    let val = input.value.replace(/\D/g, '');

    if (def.length >= val.length) val = def;

    const formatted = matrix.replace(/./g, (char) => {
      return /[_\d]/.test(char) && i < val.length
        ? val.charAt(i++)
        : i >= val.length ? '' : char;
    });

    setPhone(formatted);

    if (errors.phone) {
      setErrors((prev) => ({...prev, phone: undefined}));
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name) {
      setErrors((prev) => ({...prev, name: undefined}));
    }
  };

  return (
    <>
      {submitted ? (
        <div className="success">
          <p className="success-text">{successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form" noValidate>
          <h2 className="form-title">
            {title}
          </h2>

          <label className="visually-hidden" htmlFor="name">Имя</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Имя"
            className={errors.name ? 'input error' : 'input'}
            autoComplete="name"
          />
          {errors.name && <span className="error-text">{errors.name}</span>}

          <label className="visually-hidden" htmlFor="phone">Телефон</label>
          <input
            id="phone"
            type="tel"
            ref={phoneInputRef}
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Телефон"
            className={errors.phone ? 'input error' : 'input'}
            inputMode="tel"
            autoComplete="tel"
            pattern="\+7\(\d{3}\) \d{3}-\d{2}-\d{2}"
            maxLength={18}
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}

          <label className="visually-hidden" htmlFor="comment">Комментарий</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={commentPlaceholder}
            className="textarea"
          />

          <button type="submit" className="submit-btn">
            {buttonText}
          </button>

          <SocialList/>
        </form>
      )}
    </>
  );
}
