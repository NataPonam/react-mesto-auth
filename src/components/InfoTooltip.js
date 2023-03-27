import React from 'react';
import errorMessage from '../images/errorMessage.svg';
import successMessage from '../images/successMessage.svg';

const InfoTooltip = ({ onClose, isOpen, isSuccess }) => {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}  `}>
      <div className="popup__container message">
        {isSuccess ? (
          <>
            <img
              className="popup__img-message"
              src={successMessage}
              alt="успешная регистрация"
            ></img>
            <h3 className="popup__title message">
              Вы успешно зарегистрировались!
            </h3>
          </>
        ) : (
          <>
            <img
              className="popup__img-message"
              src={errorMessage}
              alt="ошибка регистрации"
            ></img>
            <h3 className="popup__title message">
              Что-то пошло не так! Попробуйте ещё раз.
            </h3>
          </>
        )}

        <button
          className="popup__close-icon"
          onClick={onClose}
          type="button"
          aria-label="закрыть"
        />
      </div>
    </div>
  );
};

export default InfoTooltip;
