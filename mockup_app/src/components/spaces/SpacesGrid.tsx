import * as React from "react";
import { TabContext } from "../../contexts/TabContext";

export function SpacesGrid() {
    const { setActiveTab } = React.useContext(TabContext);

    return (
        <stackLayout className="p-4">
            <label className="text-lg font-bold mb-4">Your Spaces</label>
            <stackLayout className="bg-white rounded-lg mb-6">
                <gridLayout 
                    columns="auto, *, auto" 
                    className="py-4 px-4 border-b"
                    onTap={() => setActiveTab('Everyday')}
                >
                    <label col={0} className="text-xl mr-2">💰</label>
                    <stackLayout col={1}>
                        <label className="text-lg font-semibold text-black mb-2">Everyday</label>
                        <label className="text-xs text-gray-600 leading-none" textWrap={true}>Look after your finances and get cashback with Everyday Offers</label>
                    </stackLayout>
                    <label col={2} className="text-xl self-center">›</label>
                </gridLayout>
                
                <gridLayout 
                    columns="auto, *, auto" 
                    className="py-4 px-4 border-b"
                    onTap={() => setActiveTab('Save & Invest')}
                >
                    <label col={0} className="text-xl mr-2">📈</label>
                    <stackLayout col={1}>
                        <label className="text-lg font-semibold text-black mb-2">Save & Invest</label>
                        <label className="text-xs text-gray-600 leading-none" textWrap={true}>Build your financial future and track your growth</label>
                    </stackLayout>
                    <label col={2} className="text-xl self-center">›</label>
                </gridLayout>
                
                <gridLayout columns="auto, *, auto" className="py-4 px-4 border-b">
                    <label col={0} className="text-xl mr-2">💳</label>
                    <stackLayout col={1}>
                        <label className="text-lg font-semibold text-black mb-2">Borrow</label>
                        <label className="text-xs text-gray-600 leading-none" textWrap={true}>Check your credit score and see your borrowing options</label>
                    </stackLayout>
                    <label col={2} className="text-xl self-center">›</label>
                </gridLayout>
                
                <gridLayout columns="auto, *, auto" className="py-4 px-4">
                    <label col={0} className="text-xl mr-2">🛡️</label>
                    <stackLayout col={1}>
                        <label className="text-lg font-semibold text-black mb-2">Insure</label>
                        <label className="text-xs text-gray-600 leading-none" textWrap={true}>View your cover and explore your options all in one place</label>
                    </stackLayout>
                    <label col={2} className="text-xl self-center">›</label>
                </gridLayout>
            </stackLayout>

            <stackLayout>
                <label className="text-center text-gray-600 mb-4">Like the new Summary space?</label>
                <button className="bg-black text-white font-bold p-4 rounded-lg text-center">Share feedback</button>
            </stackLayout>
        </stackLayout>
    );
}