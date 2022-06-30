import { createRoot } from "react-dom/client";
import './styles.css'

const root = createRoot(document.getElementById('root'));

root.render(
    <>
        <h1>This is my To do APP</h1>
        <p>Develop release 1.0.0</p>
        <div className='spiner'></div>
    </>
)