"use client";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '@/libs/store';
import { useEffect } from "react";



export default function RootLayout({ children }) {

  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <Toaster />
          {children}
        </body>
      </html>
    </Provider>
  );
}


