import React from 'react';
import PropTypes from "prop-types";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Notificationsdata } from '../../Constant/index';
import img1 from '../../assets/Images/New folder/logo (1).png'

const Notification = ({ NotificationsProp }) => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 px-4 md:px-40 py-10'>
                <div className='flex col-span-1 sm:col-span-2 md:col-span-8 gap-2 my-5 sm:gap-5 items-center'>
                    <p className="text-sm sm:text-base"> الرئيسية / الاشعارات</p>
                    <img src={img1} className="h-8 sm:h-10" alt="" />
                    <h2 className="mb-4 text-2xl sm:text-4xl font-bold text-gray-800">
                        الاشعارات
                    </h2>
                </div>

                {NotificationsProp.map((Notificationsprop) => {
                    return (
                        <div key={Notificationsprop.id} className="flex items-center gap-2 sm:gap-4 mb-4 col-span-1 sm:col-span-2 md:col-span-10 bg-gray-100 p-2 sm:p-4 rounded-md shadow-md">
                            <img src={Notificationsprop.img} alt="Notification" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" />

                            <div className="flex-1">
                                <p className="text-sm sm:text-base text-gray-800 font-semibold">{Notificationsprop.content}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[#C54442] font-bold text-xs sm:text-sm">{Notificationsprop.date}</p>
                            </div>
                            <FontAwesomeIcon icon={faTimes} className="text-gray-400 cursor-pointer h-5 w-5" />
                        </div>
                    )
                })}
            </div>
        </>
    );
}

Notification.propTypes = {
    NotificationsProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const Notifications = () => {
    return (
        <div>
            <Navbar />
            <section>
                <Notification NotificationsProp={Notificationsdata} />
            </section>
            <Footer />
        </div>
    );
}

export default Notifications;
