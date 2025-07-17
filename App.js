import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Header from "./Header";
import Foodie from "./Foodie";
import Dine from "./Dine";
import Restaurant from "./Restaurant";
import Menu from "./Menu";
import ResHeader from "./resHeader";
import CheckOut from "./checkout";
import { dukan } from "./cart_2";
import { Provider } from "react-redux";


function App() {
    return (
        <>
            <Provider store={dukan}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<> <Header /> <Foodie /> <Dine /> </>}></Route>
                        <Route path="/restaurant" element={<> <Header /> <Restaurant /> </>}></Route>
                        <Route path="/restaurant/:id" element={<> <ResHeader /> <Menu /> </>} />
                        <Route path="/checkout" element={<CheckOut/>} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)


