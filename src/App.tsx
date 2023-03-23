import Board from "./components/Board/Board";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import CreateTaskModel from "./components/CreateTaskModel/CreateTaskModel";

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="main-container">
                <Sidebar />
                <Board />
            </div>
            <CreateTaskModel />
        </div>
    );
}
