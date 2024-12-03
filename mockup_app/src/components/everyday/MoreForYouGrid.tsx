import * as React from "react";

export function MoreForYouGrid() {
    return (
        <stackLayout className="mx-4 mb-4">
            <label className="text-lg font-bold text-black mb-4">More for you</label>
            <gridLayout rows="auto, auto" columns="*, *" className="gap-3 mb-4">
                {/* Open Banking Card */}
                <stackLayout row={0} col={0} className="bg-white rounded-lg p-3 h-36 m-1">
                    <flexboxLayout flexDirection="column" justifyContent="space-between" className="h-full">
                        <stackLayout>
                            <label className="text-base">💳</label>
                            <label className="text-xs text-gray-500 leading-none mt-1" textWrap={true}>View your accounts with other banks</label>
                        </stackLayout>
                        <label className="text-xs font-bold text-black">Add account</label>
                    </flexboxLayout>
                </stackLayout>

                {/* Credit Score Card */}
                <stackLayout row={0} col={1} className="bg-white rounded-lg p-3 h-36 m-1">
                    <flexboxLayout flexDirection="column" justifyContent="space-between" className="h-full">
                        <stackLayout>
                            <label className="text-base">⛽</label>
                            <label className="text-xs text-gray-500 leading-none mt-1" textWrap={true}>Check your credit score and track your progress</label>
                        </stackLayout>
                        <label className="text-xs font-bold text-black">Your credit score</label>
                    </flexboxLayout>
                </stackLayout>

                {/* Travel Hub Card */}
                <stackLayout row={1} col={0} className="bg-white rounded-lg p-3 h-36 m-1">
                    <flexboxLayout flexDirection="column" justifyContent="space-between" className="h-full">
                        <stackLayout>
                            <label className="text-base">🏰</label>
                            <label className="text-xs text-gray-500 leading-none mt-1" textWrap={true}>Going abroad? Take advantage of all the travel services we offer</label>
                        </stackLayout>
                        <label className="text-xs font-bold text-black">Travel Hub</label>
                    </flexboxLayout>
                </stackLayout>

                {/* Prevent Fraud Card */}
                <stackLayout row={1} col={1} className="bg-white rounded-lg p-3 h-36 m-1">
                    <flexboxLayout flexDirection="column" justifyContent="space-between" className="h-full">
                        <stackLayout>
                            <label className="text-base">🛡️</label>
                            <label className="text-xs text-gray-500 leading-none mt-1" textWrap={true}>Find out how to stay safe from scams</label>
                        </stackLayout>
                        <label className="text-xs font-bold text-black">Prevent fraud</label>
                    </flexboxLayout>
                </stackLayout>
            </gridLayout>

            <stackLayout>
                <label className="text-center text-black mb-4">Like the new Everyday space?</label>
                <button className="bg-black text-white font-bold p-4 rounded-lg text-center">Share feedback</button>
            </stackLayout>
        </stackLayout>
    );
}