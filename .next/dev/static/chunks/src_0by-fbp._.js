(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/home/components/CoreProgramsCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoreProgramsCarousel",
    ()=>CoreProgramsCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/i18n/format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CoreProgramsCarousel(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "978bfdf82e2dab1862e07d8a7c3ea8041b0aefd76485fa908b99196f611e4da1") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "978bfdf82e2dab1862e07d8a7c3ea8041b0aefd76485fa908b99196f611e4da1";
    }
    const { children, locale, totalCards: t1 } = t0;
    const totalCards = t1 === undefined ? 6 : t1;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const isProgrammaticScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const scrollTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "CoreProgramsCarousel[handleScroll]": ()=>{
                if (isProgrammaticScrollRef.current) {
                    return;
                }
                const container = containerRef.current;
                if (!container || !container.children.length) {
                    return;
                }
                const cards = container.children;
                const scrollLeft = container.scrollLeft;
                const containerWidth = container.clientWidth;
                let closestIndex = 0;
                let minDistance = Infinity;
                for(let i = 0; i < cards.length; i++){
                    const card = cards[i];
                    const cardCenter = card.offsetLeft - container.offsetLeft + card.clientWidth / 2;
                    const viewCenter = scrollLeft + containerWidth / 2;
                    const distance = Math.abs(cardCenter - viewCenter);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestIndex = i;
                    }
                }
                setCurrentIndex({
                    "CoreProgramsCarousel[handleScroll > setCurrentIndex()]": (prev)=>prev !== closestIndex ? closestIndex : prev
                }["CoreProgramsCarousel[handleScroll > setCurrentIndex()]"]);
            }
        })["CoreProgramsCarousel[handleScroll]"];
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const handleScroll = t2;
    let t3;
    let t4;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "CoreProgramsCarousel[useEffect()]": ()=>{
                const container_0 = containerRef.current;
                if (!container_0) {
                    return;
                }
                let ticking = false;
                const onScroll = {
                    "CoreProgramsCarousel[useEffect() > onScroll]": ()=>{
                        if (isProgrammaticScrollRef.current) {
                            return;
                        }
                        if (!ticking) {
                            window.requestAnimationFrame({
                                "CoreProgramsCarousel[useEffect() > onScroll > window.requestAnimationFrame()]": ()=>{
                                    handleScroll();
                                    ticking = false;
                                }
                            }["CoreProgramsCarousel[useEffect() > onScroll > window.requestAnimationFrame()]"]);
                            ticking = true;
                        }
                    }
                }["CoreProgramsCarousel[useEffect() > onScroll]"];
                const onScrollEnd = {
                    "CoreProgramsCarousel[useEffect() > onScrollEnd]": ()=>{
                        isProgrammaticScrollRef.current = false;
                        if (scrollTimeoutRef.current) {
                            clearTimeout(scrollTimeoutRef.current);
                        }
                        handleScroll();
                    }
                }["CoreProgramsCarousel[useEffect() > onScrollEnd]"];
                container_0.addEventListener("scroll", onScroll, {
                    passive: true
                });
                container_0.addEventListener("scrollend", onScrollEnd);
                return ()=>{
                    container_0.removeEventListener("scroll", onScroll);
                    container_0.removeEventListener("scrollend", onScrollEnd);
                    if (scrollTimeoutRef.current) {
                        clearTimeout(scrollTimeoutRef.current);
                    }
                };
            }
        })["CoreProgramsCarousel[useEffect()]"];
        t4 = [
            handleScroll
        ];
        $[2] = t3;
        $[3] = t4;
    } else {
        t3 = $[2];
        t4 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let scrollNext;
    let scrollPrev;
    let t10;
    let t11;
    let t12;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[4] !== children || $[5] !== currentIndex || $[6] !== locale || $[7] !== totalCards) {
        const scrollToCard = {
            "CoreProgramsCarousel[scrollToCard]": (index)=>{
                const container_1 = containerRef.current;
                if (!container_1) {
                    return;
                }
                const cards_0 = container_1.children;
                if (cards_0[index]) {
                    setCurrentIndex(index);
                    isProgrammaticScrollRef.current = true;
                    if (scrollTimeoutRef.current) {
                        clearTimeout(scrollTimeoutRef.current);
                    }
                    scrollTimeoutRef.current = setTimeout({
                        "CoreProgramsCarousel[scrollToCard > setTimeout()]": ()=>{
                            isProgrammaticScrollRef.current = false;
                        }
                    }["CoreProgramsCarousel[scrollToCard > setTimeout()]"], 550);
                    const card_0 = cards_0[index];
                    const targetScroll = card_0.offsetLeft - container_1.offsetLeft - (container_1.clientWidth - card_0.clientWidth) / 2;
                    container_1.scrollTo({
                        left: Math.max(0, targetScroll),
                        behavior: "smooth"
                    });
                }
            }
        }["CoreProgramsCarousel[scrollToCard]"];
        scrollPrev = ({
            "CoreProgramsCarousel[scrollPrev]": ()=>{
                if (currentIndex > 0) {
                    scrollToCard(currentIndex - 1);
                }
            }
        })["CoreProgramsCarousel[scrollPrev]"];
        scrollNext = ({
            "CoreProgramsCarousel[scrollNext]": ()=>{
                if (currentIndex < totalCards - 1) {
                    scrollToCard(currentIndex + 1);
                }
            }
        })["CoreProgramsCarousel[scrollNext]"];
        const t13 = currentIndex + 1;
        let t14;
        if ($[18] !== locale || $[19] !== t13) {
            t14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLocalizedNumber"])(String(t13).padStart(2, "0"), locale);
            $[18] = locale;
            $[19] = t13;
            $[20] = t14;
        } else {
            t14 = $[20];
        }
        const currentFormatted = t14;
        let t15;
        if ($[21] !== locale || $[22] !== totalCards) {
            t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLocalizedNumber"])(String(totalCards).padStart(2, "0"), locale);
            $[21] = locale;
            $[22] = totalCards;
            $[23] = t15;
        } else {
            t15 = $[23];
        }
        const totalFormatted = t15;
        t11 = "relative";
        if ($[24] !== children) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:pb-0 sm:overflow-visible mt-8 sm:mt-12",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
                lineNumber: 197,
                columnNumber: 13
            }, this);
            $[24] = children;
            $[25] = t12;
        } else {
            t12 = $[25];
        }
        t9 = "flex sm:hidden items-center justify-between mt-4 px-1 select-none";
        let t16;
        if ($[26] !== currentFormatted) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-primary font-bold text-sm tracking-tight tabular-nums inline-block min-w-[1.25rem] text-center",
                children: currentFormatted
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
                lineNumber: 206,
                columnNumber: 13
            }, this);
            $[26] = currentFormatted;
            $[27] = t16;
        } else {
            t16 = $[27];
        }
        let t17;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-400 text-xs font-normal",
                children: "/"
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
                lineNumber: 214,
                columnNumber: 13
            }, this);
            $[28] = t17;
        } else {
            t17 = $[28];
        }
        let t18;
        if ($[29] !== totalFormatted) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-500 font-medium text-xs tracking-tight tabular-nums inline-block min-w-[1.25rem] text-center",
                children: totalFormatted
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
                lineNumber: 221,
                columnNumber: 13
            }, this);
            $[29] = totalFormatted;
            $[30] = t18;
        } else {
            t18 = $[30];
        }
        if ($[31] !== t16 || $[32] !== t18) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/60 shadow-2xs",
                children: [
                    t16,
                    t17,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
                lineNumber: 228,
                columnNumber: 13
            }, this);
            $[31] = t16;
            $[32] = t18;
            $[33] = t10;
        } else {
            t10 = $[33];
        }
        t5 = "flex items-center gap-1.5";
        t6 = "tablist";
        t7 = "Program cards pagination";
        t8 = Array.from({
            length: totalCards
        }).map({
            "CoreProgramsCarousel[(anonymous)()]": (_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "CoreProgramsCarousel[(anonymous)() > <button>.onClick]": ()=>scrollToCard(idx)
                    }["CoreProgramsCarousel[(anonymous)() > <button>.onClick]"],
                    role: "tab",
                    "aria-selected": currentIndex === idx,
                    "aria-label": `Go to program ${idx + 1}`,
                    className: `h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-6 bg-primary shadow-xs shadow-primary/30" : "w-2 bg-slate-200 hover:bg-slate-300"}`
                }, idx, false, {
                    fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
                    lineNumber: 241,
                    columnNumber: 58
                }, this)
        }["CoreProgramsCarousel[(anonymous)()]"]);
        $[4] = children;
        $[5] = currentIndex;
        $[6] = locale;
        $[7] = totalCards;
        $[8] = scrollNext;
        $[9] = scrollPrev;
        $[10] = t10;
        $[11] = t11;
        $[12] = t12;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        scrollNext = $[8];
        scrollPrev = $[9];
        t10 = $[10];
        t11 = $[11];
        t12 = $[12];
        t5 = $[13];
        t6 = $[14];
        t7 = $[15];
        t8 = $[16];
        t9 = $[17];
    }
    let t13;
    if ($[34] !== t5 || $[35] !== t6 || $[36] !== t7 || $[37] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            role: t6,
            "aria-label": t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[34] = t5;
        $[35] = t6;
        $[36] = t7;
        $[37] = t8;
        $[38] = t13;
    } else {
        t13 = $[38];
    }
    const t14 = currentIndex === 0;
    let t15;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-4 h-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2.5",
                d: "M15 19l-7-7 7-7"
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
                lineNumber: 285,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] !== scrollPrev || $[41] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: scrollPrev,
            disabled: t14,
            "aria-label": "Previous program",
            className: "w-8.5 h-8.5 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-secondary disabled:opacity-30 disabled:pointer-events-none active:scale-95 hover:bg-slate-50 transition-all",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[40] = scrollPrev;
        $[41] = t14;
        $[42] = t16;
    } else {
        t16 = $[42];
    }
    const t17 = currentIndex === totalCards - 1;
    let t18;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-4 h-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2.5",
                d: "M9 5l7 7-7 7"
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
                lineNumber: 302,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] !== scrollNext || $[45] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: scrollNext,
            disabled: t17,
            "aria-label": "Next program",
            className: "w-8.5 h-8.5 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-secondary disabled:opacity-30 disabled:pointer-events-none active:scale-95 hover:bg-slate-50 transition-all",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[44] = scrollNext;
        $[45] = t17;
        $[46] = t19;
    } else {
        t19 = $[46];
    }
    let t20;
    if ($[47] !== t16 || $[48] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t16,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[47] = t16;
        $[48] = t19;
        $[49] = t20;
    } else {
        t20 = $[49];
    }
    let t21;
    if ($[50] !== t10 || $[51] !== t13 || $[52] !== t20 || $[53] !== t9) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t10,
                t13,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[50] = t10;
        $[51] = t13;
        $[52] = t20;
        $[53] = t9;
        $[54] = t21;
    } else {
        t21 = $[54];
    }
    let t22;
    if ($[55] !== t11 || $[56] !== t12 || $[57] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t12,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/CoreProgramsCarousel.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[55] = t11;
        $[56] = t12;
        $[57] = t21;
        $[58] = t22;
    } else {
        t22 = $[58];
    }
    return t22;
}
_s(CoreProgramsCarousel, "mfr1VHhrkr6Onb2A6aPVl7A0gUw=");
_c = CoreProgramsCarousel;
var _c;
__turbopack_context__.k.register(_c, "CoreProgramsCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/components/DonationBannerSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DonationBannerSection",
    ()=>DonationBannerSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$client$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/i18n/client.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function DonationBannerSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "e5b12e4be4081c6b25feee6fe4308996bf7c69e5ee571cd9d9a4344228db770c") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e5b12e4be4081c6b25feee6fe4308996bf7c69e5ee571cd9d9a4344228db770c";
    }
    const { locale } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$client$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("home");
    const [selectedAmount, setSelectedAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("a1000");
    let t1;
    if ($[1] !== t) {
        t1 = t("donationBanner.amounts.a100");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = {
            key: "a100",
            label: t1
        };
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t) {
        t3 = t("donationBanner.amounts.a500");
        $[5] = t;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t3) {
        t4 = {
            key: "a500",
            label: t3
        };
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t) {
        t5 = t("donationBanner.amounts.a1000");
        $[9] = t;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t5) {
        t6 = {
            key: "a1000",
            label: t5
        };
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t) {
        t7 = t("donationBanner.amounts.a5000");
        $[13] = t;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t7) {
        t8 = {
            key: "a5000",
            label: t7
        };
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t2 || $[18] !== t4 || $[19] !== t6 || $[20] !== t8) {
        t9 = [
            t2,
            t4,
            t6,
            t8
        ];
        $[17] = t2;
        $[18] = t4;
        $[19] = t6;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    const amounts = t9;
    let t10;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/donationbanner.png",
                    alt: "Donation Call to Action Background",
                    fill: true,
                    className: "object-cover object-center opacity-80",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/features/home/components/DonationBannerSection.tsx",
                    lineNumber: 116,
                    columnNumber: 49
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/15 pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/features/home/components/DonationBannerSection.tsx",
                    lineNumber: 116,
                    columnNumber: 210
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/DonationBannerSection.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t) {
        t11 = t("donationBanner.title");
        $[23] = t;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t) {
        t12 = t("donationBanner.subtitle");
        $[25] = t;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t11 || $[28] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
            className: "text-white leading-snug tracking-tight",
            titlePrefix: t11,
            description: t12,
            descriptionClassName: "text-white/90"
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/DonationBannerSection.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[27] = t11;
        $[28] = t12;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== amounts || $[31] !== selectedAmount) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-1",
            children: amounts.map({
                "DonationBannerSection[amounts.map()]": (amount)=>{
                    const isSelected = selectedAmount === amount.key;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "DonationBannerSection[amounts.map() > <button>.onClick]": ()=>setSelectedAmount(amount.key)
                        }["DonationBannerSection[amounts.map() > <button>.onClick]"],
                        className: `px-5 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-body-md sm:text-body-lg transition-all duration-200 cursor-pointer ${isSelected ? "bg-white text-primary shadow-md scale-105" : "bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm"}`,
                        children: amount.label
                    }, amount.key, false, {
                        fileName: "[project]/src/features/home/components/DonationBannerSection.tsx",
                        lineNumber: 151,
                        columnNumber: 18
                    }, this);
                }
            }["DonationBannerSection[amounts.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/DonationBannerSection.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[30] = amounts;
        $[31] = selectedAmount;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    const t15 = `/${locale}/donate`;
    let t16;
    if ($[33] !== t) {
        t16 = t("donationBanner.cta");
        $[33] = t;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== t15 || $[36] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-2 sm:pt-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t15,
                className: "inline-flex items-center justify-center bg-white hover:bg-secondary-soft text-primary font-bold text-body-md sm:text-body-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer",
                children: t16
            }, void 0, false, {
                fileName: "[project]/src/features/home/components/DonationBannerSection.tsx",
                lineNumber: 173,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/home/components/DonationBannerSection.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[35] = t15;
        $[36] = t16;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== t13 || $[39] !== t14 || $[40] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative overflow-hidden py-14 lg:py-20 bg-primary-darker",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container relative z-10 text-center max-w-4xl mx-auto space-y-5 sm:space-y-6",
                    children: [
                        t13,
                        t14,
                        t17
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/home/components/DonationBannerSection.tsx",
                    lineNumber: 182,
                    columnNumber: 95
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/home/components/DonationBannerSection.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[38] = t13;
        $[39] = t14;
        $[40] = t17;
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    return t18;
}
_s(DonationBannerSection, "e7FwVe8drruMHS8BqQS8Z0E1imk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$client$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = DonationBannerSection;
var _c;
__turbopack_context__.k.register(_c, "DonationBannerSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/ui/Breadcrumb.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumb",
    ()=>Breadcrumb,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
function DefaultHomeIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "758a26f606d8b8bcbb4ddd1d7eae817bdbd04e8f8a442d20175f4df784b8bf20") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "758a26f606d8b8bcbb4ddd1d7eae817bdbd04e8f8a442d20175f4df784b8bf20";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 1 20 18",
            fill: "currentColor",
            className: "w-4 h-4 shrink-0 text-primary",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.00521 17.3326V12.3291H11.9907V17.3326C11.9907 17.883 12.4391 18.3333 12.9871 18.3333H15.9762C16.5242 18.3333 16.9725 17.883 16.9725 17.3326V10.3277H18.6664C19.1247 10.3277 19.3439 9.75732 18.9952 9.45711L10.6655 1.92184C10.2869 1.5816 9.709 1.5816 9.33038 1.92184L1.00074 9.45711C0.661973 9.75732 0.871211 10.3277 1.32954 10.3277H3.02337V17.3326C3.02337 17.883 3.47173 18.3333 4.01974 18.3333H7.00884C7.55685 18.3333 8.00521 17.883 8.00521 17.3326Z"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
                lineNumber: 31,
                columnNumber: 151
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = DefaultHomeIcon;
function DefaultSeparator() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "758a26f606d8b8bcbb4ddd1d7eae817bdbd04e8f8a442d20175f4df784b8bf20") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "758a26f606d8b8bcbb4ddd1d7eae817bdbd04e8f8a442d20175f4df784b8bf20";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-3.5 h-3.5 text-slate-400 shrink-0 select-none",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: "2.5",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M9 5l7 7-7 7"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
                lineNumber: 48,
                columnNumber: 166
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = DefaultSeparator;
function Breadcrumb(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "758a26f606d8b8bcbb4ddd1d7eae817bdbd04e8f8a442d20175f4df784b8bf20") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "758a26f606d8b8bcbb4ddd1d7eae817bdbd04e8f8a442d20175f4df784b8bf20";
    }
    let children;
    let items;
    let props;
    let separator;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ items, separator, showHomeIcon: t1, children, className: t2, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = items;
        $[4] = props;
        $[5] = separator;
        $[6] = t1;
        $[7] = t2;
    } else {
        children = $[2];
        items = $[3];
        props = $[4];
        separator = $[5];
        t1 = $[6];
        t2 = $[7];
    }
    const showHomeIcon = t1 === undefined ? true : t1;
    const className = t2 === undefined ? "" : t2;
    const t3 = `flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-body-sm sm:text-body-md font-medium text-secondary-text pt-2 ${className}`;
    let t4;
    if ($[8] !== children || $[9] !== items || $[10] !== separator || $[11] !== showHomeIcon) {
        t4 = children ? children : items?.map({
            "Breadcrumb[(anonymous)()]": (item, index)=>{
                const isLast = index === items.length - 1;
                const isFirst = index === 0;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: [
                        index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "shrink-0 flex items-center justify-center",
                            "aria-hidden": "true",
                            children: separator ? typeof separator === "string" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400 text-xs select-none",
                                children: separator
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
                                lineNumber: 102,
                                columnNumber: 182
                            }, this) : separator : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultSeparator, {}, void 0, false, {
                                fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
                                lineNumber: 102,
                                columnNumber: 268
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
                            lineNumber: 102,
                            columnNumber: 58
                        }, this),
                        item.href && !isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: "inline-flex items-center gap-1.5 hover:text-primary transition-colors text-secondary/80",
                            children: [
                                isFirst && showHomeIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 flex items-center justify-center -translate-y-[1.5px]",
                                    children: item.icon || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultHomeIcon, {}, void 0, false, {
                                        fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
                                        lineNumber: 102,
                                        columnNumber: 567
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
                                    lineNumber: 102,
                                    columnNumber: 472
                                }, this),
                                !isFirst && item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 flex items-center justify-center -translate-y-[1.5px]",
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
                                    lineNumber: 102,
                                    columnNumber: 621
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
                                    lineNumber: 102,
                                    columnNumber: 721
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
                            lineNumber: 102,
                            columnNumber: 321
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary font-semibold",
                            "aria-current": "page",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
                            lineNumber: 102,
                            columnNumber: 756
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
                    lineNumber: 102,
                    columnNumber: 16
                }, this);
            }
        }["Breadcrumb[(anonymous)()]"]);
        $[8] = children;
        $[9] = items;
        $[10] = separator;
        $[11] = showHomeIcon;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== props || $[14] !== t3 || $[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            "aria-label": "Breadcrumb",
            className: t3,
            ...props,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/Breadcrumb.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[13] = props;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    return t5;
}
_c2 = Breadcrumb;
const __TURBOPACK__default__export__ = Breadcrumb;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DefaultHomeIcon");
__turbopack_context__.k.register(_c1, "DefaultSeparator");
__turbopack_context__.k.register(_c2, "Breadcrumb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/ui/OurPartners.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OurPartners",
    ()=>OurPartners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$PillBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/PillBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$client$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/i18n/client.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function OurPartners(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(72);
    if ($[0] !== "721806d5f01f35504eb789feb3876c3e71447f2593187a2412687fd9f1fe5012") {
        for(let $i = 0; $i < 72; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "721806d5f01f35504eb789feb3876c3e71447f2593187a2412687fd9f1fe5012";
    }
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$client$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("home");
    let t1;
    if ($[1] !== t) {
        t1 = t("partners.unicef.name");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t) {
        t2 = t("partners.unicef.sub");
        $[3] = t;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = {
            name: t1,
            sub: t2
        };
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t) {
        t4 = t("partners.brac.name");
        $[8] = t;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t) {
        t5 = t("partners.brac.sub");
        $[10] = t;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t4 || $[13] !== t5) {
        t6 = {
            name: t4,
            sub: t5
        };
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t) {
        t7 = t("partners.saveTheChildren.name");
        $[15] = t;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t) {
        t8 = t("partners.saveTheChildren.sub");
        $[17] = t;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t7 || $[20] !== t8) {
        t9 = {
            name: t7,
            sub: t8
        };
        $[19] = t7;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t) {
        t10 = t("partners.unWomen.name");
        $[22] = t;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== t) {
        t11 = t("partners.unWomen.sub");
        $[24] = t;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t10 || $[27] !== t11) {
        t12 = {
            name: t10,
            sub: t11
        };
        $[26] = t10;
        $[27] = t11;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t) {
        t13 = t("partners.manusherJonno.name");
        $[29] = t;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== t) {
        t14 = t("partners.manusherJonno.sub");
        $[31] = t;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== t13 || $[34] !== t14) {
        t15 = {
            name: t13,
            sub: t14
        };
        $[33] = t13;
        $[34] = t14;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] !== t) {
        t16 = t("partners.prothomAlo.name");
        $[36] = t;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] !== t) {
        t17 = t("partners.prothomAlo.sub");
        $[38] = t;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== t16 || $[41] !== t17) {
        t18 = {
            name: t16,
            sub: t17
        };
        $[40] = t16;
        $[41] = t17;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] !== t) {
        t19 = t("partners.unfpa.name");
        $[43] = t;
        $[44] = t19;
    } else {
        t19 = $[44];
    }
    let t20;
    if ($[45] !== t) {
        t20 = t("partners.unfpa.sub");
        $[45] = t;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    let t21;
    if ($[47] !== t19 || $[48] !== t20) {
        t21 = {
            name: t19,
            sub: t20
        };
        $[47] = t19;
        $[48] = t20;
        $[49] = t21;
    } else {
        t21 = $[49];
    }
    let t22;
    if ($[50] !== t12 || $[51] !== t15 || $[52] !== t18 || $[53] !== t21 || $[54] !== t3 || $[55] !== t6 || $[56] !== t9) {
        t22 = [
            t3,
            t6,
            t9,
            t12,
            t15,
            t18,
            t21
        ];
        $[50] = t12;
        $[51] = t15;
        $[52] = t18;
        $[53] = t21;
        $[54] = t3;
        $[55] = t6;
        $[56] = t9;
        $[57] = t22;
    } else {
        t22 = $[57];
    }
    const partners = t22;
    let t23;
    if ($[58] !== t) {
        t23 = t("partners.badge");
        $[58] = t;
        $[59] = t23;
    } else {
        t23 = $[59];
    }
    let t24;
    if ($[60] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$PillBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillBadge"], {
            size: "md",
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/OurPartners.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[60] = t23;
        $[61] = t24;
    } else {
        t24 = $[61];
    }
    let t25;
    if ($[62] !== t) {
        t25 = t("partners.title");
        $[62] = t;
        $[63] = t25;
    } else {
        t25 = $[63];
    }
    let t26;
    if ($[64] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
            size: "h4",
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/OurPartners.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[64] = t25;
        $[65] = t26;
    } else {
        t26 = $[65];
    }
    let t27;
    if ($[66] !== partners) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-10",
            children: partners.map(_OurPartnersPartnersMap)
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/OurPartners.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[66] = partners;
        $[67] = t27;
    } else {
        t27 = $[67];
    }
    let t28;
    if ($[68] !== t24 || $[69] !== t26 || $[70] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-16 sm:mt-24 text-center space-y-2.5 sm:space-y-3 px-2 pb-10 sm:pb-14 lg:pb-20",
            children: [
                t24,
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/ui/OurPartners.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[68] = t24;
        $[69] = t26;
        $[70] = t27;
        $[71] = t28;
    } else {
        t28 = $[71];
    }
    return t28;
}
_s(OurPartners, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$client$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = OurPartners;
function _OurPartnersPartnersMap(p, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-50 hover:bg-white border border-slate-100 rounded-2xl px-5 py-3 sm:px-6 sm:py-3.5 text-center whitespace-nowrap shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 cursor-default group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-body-md sm:text-body-lg font-bold text-secondary-lighter group-hover:text-primary transition-colors",
                children: p.name
            }, void 0, false, {
                fileName: "[project]/src/shared/components/ui/OurPartners.tsx",
                lineNumber: 283,
                columnNumber: 265
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-body-sm sm:text-body-md text-secondary-text font-medium mt-0.5",
                children: p.sub
            }, void 0, false, {
                fileName: "[project]/src/shared/components/ui/OurPartners.tsx",
                lineNumber: 283,
                columnNumber: 401
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/shared/components/ui/OurPartners.tsx",
        lineNumber: 283,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "OurPartners");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/ui/PillBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PillBadge",
    ()=>PillBadge,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const variantStyles = {
    primary: {
        container: "bg-primary-soft text-primary",
        dot: "bg-primary"
    },
    secondary: {
        container: "bg-secondary-soft text-secondary",
        dot: "bg-secondary"
    },
    white: {
        container: "bg-white/15 text-white border border-white/30 backdrop-blur-sm",
        dot: "bg-white"
    },
    outline: {
        container: "bg-transparent text-primary border border-primary/30",
        dot: "bg-primary"
    }
};
const sizeStyles = {
    sm: {
        container: "px-3 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-body-sm font-semibold",
        dot: "w-1.5 h-1.5 sm:w-2 sm:h-2"
    },
    md: {
        container: "px-3.5 py-1 sm:px-4 sm:py-1.5 text-body-sm sm:text-body-md font-semibold",
        dot: "w-1.5 h-1.5 sm:w-2 sm:h-2"
    }
};
function PillBadge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "3e715f27bd8a85fb50c35379ee12604145e920bf278e4033ef4f97c3441a7da1") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e715f27bd8a85fb50c35379ee12604145e920bf278e4033ef4f97c3441a7da1";
    }
    let children;
    let dotColor;
    let icon;
    let props;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] !== t0) {
        ({ children, showDot: t1, dotColor, variant: t2, size: t3, icon, className: t4, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = dotColor;
        $[4] = icon;
        $[5] = props;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        children = $[2];
        dotColor = $[3];
        icon = $[4];
        props = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
    }
    const showDot = t1 === undefined ? true : t1;
    const variant = t2 === undefined ? "primary" : t2;
    const size = t3 === undefined ? "sm" : t3;
    const className = t4 === undefined ? "" : t4;
    const currentVariant = variantStyles[variant];
    const currentSize = sizeStyles[size];
    const dotClass = dotColor || currentVariant.dot;
    const t5 = `inline-flex items-center gap-1.5 sm:gap-2 rounded-full ${currentSize.container} ${currentVariant.container} ${className}`;
    let t6;
    if ($[10] !== icon) {
        t6 = icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "shrink-0 flex items-center",
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/PillBadge.tsx",
            lineNumber: 107,
            columnNumber: 18
        }, this);
        $[10] = icon;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== currentSize.dot || $[13] !== dotClass || $[14] !== icon || $[15] !== showDot) {
        t7 = showDot && !icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `${currentSize.dot} rounded-full shrink-0 ${dotClass}`,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/PillBadge.tsx",
            lineNumber: 115,
            columnNumber: 30
        }, this);
        $[12] = currentSize.dot;
        $[13] = dotClass;
        $[14] = icon;
        $[15] = showDot;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== children) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/PillBadge.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[17] = children;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== props || $[20] !== t5 || $[21] !== t6 || $[22] !== t7 || $[23] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            ...props,
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/ui/PillBadge.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[19] = props;
        $[20] = t5;
        $[21] = t6;
        $[22] = t7;
        $[23] = t8;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    return t9;
}
_c = PillBadge;
const __TURBOPACK__default__export__ = PillBadge;
var _c;
__turbopack_context__.k.register(_c, "PillBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 /**
 
import { PillBadge } from "@/shared/components/ui";

// 1. Standard Section Pill Badge (default)
<PillBadge>{t("recentActivities.badge")}</PillBadge>

// 2. Without the leading dot
<PillBadge showDot={false}>{t("partners.badge")}</PillBadge>

// 3. White badge on dark or colored banners
<PillBadge variant="white">Emergency Relief</PillBadge>

// 4. Custom dot color or extra classes
<PillBadge dotColor="bg-emerald-500" className="mb-4">
  Active Now
</PillBadge>


 */ }),
"[project]/src/shared/components/ui/SectionHeading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Heading",
    ()=>Heading,
    "SectionHeading",
    ()=>SectionHeading,
    "SectionHeadingHighlight",
    ()=>SectionHeadingHighlight,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const sizeStyles = {
    section: "text-[28px] leading-[1.2] sm:text-h2 font-bold tracking-tight",
    h1: "text-h2 sm:text-h1 font-bold tracking-tight",
    h2: "text-h3 sm:text-h2 font-bold tracking-tight",
    h3: "text-h4 sm:text-h3 font-bold tracking-tight",
    h4: "text-h5 sm:text-h4 font-bold tracking-tight",
    h5: "text-h5 font-bold tracking-tight"
};
const variantStyles = {
    default: {
        text: "text-secondary",
        highlight: "text-primary",
        description: "text-body-md sm:text-body-lg text-secondary-text leading-relaxed font-normal"
    },
    white: {
        text: "text-white",
        highlight: "text-primary-soft",
        description: "text-body-md sm:text-body-xl text-white/90 leading-relaxed font-normal"
    },
    primary: {
        text: "text-primary",
        highlight: "text-secondary",
        description: "text-body-sm sm:text-body-md text-primary-soft leading-relaxed font-normal"
    }
};
function SectionHeadingHighlight(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "14dedb17632ae20e79c1782a288ede283ac7c7cae098e74ab0e180a1b6645a58") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "14dedb17632ae20e79c1782a288ede283ac7c7cae098e74ab0e180a1b6645a58";
    }
    const { children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `text-primary ${className}`;
    let t3;
    if ($[1] !== children || $[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t2,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/SectionHeading.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
}
_c = SectionHeadingHighlight;
function SectionHeading(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "14dedb17632ae20e79c1782a288ede283ac7c7cae098e74ab0e180a1b6645a58") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "14dedb17632ae20e79c1782a288ede283ac7c7cae098e74ab0e180a1b6645a58";
    }
    let children;
    let containerClassName;
    let description;
    let highlight;
    let highlightClassName;
    let props;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let titlePrefix;
    let titleSuffix;
    if ($[1] !== t0) {
        ({ as: t1, titlePrefix, highlight, titleSuffix, description, descriptionClassName: t2, containerClassName, children, size: t3, variant: t4, highlightClassName, className: t5, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = containerClassName;
        $[4] = description;
        $[5] = highlight;
        $[6] = highlightClassName;
        $[7] = props;
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
        $[13] = titlePrefix;
        $[14] = titleSuffix;
    } else {
        children = $[2];
        containerClassName = $[3];
        description = $[4];
        highlight = $[5];
        highlightClassName = $[6];
        props = $[7];
        t1 = $[8];
        t2 = $[9];
        t3 = $[10];
        t4 = $[11];
        t5 = $[12];
        titlePrefix = $[13];
        titleSuffix = $[14];
    }
    const Component = t1 === undefined ? "h2" : t1;
    const descriptionClassName = t2 === undefined ? "" : t2;
    const size = t3 === undefined ? "section" : t3;
    const variant = t4 === undefined ? "default" : t4;
    const className = t5 === undefined ? "" : t5;
    const currentSize = sizeStyles[size];
    const currentVariant = variantStyles[variant];
    const activeHighlightClass = highlightClassName || currentVariant.highlight;
    const t6 = `${currentSize} ${currentVariant.text} ${className}`;
    let t7;
    if ($[15] !== activeHighlightClass || $[16] !== children || $[17] !== highlight || $[18] !== titlePrefix || $[19] !== titleSuffix) {
        t7 = children ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                titlePrefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: titlePrefix
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/ui/SectionHeading.tsx",
                    lineNumber: 179,
                    columnNumber: 50
                }, this),
                highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: activeHighlightClass,
                    children: titlePrefix ? ` ${highlight}` : highlight
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/ui/SectionHeading.tsx",
                    lineNumber: 179,
                    columnNumber: 91
                }, this),
                titleSuffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        " ",
                        titleSuffix
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/components/ui/SectionHeading.tsx",
                    lineNumber: 179,
                    columnNumber: 197
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/ui/SectionHeading.tsx",
            lineNumber: 179,
            columnNumber: 32
        }, this);
        $[15] = activeHighlightClass;
        $[16] = children;
        $[17] = highlight;
        $[18] = titlePrefix;
        $[19] = titleSuffix;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] !== Component || $[22] !== props || $[23] !== t6 || $[24] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
            className: t6,
            ...props,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/SectionHeading.tsx",
            lineNumber: 191,
            columnNumber: 10
        }, this);
        $[21] = Component;
        $[22] = props;
        $[23] = t6;
        $[24] = t7;
        $[25] = t8;
    } else {
        t8 = $[25];
    }
    let t9;
    if ($[26] !== currentVariant.description || $[27] !== description || $[28] !== descriptionClassName) {
        t9 = description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: `${currentVariant.description} ${descriptionClassName}`,
            children: description
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/SectionHeading.tsx",
            lineNumber: 202,
            columnNumber: 25
        }, this);
        $[26] = currentVariant.description;
        $[27] = description;
        $[28] = descriptionClassName;
        $[29] = t9;
    } else {
        t9 = $[29];
    }
    let t10;
    if ($[30] !== t8 || $[31] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/ui/SectionHeading.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[30] = t8;
        $[31] = t9;
        $[32] = t10;
    } else {
        t10 = $[32];
    }
    const content = t10;
    if (containerClassName) {
        let t11;
        if ($[33] !== containerClassName || $[34] !== content) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: containerClassName,
                children: content
            }, void 0, false, {
                fileName: "[project]/src/shared/components/ui/SectionHeading.tsx",
                lineNumber: 223,
                columnNumber: 13
            }, this);
            $[33] = containerClassName;
            $[34] = content;
            $[35] = t11;
        } else {
            t11 = $[35];
        }
        return t11;
    }
    return content;
}
_c1 = SectionHeading;
// Attach subcomponent for compound usage
SectionHeading.Highlight = SectionHeadingHighlight;
const Heading = SectionHeading;
const __TURBOPACK__default__export__ = SectionHeading;
var _c, _c1;
__turbopack_context__.k.register(_c, "SectionHeadingHighlight");
__turbopack_context__.k.register(_c1, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 /**
 * Examples:
 * 
 * import { SectionHeading } from "@/shared/components/ui";
 * 
 * // 1. Heading with prefix, highlight, and optional description
 * <SectionHeading
 *   titlePrefix={t("recentActivities.titlePrefix")}
 *   highlight={t("recentActivities.titleHighlight")}
 *   description={t("recentActivities.subtitle")}
 * />
 * 
 * // 2. Plain heading with description
 * <SectionHeading
 *   as="h3"
 *   size="h3"
 *   description="Partner organizations supporting our mission"
 * >
 *   {t("partners.title")}
 * </SectionHeading>
 * 
 * // 3. Compound with Highlight subcomponent and description
 * <SectionHeading description="Discover how we make a difference">
 *   আমাদের সাম্প্রতিক{" "}
 *   <SectionHeading.Highlight>কার্যক্রম</SectionHeading.Highlight>
 * </SectionHeading>
 * 
 * // 4. White variant on colored/dark banners
 * <SectionHeading
 *   variant="white"
 *   description={t("donationBanner.subtitle")}
 * >
 *   {t("donationBanner.title")}
 * </SectionHeading>
 */ }),
"[project]/src/shared/components/ui/TogetherCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TogetherCTA",
    ()=>TogetherCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$client$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/i18n/client.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$PillBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/PillBadge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function TogetherCTA(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "a82a63498b67fd376b7340be1f9d7e3e833088292a2729050196d7b7adf5a736") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a82a63498b67fd376b7340be1f9d7e3e833088292a2729050196d7b7adf5a736";
    }
    const { locale, className: t1, badge, titlePrefix, titleHighlight, subtitle, donateHref, joinHref } = t0;
    const className = t1 === undefined ? "" : t1;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$client$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("common");
    let t2;
    if ($[1] !== badge || $[2] !== t) {
        t2 = badge ?? t("togetherCTA.badge");
        $[1] = badge;
        $[2] = t;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const displayBadge = t2;
    let t3;
    if ($[4] !== t || $[5] !== titlePrefix) {
        t3 = titlePrefix ?? t("togetherCTA.titlePrefix");
        $[4] = t;
        $[5] = titlePrefix;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const displayTitlePrefix = t3;
    let t4;
    if ($[7] !== t || $[8] !== titleHighlight) {
        t4 = titleHighlight ?? t("togetherCTA.titleHighlight");
        $[7] = t;
        $[8] = titleHighlight;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const displayTitleHighlight = t4;
    let t5;
    if ($[10] !== subtitle || $[11] !== t) {
        t5 = subtitle ?? t("togetherCTA.subtitle");
        $[10] = subtitle;
        $[11] = t;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const displaySubtitle = t5;
    const targetDonateHref = donateHref ?? `/${locale}/donate`;
    const targetJoinHref = joinHref ?? `/${locale}/volunteer`;
    const t6 = `container mx-auto px-4 py-8 sm:py-12 ${className}`;
    let t7;
    if ($[13] !== displayBadge) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$PillBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillBadge"], {
                variant: "primary",
                className: "bg-pink-50/90 text-primary border border-pink-100/80 font-semibold px-4 py-1",
                children: displayBadge
            }, void 0, false, {
                fileName: "[project]/src/shared/components/ui/TogetherCTA.tsx",
                lineNumber: 90,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/TogetherCTA.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[13] = displayBadge;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== displayTitlePrefix) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: displayTitlePrefix
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/TogetherCTA.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[15] = displayTitlePrefix;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== displayTitleHighlight) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-primary font-extrabold",
            children: displayTitleHighlight
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/TogetherCTA.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[17] = displayTitleHighlight;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t8 || $[20] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl sm:text-4xl font-extrabold text-secondary tracking-tight",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/ui/TogetherCTA.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[19] = t8;
        $[20] = t9;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== displaySubtitle) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs sm:text-sm text-secondary/70 max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed font-normal",
            children: displaySubtitle
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/TogetherCTA.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[22] = displaySubtitle;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t) {
        t12 = t("togetherCTA.donateButton");
        $[24] = t;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== t12 || $[27] !== targetDonateHref) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: targetDonateHref,
            className: "bg-primary hover:bg-primary-600 text-white font-bold text-xs sm:text-sm px-7 sm:px-8 py-3.5 rounded-full shadow-lg shadow-pink-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/TogetherCTA.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[26] = t12;
        $[27] = targetDonateHref;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== t) {
        t14 = t("togetherCTA.joinButton");
        $[29] = t;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/TogetherCTA.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-4 h-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2.5",
                d: "M9 5l7 7-7 7"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/ui/TogetherCTA.tsx",
                lineNumber: 164,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/TogetherCTA.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] !== t15 || $[35] !== targetJoinHref) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: targetJoinHref,
            className: "border-2 border-primary text-primary hover:bg-pink-50 font-bold text-xs sm:text-sm px-7 sm:px-8 py-3 rounded-full inline-flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/ui/TogetherCTA.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[34] = t15;
        $[35] = targetJoinHref;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] !== t13 || $[38] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-6 sm:pt-8",
            children: [
                t13,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/ui/TogetherCTA.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[37] = t13;
        $[38] = t17;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    if ($[40] !== t10 || $[41] !== t11 || $[42] !== t18 || $[43] !== t7) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-3xl sm:rounded-[2.5rem] border border-gray-100 shadow-lg shadow-slate-100/70 p-7 sm:p-14 text-center relative overflow-hidden",
            children: [
                t7,
                t10,
                t11,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/ui/TogetherCTA.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[40] = t10;
        $[41] = t11;
        $[42] = t18;
        $[43] = t7;
        $[44] = t19;
    } else {
        t19 = $[44];
    }
    let t20;
    if ($[45] !== t19 || $[46] !== t6) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t6,
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/shared/components/ui/TogetherCTA.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[45] = t19;
        $[46] = t6;
        $[47] = t20;
    } else {
        t20 = $[47];
    }
    return t20;
}
_s(TogetherCTA, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$client$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = TogetherCTA;
var _c;
__turbopack_context__.k.register(_c, "TogetherCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/ui/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$PillBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/PillBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$Breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/Breadcrumb.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$OurPartners$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/OurPartners.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ui$2f$TogetherCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ui/TogetherCTA.tsx [app-client] (ecmascript)");
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0by-fbp._.js.map