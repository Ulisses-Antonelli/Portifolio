import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function MainLayout() {
    return (
        <div style={{
            height: '100vh',
            maxHeight: '100vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Header />
            <main style={{
                flex: 1,
                overflow: 'auto',
                position: 'relative'
            }}>
                <Outlet />
            </main>
        </div>
    );
}