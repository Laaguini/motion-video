import React, {useEffect, useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
// Pages
// import {Menu} from '../MainPage/Menu/Menu';
// import {UserId} from '../UserId/UserId';
// import {Lang} from '../MainPage/Lang/Lang';

import './Pay.css';
// import axios from "axios";

const Pay = () => {
    const [openUserInfo, setOpenUserInfo] = useState(false);
    const [onActive, setActive] = useState(true);
    const navigate = useNavigate();
    const [state_input, SetState] = useState(true);
    const [wallet, setWallet] = useState("")
    const [data, setData] = useState({
        wallet: "",
        col: 0,
    });
    let [tran, SetTran] = useState([])
    let [user, setUser] = useState({
        "id": 0,
        "money": "1321.98",
        "referral_link": "",
        "referral_amount": "",
        "missed_amount": "",
        "wallet": null,
        "line_1": null,
        "line_2": null,
        "line_3": null,
        "max_card": 0,
        "admin_or": false,
        "user": 0
    })

    // async function getPosts() {
    //           try {
    //               let response = await axios.get('http://127.0.0.1:8000/api/user');
    //
    //               let data = await response
    //               console.log(data)
    //
    //               setUser(data);
    //               console.log(user)
    //               SetState(false);
    //               if (user.wallet !== null) {
    //                   SetState(false);
    //                   SetWallet(user.wallet);
    //               } else {
    //
    //               }
    //           } catch (e) {
    //           }
    //
    //       }


//Logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    //Show Menu
    const backHome = () => {
        navigate("/home");
    };

    //Show informations of user
    const showUserInfo = () => {

        setOpenUserInfo(!openUserInfo);
        setActive(!onActive);
    };
    const getWallet = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(setWallet('22929119104432'))
            }, 3000)
        })
    }
    const getTran = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(SetTran([{
                    time: '21:42',
                    data: 'Jul 18 2022',
                    txid: '228aef1',
                    quantity: 2000
                }, 
                {
                    time: '21:42',
                    data: 'Jul 18 2022',
                    txid: '228aef1',
                    quantity: 7891
                },
                {
                    time: '21:42',
                    data: 'Jul 18 2022',
                    txid: '228aef1',
                    quantity: 331
                }]))
            }, 3000)
        })
    }
    useEffect(() => {
        getWallet()
        getTran()
    })
    const payForm = useRef(null);
    const sumInput = useRef(null);
    const pay = () => {
        if(sumInput.current.value <= wallet.Available){
            payForm.submit()
        }
    }

    const handleSumInput = () => {
        let val = sumInput.current.value
        if(+val > user.money) {
            sumInput.current.value = val.substring(0, val.length - 1)
        }
    }

    return (
        <div className="homepage">
            <div className="main_container">
            </div>
            <div className='pay-container'>
                <div className='pay-title-wrapper'>
                    <h1 className='pay-title'>ВЫВОД СРЕДСТВ</h1>
                    <span className='pay-subtitle'>Доступно к выводу:</span>
                    <span className='pay-money'>{user.money}$</span>
                </div>
                <form action="#" className='pay-form' method='POST' ref={payForm}>
                    <div className='pay-inputs-wrapper'>
                        <div className='pay-input'>
                            <label htmlFor='sum-input'>Сумма вывода:</label>
                            <input onInput={() => handleSumInput()} type='number' className='pay-sum-input' name='sum-input' max={user.money} min='0' ref={sumInput} step='0.01'/>
                            <span className='pay-input-info'>Комиссия за вывод 1%, min 1 USD</span>
                        </div>
                        <div className='pay-input'>
                            <label htmlFor='address-input'>Адрес вывода:</label>
                            {wallet && 
                                <div className='pay-address-input' name='address-input'>{wallet}</div>
                                || <input value={wallet} type='text' className='pay-address-input' name='address-input'/>}
                            <span className='pay-input-info'>Кошелек для вывода изменить будет нельзя</span>
                        </div>
                    </div>
                    <button className='pay-button' type='button' onClick={() => pay()}>ВЫВЕСТИ</button>
                </form>

                <div className='pay-history-wrapper'>
                    <span className='pay-history-title'>ИСТОРИЯ ТРАНЗАКЦИЙ</span>
                    <div className='pay-history-table'>
                        <div className="pay-history-row">
                            <div className='history-table-column'>
                                <span className='history-table-title'>Время</span>
                            </div>
                            <div className='history-table-column'>
                                <span className='history-table-title'>Дата</span>
                            </div>
                            <div className='history-table-column'>
                                <span className='history-table-title'>Txid транзакции</span>
                            </div>
                            <div className='history-table-column'>
                                <span className='history-table-title'>Сумма</span>
                            </div>
                        </div>
                        {tran.map((trans, i) => {
                            return (
                                <div className="pay-history-row" key={i}>
                                    <div className="history-table-column">{trans.time}</div>
                                    <div className="history-table-column">{trans.data}</div>
                                    <div className="history-table-column">{trans.txid}</div>
                                    <div className="history-table-column">{trans.quantity}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pay;