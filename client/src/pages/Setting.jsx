import { useState } from 'react';

const Setting = () => {
    const [email, setEmail] = useState('');

    const handleConfirm = (e) => {
        e.preventDefault();

    }

    return (
        <div className='setting'>
            <div className="setting__user">
                <h3 className="setting__title">
                    Your email registered
                </h3>
                <div className="setting__form">
                    <form className="form-group" onSubmit={handleConfirm}>
                        <label htmlFor="name" className="form-group__label">Email</label>
                        <input 
                            type="text" 
                            className="form-group__input" 
                            placeholder="Your email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <button className="form-group__btn">
                            Send
                        </button>
                    </form>

                </div>
            </div>
            <h3 className="setting__title">Settings</h3>

            <div className="setting__container">
                
            </div>
        </div>
    );
}

export default Setting;
