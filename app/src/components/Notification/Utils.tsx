import React from 'react';
import { toast, ToastId, ToastOptions } from 'react-toastify';
import Notification from './Notification';

function sendToastNotification(componentProps: any, options: ToastOptions): ToastId {

  return toast(<Notification {...componentProps}/>, options,);
}

export default sendToastNotification;
