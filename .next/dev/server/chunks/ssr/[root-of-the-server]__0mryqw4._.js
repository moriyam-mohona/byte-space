module.exports = [
"[next]/internal/font/google/hind_siliguri_6a6f3bf8.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$hind_siliguri_6a6f3bf8$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/hind_siliguri_6a6f3bf8.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$hind_siliguri_6a6f3bf8$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Hind Siliguri', 'Hind Siliguri Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$hind_siliguri_6a6f3bf8$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$hind_siliguri_6a6f3bf8$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/hind_siliguri_6a6f3bf8.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "hind_siliguri_6a6f3bf8-module__bmfmLa__className",
  "variable": "hind_siliguri_6a6f3bf8-module__bmfmLa__variable",
});
}),
"[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__next_create_empty_gsp_error",
    ()=>__next_create_empty_gsp_error,
    "default",
    ()=>LocalizedRootLayout,
    "generateStaticParams",
    ()=>generateStaticParams,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$ubuntu_sans_7ac3c18d$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/ubuntu_sans_7ac3c18d.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$hind_siliguri_6a6f3bf8$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/hind_siliguri_6a6f3bf8.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/providers.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/components/layout/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/layout/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$layout$2f$BangladeshMapBackground$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/layout/BangladeshMapBackground.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/i18n/config.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const metadata = {
    title: "Shelter of Hope | আশ্রয়ের আলো",
    description: "Non-profit humanitarian foundation in Bangladesh"
};
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCALES"].map((locale)=>({
            locale
        }));
}
async function LocalizedRootLayout({ children, params }) {
    const { locale: rawLocale } = await params;
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidLocale"])(rawLocale) ? rawLocale : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_LOCALE"];
    const localeConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCALE_CONFIGS"][locale];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: locale,
        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$ubuntu_sans_7ac3c18d$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$hind_siliguri_6a6f3bf8$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} ${localeConfig.htmlClass} h-full antialiased`,
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "min-h-full flex flex-col",
            suppressHydrationWarning: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Providers"], {
                initialLocale: locale,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                        fileName: "[project]/src/app/[locale]/layout.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$layout$2f$BangladeshMapBackground$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BangladeshMapBackground"], {
                        opacity: 0.8,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/layout.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                        fileName: "[project]/src/app/[locale]/layout.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/layout.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/[locale]/layout.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/layout.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
const __next_create_empty_gsp_error = function generateStaticParams() {
    return new Error('When using Cache Components, all `generateStaticParams` functions must return at least one result. This is to ensure that we can perform build-time validation that there is no other dynamic accesses that would cause a runtime error.\n\nLearn more: https://nextjs.org/docs/messages/empty-generate-static-params');
};
}),
"[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/shared/i18n/config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Internationalization (i18n) Configuration
 * Single source of truth for supported locales, default locale, and font mapping.
 */ __turbopack_context__.s([
    "ALL_LOCALE_HTML_CLASSES",
    ()=>ALL_LOCALE_HTML_CLASSES,
    "DEFAULT_LOCALE",
    ()=>DEFAULT_LOCALE,
    "LOCALES",
    ()=>LOCALES,
    "LOCALE_CONFIGS",
    ()=>LOCALE_CONFIGS,
    "LOCALE_COOKIE_NAME",
    ()=>LOCALE_COOKIE_NAME,
    "isValidLocale",
    ()=>isValidLocale
]);
const LOCALES = [
    "bn",
    "en"
];
const DEFAULT_LOCALE = "bn";
const LOCALE_COOKIE_NAME = "NEXT_LOCALE";
const LOCALE_CONFIGS = {
    bn: {
        code: "bn",
        label: "বাংলা",
        nativeName: "বাংলা",
        fontName: "Hind Siliguri",
        fontDisplayName: "হিন্দ শিলিগুড়ি",
        fontSubLabel: "হিন্দ শিলিগুড়ি ফন্ট",
        fontMode: "bengali-first",
        htmlClass: "font-bengali-first",
        direction: "ltr"
    },
    en: {
        code: "en",
        label: "English",
        nativeName: "English",
        fontName: "Ubuntu Sans",
        fontDisplayName: "Ubuntu Sans",
        fontSubLabel: "Ubuntu Sans Font",
        fontMode: "english-first",
        htmlClass: "font-english-first",
        direction: "ltr"
    }
};
const ALL_LOCALE_HTML_CLASSES = Object.values(LOCALE_CONFIGS).map((c)=>c.htmlClass);
function isValidLocale(value) {
    return typeof value === "string" && LOCALES.includes(value);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0mryqw4._.js.map