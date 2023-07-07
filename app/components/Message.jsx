"use client";

import React, { useState } from "react";

const Message = ({ isOpen, message, onAccept }) => {
    if (!isOpen) {
        return null; // Render nothing if the modal is closed
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="border-4 border-green bg-dark-green w-64 p-4 rounded shadow ">
                <p className="text-center text-white">{message}</p>
                <div className="flex justify-center mt-4">
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded"
                        onClick={onAccept}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Message;
