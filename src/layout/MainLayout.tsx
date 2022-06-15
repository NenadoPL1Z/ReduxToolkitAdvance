import React, {FC} from "react";
import {Provider} from "react-redux";
import {store} from "../store/store";

interface IMainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({children}) => {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

export default React.memo(MainLayout);
