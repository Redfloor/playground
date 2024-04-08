import {
    Routes,
    Route
} from "react-router-dom";
import {Dash} from "../pages/fragment_dash/Dash";
// import {Forms} from "../pages/forms/forms";
import {SoundButtonContainer} from "../pages/SoundButton/SoundButtonContainer";

export const Switch = () => {
    return (
        <Routes>
            {/*<Route path="/forms" element={<Forms />}/>*/}
            <Route path="/dash" element={<Dash />}/>
            <Route path="/*" element={<SoundButtonContainer/>} />
        </Routes>
    )
}