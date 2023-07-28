import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import BottomNav from "./Components/BottomNav";
import TopNav from "./Components/TopNav";

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <div
            style={{
                height: "100vh",
                width: "100%",
                paddingBottom: "calc(10vh + 1rem)",
            }}
        >
            <div className="">{children}</div>

            <BottomNav />
        </div>
    );
}
