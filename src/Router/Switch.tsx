import {
    Routes,
    Route, useLocation
} from "react-router-dom";
import {Dash} from "../pages/fragment_dash/Dash";
import {SoundButtonContainer} from "../pages/SoundButton/SoundButtonContainer";
import {RandomHtml} from "../pages/fragment_dash/components/RandomHtml";
import {Toys} from "../pages/fragment_dash/components/Toys";
import {ControlRoom} from "../pages/ControlRoom/ControlRoom";
import {Flap} from "../pages/Flap/Flap";
import {ReactPdf} from "../pages/ReactPdf/PDFViewer";
import {SpeechEngine} from "../pages/speech-engine/SpeechEngine";
import { BooksTest } from "../pages/BooksTest/BooksTest";

export const Switch = () => {
    const location = useLocation();

    return (
        <Routes location={location} key={location.key}>
            <Route path="/dash" element={<Dash />}/>
            <Route path="/*" element={<SoundButtonContainer/>} />
            <Route path="/random" element={<RandomHtml />} />
            <Route path="/toys" element={<Toys />} />
            <Route path="/controls" element={<ControlRoom />} />
            <Route path="/flap" element={<Flap />} />
            <Route path="/pdf" element={<ReactPdf />} />
            <Route path="/speech-engine" element={<SpeechEngine />} />
            <Route path="/books-test" element={<BooksTest />} />
        </Routes>
    )
}
