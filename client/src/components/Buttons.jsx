import React from "react";

export default function Buttons({ onNewClick, onListClick }) {
    return (
        <div className="flex flex-col justify-center align-center">
            <button onClick={onNewClick} className="font-bold text-4xl tracking-wide p-8">
                New Entry
            </button>
            <button onClick={onListClick} className="font-bold text-4xl tracking-wide p-8">
                List All
            </button>

            <div className="flex justify-center text-xl py-4 space-x-4">
                <a
                    href="https://github.com/DiabolusGX"
                    target="_blank"
                    rel="noreferrer"
                >
                    <ion-icon
                        name="logo-github"
                    ></ion-icon>
                </a>
                <a href="https://diabolus.me/" target="_blank" rel="noreferrer">
                    <ion-icon
                        name="globe-outline"
                    ></ion-icon>
                </a>
                <a
                    href="https://www.linkedin.com/in/ankitmalik0320/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <ion-icon
                        name="logo-linkedin"
                    ></ion-icon>
                </a>
            </div>
        </div>
    );
}
