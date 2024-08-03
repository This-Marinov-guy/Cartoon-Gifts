import React from 'react'
import { useNavigate } from 'react-router-dom'
import useTranslation from 'next-translate/useTranslation';

const BackButton = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('components');


    return (
        <button onClick={() => navigate(-1)} type="button" className="bd-btn-link btn_dark" >
            {t('common.buttons.backButton.back')}
        </button>
    )
}

export default BackButton