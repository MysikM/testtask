import React from 'react';
import './card.scss'
import ReactTooltip from 'react-tooltip';
import defaultAvatar from '../../assets/photo-cover.svg'

const Card = ({id, name, position, photo, email, phone}) => {

    const formFormat = phone.length === 13
        ? `${phone.slice(0,3)} (${phone.slice(3,6) }) ${phone.slice(6,9)} ${phone.slice(9,11)} ${phone.slice(11,13)}`
        : `${phone.slice(0,2)} (${phone.slice(2,5) }) ${phone.slice(5,8)} ${phone.slice(8,10)} ${phone.slice(10,12)}`;

    const textFormat = (text) => {
        return text.length > 30 ? `${text.slice(0,30)}...` : text
    }
    return (
        <div key={id} className="card">
            <img src={photo || defaultAvatar} alt={name} className="card__img"/>
            <h4
                className="card__name"
                data-class="hover"
                data-tip={name}
                data-place="bottom"
                data-delay-hide="100"
            >
                {textFormat(name)}
            </h4>
            <p className="card__position">{position}</p>
            <a
                className="card__mail"
                href={`mailto:${email}`}
                data-class="hover"
                data-tip={email}
                data-place="bottom"
                data-delay-hide="100"
            >
                {textFormat(email)}
            </a>
            <p className="card__phone">{formFormat}</p>
            <ReactTooltip />
        </div>
    );
};

export default Card;