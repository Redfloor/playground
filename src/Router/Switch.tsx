import {
    Routes,
    Route
} from "react-router-dom";
import {Dash} from "../pages/fragment_dash/Dash";
import {SoundButton} from "../pages/SoundButton/SoundButton";
import {Forms} from "../pages/forms/forms";

export const Switch = () => {
    return (
        <Routes>
            <Route path="/forms" element={<Forms />}/>
            <Route path="/dash" element={<Dash />}/>
            <Route path="/*" element={<SoundButton/>} />
        </Routes>
    )
}