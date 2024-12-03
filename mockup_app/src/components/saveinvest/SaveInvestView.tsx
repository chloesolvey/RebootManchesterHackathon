import * as React from "react";

export function SaveInvestView() {
    return (
        <scrollView>
            <stackLayout className="pb-4">
                {/* Main Calculator Card */}
                <stackLayout className="bg-white rounded-lg mx-4 my-4 p-6">
                    <label className="text-3xl text-center mb-2">🏺</label>
                    <label className="text-xl font-bold text-black text-center mb-2">Save, invest or both?</label>
                    <label className="text-sm text-gray-500 text-center mb-4">Find the best option for you</label>
                    <button className="bg-black text-white font-bold p-4 rounded-lg text-center w-1/2 self-center">
                        Try our calculator
                    </button>
                </stackLayout>

                {/* Savings Section */}
                <stackLayout className="mx-4 mb-4">
                    <label className="text-lg font-bold text-black mb-4">Savings</label>
                    <gridLayout columns="auto, *, auto" className="bg-white rounded-lg p-4">
                        <label col={0} className="text-xl mr-2">🐷</label>
                        <label col={1} className="text-base font-bold text-black">Explore Savings</label>
                        <label col={2} className="text-xl">›</label>
                    </gridLayout>
                </stackLayout>

                {/* Investments Section */}
                <stackLayout className="mx-4 mb-4">
                    <label className="text-lg font-bold text-black mb-4">Investments</label>
                    <gridLayout columns="auto, *, auto" className="bg-white rounded-lg p-4">
                        <label col={0} className="text-xl mr-2">📈</label>
                        <label col={1} className="text-base font-bold text-black">Explore Investments</label>
                        <label col={2} className="text-xl">›</label>
                    </gridLayout>
                </stackLayout>

                {/* More for you Section */}
                <stackLayout className="mx-4 mb-4">
                    <label className="text-lg font-bold text-black mb-4">More for you</label>
                    <gridLayout rows="auto, auto" columns="*, *" className="gap-3 mb-8">
                        {/* Financial Goals Card */}
                        <stackLayout row={0} col={0} className="bg-white rounded-lg p-3 h-36 m-1">
                            <flexboxLayout flexDirection="column" justifyContent="space-between" className="h-full">
                                <stackLayout>
                                    <label className="text-4xl mb-2">🏆</label>
                                    <label className="text-xs text-gray-500 leading-none mt-1" textWrap={true}>Track your progress</label>
                                </stackLayout>
                                <label className="text-xs font-bold text-black">Set financial goals</label>
                            </flexboxLayout>
                        </stackLayout>

                        {/* Calculator Card */}
                        <stackLayout row={0} col={1} className="bg-white rounded-lg p-3 h-36 m-1">
                            <flexboxLayout flexDirection="column" justifyContent="space-between" className="h-full">
                                <stackLayout>
                                    <label className="text-4xl mb-2">🧮</label>
                                    <label className="text-xs text-gray-500 leading-none mt-1" textWrap={true}>Find the best option for you</label>
                                </stackLayout>
                                <label className="text-xs font-bold text-black">Save & Invest calculator</label>
                            </flexboxLayout>
                        </stackLayout>

                        {/* What is investing Card */}
                        <stackLayout row={1} col={0} className="bg-white rounded-lg p-3 h-36 m-1">
                            <flexboxLayout flexDirection="column" justifyContent="space-between" className="h-full">
                                <stackLayout>
                                    <label className="text-4xl mb-2">🌱</label>
                                    <label className="text-xs text-gray-500 leading-none mt-1" textWrap={true}>Learn more</label>
                                </stackLayout>
                                <label className="text-xs font-bold text-black">What is investing</label>
                            </flexboxLayout>
                        </stackLayout>

                        {/* Knowledge Nuggets Card */}
                        <stackLayout row={1} col={1} className="bg-white rounded-lg p-3 h-36 m-1">
                            <flexboxLayout flexDirection="column" justifyContent="space-between" className="h-full">
                                <stackLayout>
                                    <label className="text-4xl mb-2">📚</label>
                                    <label className="text-xs text-gray-500 leading-none mt-1" textWrap={true}>Get insights</label>
                                </stackLayout>
                                <label className="text-xs font-bold text-black">Knowledge Nuggets</label>
                            </flexboxLayout>
                        </stackLayout>
                    </gridLayout>

                    <stackLayout>
                        <label className="text-center text-black mb-4">Like the new Save & Invest space?</label>
                        <button className="bg-black text-white font-bold p-4 rounded-lg text-center">Share feedback</button>
                    </stackLayout>
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}