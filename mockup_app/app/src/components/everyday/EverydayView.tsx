import * as React from "react";
import { AccountCard } from "./AccountCard";
import { OffersCard } from "./OffersCard";
import { CardManagementCard } from "./CardManagementCard";
import { MoreForYouGrid } from "./MoreForYouGrid";

export function EverydayView() {
    return (
        <scrollView>
            <stackLayout className="pb-4">
                <AccountCard />
                <OffersCard />
                <CardManagementCard />
                <MoreForYouGrid />
            </stackLayout>
        </scrollView>
    );
}