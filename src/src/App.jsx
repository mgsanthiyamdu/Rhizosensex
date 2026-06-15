import Home from "./pages/Home"
import Prediction from "./pages/Prediction"
import Sidebar from "./components/Sidebar"
import "./styles/theme.css"

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Home />
        <Prediction />
      </div>
    </div>
  )
}
