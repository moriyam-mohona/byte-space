(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/shared/components/preview/InteractiveDonationDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractiveDonationDemo",
    ()=>InteractiveDonationDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const AMOUNTS = [
    10,
    25,
    50,
    100
];
function InteractiveDonationDemo() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "65b39c852505a6b7a890c90ae1c47a880a1a88624265acb723a10a14e5a3a1fa") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65b39c852505a6b7a890c90ae1c47a880a1a88624265acb723a10a14e5a3a1fa";
    }
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const selected = AMOUNTS[selectedIndex] ?? AMOUNTS[0];
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-sm font-semibold tracking-wide text-gray-900 dark:text-white",
                    children: "Interactive Donation Calculator"
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/preview/InteractiveDonationDemo.tsx",
                    lineNumber: 18,
                    columnNumber: 112
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs px-2.5 py-0.5 rounded-full bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300 font-medium",
                    children: "Live Updates"
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/preview/InteractiveDonationDemo.tsx",
                    lineNumber: 18,
                    columnNumber: 230
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/preview/InteractiveDonationDemo.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-medium text-gray-500 dark:text-gray-400",
            children: "Select your donation amount:"
        }, void 0, false, {
            fileName: "[project]/src/shared/components/preview/InteractiveDonationDemo.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== selectedIndex) {
        t2 = AMOUNTS.map({
            "InteractiveDonationDemo[AMOUNTS.map()]": (amount, idx)=>{
                const isSelected = selectedIndex === idx;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "InteractiveDonationDemo[AMOUNTS.map() > <button>.onClick]": ()=>setSelectedIndex(idx)
                    }["InteractiveDonationDemo[AMOUNTS.map() > <button>.onClick]"],
                    className: `px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${isSelected ? "bg-secondary text-white dark:bg-white dark:text-secondary shadow-xs ring-2 ring-primary" : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,
                    children: [
                        "$",
                        amount
                    ]
                }, amount, true, {
                    fileName: "[project]/src/shared/components/preview/InteractiveDonationDemo.tsx",
                    lineNumber: 35,
                    columnNumber: 16
                }, this);
            }
        }["InteractiveDonationDemo[AMOUNTS.map()]"]);
        $[3] = selectedIndex;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2.5",
                    children: t2
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/preview/InteractiveDonationDemo.tsx",
                    lineNumber: 47,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/preview/InteractiveDonationDemo.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== selected) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-medium text-gray-800 dark:text-gray-200",
            children: [
                "Selected pledge: $",
                selected
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/preview/InteractiveDonationDemo.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[7] = selected;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "text-xs font-semibold px-3 py-1.5 rounded-md bg-primary text-white hover:bg-primary-600 transition cursor-pointer",
            children: "Donate Now"
        }, void 0, false, {
            fileName: "[project]/src/shared/components/preview/InteractiveDonationDemo.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 flex items-center justify-between",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/preview/InteractiveDonationDemo.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t3 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-xs space-y-5",
            children: [
                t0,
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/preview/InteractiveDonationDemo.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[12] = t3;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    return t7;
}
_s(InteractiveDonationDemo, "p+/bzzq/TYxxGJubGcC9+L2W9uM=");
_c = InteractiveDonationDemo;
var _c;
__turbopack_context__.k.register(_c, "InteractiveDonationDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_shared_components_preview_InteractiveDonationDemo_tsx_1rhtfey._.js.map