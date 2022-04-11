"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/Bio.js


function Bio(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
        className: "text-justify pb-4 px-5 md:px-0",
        children: [
            "Steven resides in Austin, TX and explores storytelling and representation through film photography. With a background in film production and studies, Steven takes inspiration from cinema as well as the lives of the people around him. By portraying reality by way of the hyper reality and making the everyday cinematic, Stevens goal is to reflect what makes us human and unique within a concept informed by motion picture film; his desire is that you don't just see a portrait but rather a whole world you can visualize and a story you want to explore that goes beyond the photograph, and beyond reality.",
            props.about
        ]
    });
}
/* harmony default export */ const components_Bio = (Bio);

;// CONCATENATED MODULE: ./components/ContactInfo.js


function ContactInfo() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("address", {
        className: "text-center lg:text-left flex flex-row justify-around lg:flex-col",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Email"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "mailto:stevenraymartinez496@gmail.com",
                        children: [
                            "stevenraymartinez496@gmail.com",
                            " "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Instagram"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.instagram.com/cinephilebaker/",
                        children: "cinephilebaker"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_ContactInfo = (ContactInfo);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/Logo.js



function Logo() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-center my-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xl",
                children: "Steven Ray Martinez"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-base",
                children: "is"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-3xl uppercase",
                        children: "CINEPHILEBAKER"
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const components_Logo = (Logo);

;// CONCATENATED MODULE: ./components/Header/links.js
// import portraitsImg from "../assets/portraits.png";
// import audioVisualImg from "../assets/audio_visual.png";
// import somewhereInMathisImg from "../assets/somewhere_in_mathis.png";
const links = [
    {
        name: "Portraits",
        path: "portraits",
        alt: "Woman against wall"
    },
    {
        name: "Somewhere in Mathis",
        path: "somewhere-in-mathis",
        alt: "Black and white photo of field with a few wind generators"
    },
    {
        name: "Audio / Visual",
        path: "audio-visual",
        alt: "Man with red harness laying in shallow water"
    }, 
];
/* harmony default export */ const Header_links = (links);

;// CONCATENATED MODULE: ./components/Header/NavLink.js



function NavLink({ image , alt , name , path  }) {
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(false);
    let activeClass = active ? "bg-red-200" : "";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: path,
                className: "hidden md:block cursor-pointer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: image,
                        alt: alt,
                        className: "w-full mb-2"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: path,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: `uppercase text-base text-center ${activeClass}`,
                        children: name
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const Header_NavLink = (NavLink);

;// CONCATENATED MODULE: ./components/Header/Navbar.js




function Navbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "col-span-12 flex flex-col align-center py-3 md:flex-row lg:justify-between lg:py-5 gap-5",
        children: Header_links.map((link, i)=>/*#__PURE__*/ jsx_runtime_.jsx(Header_NavLink, {
                image: link.image,
                alt: link.alt,
                name: link.name,
                path: `/${link.path}`
            }, i)
        )
    });
}
/* harmony default export */ const Header_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Header/index.js




function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-5 col-span-12 lg:hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        style: {
                            borderTop: ".25rem solid white"
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Navbar, {})
        ]
    });
}
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./pages/index.js









function Home(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container mx-auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "flex flex-col-reverse lg:flex-row lg:items-center gap-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
                        className: "lg:w-3/4 xl:w-1/3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden w-full lg:block",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "px-5 pb-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                        style: {
                                            borderTop: ".25rem solid white",
                                            margin: "1rem 0"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_Bio, {
                                        about: props.content
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_ContactInfo, {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-grow max-w-5xl ml-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            alt: "Woman in shallow water",
                            // src={bannerImg}
                            className: "w-full"
                        })
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps() {
    try {
        const response = await external_axios_default().get("http://localhost:1337/api/blogs");
        console.log(response);
    } catch (err) {
        console.log(err);
    }
    return {
        props: {
            content: "gay"
        }
    };
}


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61], () => (__webpack_exec__(618)));
module.exports = __webpack_exports__;

})();