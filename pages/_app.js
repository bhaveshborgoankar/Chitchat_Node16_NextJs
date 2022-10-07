import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import "../public/assets/scss/color.scss";
import { ToastContainer } from "react-toastify";
import ChatContextProvider from "../helpers/chatContext/chatCtx";
import CustomizerContextProvider from "../helpers/customizerContext/customizerCtx";
import { firebase_app } from "../config/firebase";

export default function MyAppComponent({ Component, pageProps }) {
	const router = useRouter();
	const [currentUser, setCurrentUser] = useState(false);
	const [loader, setLoader] = useState(true);
	let componentMounted = true;

	useEffect(() => {
		document.body.classList.add("sidebar-active");

		// get all details about authenticate login users
		if (firebase_app?.auth === undefined) {
			router.push("/auth/signIn") // you can not login please login
		} else {
			firebase_app?.auth()?.onAuthStateChanged(setCurrentUser);
		}
		// if (currentUser !== null) {
		// 	router.push("/") // you can get login user
		// } else {
		// 	router.push("/auth/signIn") // you can not login please login
		// }
		// Page Loader
		setTimeout(() => {
			setLoader(false);
		}, 500);
		return () => { // This code runs when component is unmounted
			componentMounted = false; // (4) set it to false if we leave the page
		}
	}, [currentUser]);

	return (
		<Fragment>
			<Head>
				<title>Chitchat - chat messenger html templlete</title>
			</Head>
			{loader && (
				<div className="chitchat-loader">
					<div>
						<img src="/assets/images/logo/logo_big.png" alt="" />
						<h3>Simple, secure messaging for fast connect to world..!</h3>
					</div>
				</div>
			)}
			<div>
				<CustomizerContextProvider>
					<ChatContextProvider>
						<Component {...pageProps} />
					</ChatContextProvider>
				</CustomizerContextProvider>
				<ToastContainer />
			</div>
		</Fragment>
	);
}
