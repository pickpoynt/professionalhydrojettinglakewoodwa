import { Phone } from "lucide-react";
import { Button } from "./button";

const FloatingCallButton = () => {
    return (
        <div className="fixed bottom-24 right-6 md:bottom-12 md:right-12 z-[9999]">
            <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse transition duration-1000 group-hover:duration-200"></div>

                <Button
                    size="lg"
                    className="relative rounded-full w-16 h-16 bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xl p-0 animate-bounce"
                    asChild
                >
                    <a href="tel:8777921410" aria-label="Call Puyallup Repiping Pros">
                        <Phone className="w-8 h-8" />
                    </a>
                </Button>
            </div>
        </div>
    );
};

export default FloatingCallButton;
