import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { brand_data } from "./data";
import BrandComponent from "./components/BrandComponent";
import BrandData from "./components/BrandData";
import Footer from "./components/Footer"

function App() {
    const data = brand_data.brand;

    /* Iterating over API data */
    const componentData = data.map((item) => (
        <BrandComponent
            brandName={item.brand_name}
            brandLogo={item.brand_logo}
            id={item.id}
            key={item.id}
        />
    ));

    return (
        <div>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <h3 className="brands">BRANDS</h3>
                            <section className="component_data">
                                {componentData}
                            </section>
                        </div>
                    }
                />
                <Route path="/brand/:id" element={<BrandData />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
