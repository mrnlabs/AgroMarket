import Review from "@/Components/frontend/Review";
import GuestLayout from "@/Layouts/GuestLayout";
import { Product } from "@/types";
import { formatCurrency } from "@/utils/formatCurrency";
import React from "react";
const ProductDetails = ({ product = [] }: Product) => {
    return (
        <GuestLayout>
            <div className="breadcrumb mb-0 py-26 bg-color-one">
                <div className="container container-lg">
                    <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
                        <h6 className="mb-0">Shop Details</h6>
                        <ul className="flex items-center gap-8 flex-wrap">
                            <li className="text-sm">
                                <a
                                    href="index.html"
                                    className="text-main-600 flex items-center gap-8"
                                >
                                    <i className="ph ph-house"></i> Home
                                </a>
                            </li>
                            <li className="flex items-center text-gray-500">
                                <i className="ph ph-caret-right"></i>
                            </li>
                            <li className="text-sm">
                                <a
                                    href="shop.html"
                                    className="text-main-600 flex items-center gap-8"
                                >
                                    Shop
                                </a>
                            </li>
                            <li className="flex items-center text-gray-500">
                                <i className="ph ph-caret-right"></i>
                            </li>
                            <li className="text-sm">
                                <a
                                    href="index.html"
                                    className="text-main-600 flex items-center gap-8"
                                >
                                    Shop Grid
                                </a>
                            </li>
                            <li className="flex items-center text-gray-500">
                                <i className="ph ph-caret-right"></i>
                            </li>
                            <li className="text-sm text-neutral-600">
                               {product.title}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="product-details py-80">
                <div className="container container-lg">
                    <div className="row g-4">
                        <div className="xl:w-9/12 flex-grow-0 flex-shrink-0 basis-auto">
                            <div className="row g-4">
                                <div className="2xl:w-6/12 flex-grow-0 flex-shrink-0 basis-auto">
                                    <div className="product-details__left">
                                        <div className="product-details__thumb-slider border border-gray-100 rounded-16 slick-initialized slick-slider">
                                            <div className="slick-list draggable">
                                                <div
                                                    className="slick-track"
                                                    style={{
                                                        opacity: 1,
                                                        width: "1215px",
                                                    }}
                                                >
                                                    <div
                                                        className="slick-slide slick-current slick-active"
                                                        data-slick-index="0"
                                                        aria-hidden="false"
                                                        style={{
                                                            width: "223px",
                                                            position:
                                                                "relative",
                                                            left: "0px",
                                                            top: "0px",
                                                            zIndex: 999,
                                                            opacity: 1,
                                                        }}
                                                        tabIndex={0}
                                                    >
                                                        <div className="product-details__thumb flex items-center justify-center h-full">
                                                            <img
                                                                src="images/product-details-thumb1.png"
                                                                alt="Image"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="slick-slide"
                                                        data-slick-index="1"
                                                        aria-hidden="true"
                                                        style={{
                                                            width: "223px",
                                                            position:
                                                                "relative",
                                                            left: "-243px",
                                                            top: "0px",
                                                            zIndex: 998,
                                                            opacity: 0,
                                                        }}
                                                        tabIndex={-1}
                                                    >
                                                        <div className="product-details__thumb flex items-center justify-center h-full">
                                                            <img
                                                                src="images/product-details-thumb2.png"
                                                                alt="Image"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="slick-slide"
                                                        data-slick-index="2"
                                                        aria-hidden="true"
                                                        style={{
                                                            width: "223px",
                                                            position:
                                                                "relative",
                                                            left: "-486px",
                                                            top: "0px",
                                                            zIndex: 998,
                                                            opacity: 0,
                                                        }}
                                                        tabIndex={-1}
                                                    >
                                                        <div className="product-details__thumb flex items-center justify-center h-full">
                                                            <img
                                                                src="images/product-details-thumb3.png"
                                                                alt="Image"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="slick-slide"
                                                        data-slick-index="3"
                                                        aria-hidden="true"
                                                        style={{
                                                            width: "223px",
                                                            position:
                                                                "relative",
                                                            left: "-729px",
                                                            top: "0px",
                                                            zIndex: 998,
                                                            opacity: 0,
                                                        }}
                                                        tabIndex={-1}
                                                    >
                                                        <div className="product-details__thumb flex items-center justify-center h-full">
                                                            <img
                                                                src="images/product-details-thumb1.png"
                                                                alt="Image"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="slick-slide"
                                                        data-slick-index="4"
                                                        aria-hidden="true"
                                                        style={{
                                                            width: "223px",
                                                            position:
                                                                "relative",
                                                            left: "-972px",
                                                            top: "0px",
                                                            zIndex: 998,
                                                            opacity: 0,
                                                        }}
                                                        tabIndex={-1}
                                                    >
                                                        <div className="product-details__thumb flex items-center justify-center h-full">
                                                            <img
                                                                src="images/product-details-thumb2.png"
                                                                alt="Image"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-24">
                                            <div className="product-details__images-slider slick-initialized slick-slider">
                                                <div className="slick-list draggable">
                                                    <div
                                                        className="slick-track"
                                                        style={{
                                                            opacity: 1,
                                                            width: "1582px",
                                                            transform:
                                                                "translate3d(-452px, 0px, 0px)",
                                                        }}
                                                    >
                                                        {/* Cloned slides (-4 to -1) */}
                                                        <div
                                                            className="slick-slide slick-cloned"
                                                            data-slick-index="-4"
                                                            aria-hidden="true"
                                                            style={{
                                                                width: "93px",
                                                            }}
                                                            tabIndex={-1}
                                                        >
                                                            <div className="max-w-120 max-h-120 h-full flex items-center justify-center border border-gray-100 rounded-16 p-8">
                                                                <img
                                                                    src="images/product-details-img2.png"
                                                                    alt="Image"
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Similar cloned slides -3 to -1 follow the same pattern */}
                                                        {/* ... */}

                                                        {/* Active slides (0 to 3) */}
                                                        <div
                                                            className="slick-slide slick-current slick-active"
                                                            data-slick-index="0"
                                                            aria-hidden="false"
                                                            style={{
                                                                width: "93px",
                                                            }}
                                                            tabIndex={0}
                                                        >
                                                            <div className="max-w-120 max-h-120 h-full flex items-center justify-center border border-gray-100 rounded-16 p-8">
                                                                <img
                                                                    src="images/product-details-img1.png"
                                                                    alt="Image"
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Similar active slides 1 to 3 follow the same pattern */}
                                                        {/* ... */}

                                                        {/* Regular slide (4) */}
                                                        <div
                                                            className="slick-slide"
                                                            data-slick-index="4"
                                                            aria-hidden="true"
                                                            style={{
                                                                width: "93px",
                                                            }}
                                                            tabIndex={-1}
                                                        >
                                                            <div className="max-w-120 max-h-120 h-full flex items-center justify-center border border-gray-100 rounded-16 p-8">
                                                                <img
                                                                    src="images/product-details-img2.png"
                                                                    alt="Image"
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Cloned slides (5 to 9) */}
                                                        <div
                                                            className="slick-slide slick-cloned"
                                                            data-slick-index="5"
                                                            aria-hidden="true"
                                                            style={{
                                                                width: "93px",
                                                            }}
                                                            tabIndex={-1}
                                                        >
                                                            <div className="max-w-120 max-h-120 h-full flex items-center justify-center border border-gray-100 rounded-16 p-8">
                                                                <img
                                                                    src="images/product-details-img1.png"
                                                                    alt="Image"
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Similar cloned slides 6 to 9 follow the same pattern */}
                                                        {/* ... */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="2xl:w-6/12 flex-grow-0 flex-shrink-0 basis-auto">
                                    <div className="product-details__content">
                                        <h5 className="mb-12">
                                            {product.title}
                                        </h5>
                                        <div className="flex items-center flex-wrap gap-12">
                                            <div className="flex items-center gap-12 flex-wrap">
                                                <div className="flex items-center gap-8">
                                                    <span className="text-15 font-[500] text-warning-600 flex">
                                                        <i className="ph-fill ph-star"></i>
                                                    </span>{" "}
                                                    <span className="text-15 font-[500] text-warning-600 flex">
                                                        <i className="ph-fill ph-star"></i>
                                                    </span>{" "}
                                                    <span className="text-15 font-[500] text-warning-600 flex">
                                                        <i className="ph-fill ph-star"></i>
                                                    </span>{" "}
                                                    <span className="text-15 font-[500] text-warning-600 flex">
                                                        <i className="ph-fill ph-star"></i>
                                                    </span>{" "}
                                                    <span className="text-15 font-[500] text-warning-600 flex">
                                                        <i className="ph-fill ph-star"></i>
                                                    </span>
                                                </div>
                                                <span className="text-sm font-[500] text-neutral-600">
                                                    4.7 Star Rating
                                                </span>{" "}
                                                <span className="text-sm font-[500] text-gray-500">
                                                    (21,671)
                                                </span>
                                            </div>
                                            <span className="text-sm font-[500] text-gray-500">
                                                |
                                            </span>{" "}
                                            <span className="text-gray-900">
                                                <span className="text-gray-400">
                                                    SKU:
                                                </span>
                                                EB4DRP
                                            </span>
                                        </div>
                                        <span className="mt-32 pt-32 text-gray-700 border-t border-gray-100 block"></span>
                                        <p className="text-gray-700">
                                            Vivamus adipiscing nisl ut dolor
                                            dignissim semper. Nulla luctus
                                            malesuada tincidunt. Class aptent
                                            taciti sociosqu ad litora torquent
                                        </p>
                                        <div className="mt-32 flex items-center flex-wrap gap-32">
                                            <div className="flex items-center gap-8">
                                               
                                                <h4 className="mb-0">{ formatCurrency(product.price)}</h4>
                                                
                                                <span className="text-md text-gray-500">
                                                    $38.00
                                                </span>
                                            </div>
                                            <a
                                                href="index.html"
                                                className="btn btn-main rounded-[50rem]"
                                            >
                                                Order on What'sApp
                                            </a>
                                        </div>
                                        <span className="mt-32 pt-32 text-gray-700 border-t border-gray-100 block"></span>
                                        <div className="flex items-center flex-wrap gap-16 bg-color-one rounded-8 py-16 px-24">
                                            <div className="flex items-center gap-16">
                                                <span className="text-main-600 text-sm">
                                                    Special Offer:
                                                </span>
                                            </div>
                                            <div
                                                className="countdown"
                                                id="countdown11"
                                            >
                                                <ul className="countdown-list flex items-center flex-wrap">
                                                    <li className="countdown-list__item text-heading gap-4 text-xs font-[500] w-28 h-28 rounded-4 border border-main-600 !p-0 flex items-center justify-center">
                                                        <span className="days">
                                                            312
                                                        </span>
                                                    </li>
                                                    <li className="countdown-list__item text-heading gap-4 text-xs font-[500] w-28 h-28 rounded-4 border border-main-600 !p-0 flex items-center justify-center">
                                                        <span className="hours">
                                                            15
                                                        </span>
                                                    </li>
                                                    <li className="countdown-list__item text-heading gap-4 text-xs font-[500] w-28 h-28 rounded-4 border border-main-600 !p-0 flex items-center justify-center">
                                                        <span className="minutes">
                                                            21
                                                        </span>
                                                    </li>
                                                    <li className="countdown-list__item text-heading gap-4 text-xs font-[500] w-28 h-28 rounded-4 border border-main-600 !p-0 flex items-center justify-center">
                                                        <span className="seconds">
                                                            20
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span className="text-gray-900 text-xs">
                                                Remains untill the end of the
                                                offer
                                            </span>
                                        </div>
                                        <div className="mb-24">
                                            <div className="mt-32 flex items-center gap-12 mb-16">
                                                <span className="w-32 h-32 bg-white flex items-center justify-center rounded-[50%] text-main-600 box-shadow-xl">
                                                    <i className="ph-fill ph-lightning"></i>
                                                </span>
                                                <h6 className="text-md mb-0 font-[700] text-gray-900">
                                                    Products are almost sold out
                                                </h6>
                                            </div>
                                            <div
                                                className="progress w-full bg-gray-100 rounded-[50rem] h-8"
                                                role="progressbar"
                                                aria-label="Basic example"
                                                aria-valuenow={32}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar bg-main-two-600 rounded-[50rem] h-full"
                                                    style={{ width: "32%" }}
                                                ></div>
                                            </div>
                                            <span className="text-sm text-gray-700 mt-8">
                                                Available only:45
                                            </span>
                                        </div>
                                        <span className="text-gray-900 block mb-8">
                                            Quantity:
                                        </span>
                                        <div className="flex-between gap-16 flex-wrap">
                                            <div className="flex items-center flex-wrap gap-16">
                                                <div className="border border-gray-100 rounded-[50rem] py-9 px-16 flex items-center">
                                                    <button
                                                        type="button"
                                                        className="quantity__minus p-4 text-gray-700 hover-text-main-600 flex items-center justify-center"
                                                    >
                                                        <i className="ph ph-minus"></i>
                                                    </button>
                                                    <input
                                                        type="number"
                                                        className="quantity__input border-0 text-center w-32"
                                                        value="1"
                                                    />{" "}
                                                    <button
                                                        type="button"
                                                        className="quantity__plus p-4 text-gray-700 hover-text-main-600 flex items-center justify-center"
                                                    >
                                                        <i className="ph ph-plus"></i>
                                                    </button>
                                                </div>
                                                <a
                                                    href="index.html"
                                                    className="btn btn-main rounded-[50rem] flex items-center inline-flex gap-8 px-48"
                                                >
                                                    <i className="ph ph-shopping-cart"></i>{" "}
                                                    Add To Cart
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-12">
                                                <a
                                                    href="index.html"
                                                    className="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex items-center justify-center rounded-[50%]"
                                                >
                                                    <i className="ph ph-heart"></i>{" "}
                                                </a>
                                                <a
                                                    href="index.html"
                                                    className="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex items-center justify-center rounded-[50%]"
                                                >
                                                    <i className="ph ph-shuffle"></i>{" "}
                                                </a>
                                                <a
                                                    href="index.html"
                                                    className="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex items-center justify-center rounded-[50%]"
                                                >
                                                    <i className="ph ph-share-network"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <span className="mt-32 pt-32 text-gray-700 border-t border-gray-100 block"></span>
                                        <div className="flex-between gap-16 p-12 border border-main-two-600 border-dashed rounded-8 mb-16">
                                            <div className="flex items-center gap-12">
                                                <button
                                                    type="button"
                                                    className="w-18 h-18 flex items-center justify-center border border-gray-900 text-xs rounded-[50%] hover-bg-gray-100"
                                                >
                                                    <i className="ph ph-plus"></i>
                                                </button>{" "}
                                                <span className="text-gray-900 font-[500] text-xs">
                                                    Mfr. coupon. $3.00 off 5
                                                </span>
                                            </div>
                                            <a
                                                href="cart.html"
                                                className="text-xs font-[600] text-main-two-600 text-decoration-underline hover-text-main-two-700"
                                            >
                                                View Details
                                            </a>
                                        </div>
                                        <ul className="list-inside ms-12">
                                            <li className="text-gray-900 text-sm mb-8">
                                                Buy 1, Get 1 FREE
                                            </li>
                                            <li className="text-gray-900 text-sm mb-0">
                                                Buy 1, Get 1 FREE
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-3/12 flex-grow-0 flex-shrink-0 basis-auto">
                            <div className="product-details__sidebar product-details__sidebar-c border border-gray-100 rounded-16 overflow-hidden">
                                <div className="p-24">
                                    <div className="flex-between bg-main-600 rounded-[50rem] p-8">
                                        <div className="flex items-center gap-8">
                                            <span className="w-44 h-44 bg-white rounded-[50%] flex items-center justify-center text-2xl">
                                                <i className="ph ph-storefront"></i>
                                            </span>{" "}
                                            <span className="text-white">
                                                by Marketpro
                                            </span>
                                        </div>
                                        <a
                                            href="shop.html"
                                            className="btn btn-white rounded-[50rem] text-[#212529] text-uppercase"
                                        >
                                            View Store
                                        </a>
                                    </div>
                                </div>
                                <div className="p-24 bg-color-one flex items-start gap-24 border-b border-gray-100">
                                    <span className="w-44 h-44 bg-white text-main-600 rounded-[50%] flex items-center justify-center text-2xl flex-shrink-0">
                                        <i className="ph-fill ph-truck"></i>
                                    </span>
                                    <div className="">
                                        <h6 className="text-sm mb-8">
                                            Fast Delivery
                                        </h6>
                                        <p className="text-gray-700">
                                            Lightning-fast shipping, guaranteed.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-24 bg-color-one flex items-start gap-24 border-b border-gray-100">
                                    <span className="w-44 h-44 bg-white text-main-600 rounded-[50%] flex items-center justify-center text-2xl flex-shrink-0">
                                        <i className="ph-fill ph-arrow-u-up-left"></i>
                                    </span>
                                    <div className="">
                                        <h6 className="text-sm mb-8">
                                            Free 90-day returns
                                        </h6>
                                        <p className="text-gray-700">
                                            Shop risk-free with easy returns.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-24 bg-color-one flex items-start gap-24 border-b border-gray-100">
                                    <span className="w-44 h-44 bg-white text-main-600 rounded-[50%] flex items-center justify-center text-2xl flex-shrink-0">
                                        <i className="ph-fill ph-check-circle"></i>
                                    </span>
                                    <div className="">
                                        <h6 className="text-sm mb-8">
                                            Pickup available at Shop location
                                        </h6>
                                        <p className="text-gray-700">
                                            Usually ready in 24 hours
                                        </p>
                                    </div>
                                </div>
                                <div className="p-24 bg-color-one flex items-start gap-24 border-b border-gray-100">
                                    <span className="w-44 h-44 bg-white text-main-600 rounded-[50%] flex items-center justify-center text-2xl flex-shrink-0">
                                        <i className="ph-fill ph-credit-card"></i>
                                    </span>
                                    <div className="">
                                        <h6 className="text-sm mb-8">
                                            Payment
                                        </h6>
                                        <p className="text-gray-700">
                                            Payment upon receipt of goods,
                                            Payment by card in the department,
                                            Google Pay, Online card.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-24 bg-color-one flex items-start gap-24 border-b border-gray-100">
                                    <span className="w-44 h-44 bg-white text-main-600 rounded-[50%] flex items-center justify-center text-2xl flex-shrink-0">
                                        <i className="ph-fill ph-check-circle"></i>
                                    </span>
                                    <div className="">
                                        <h6 className="text-sm mb-8">
                                            Warranty
                                        </h6>
                                        <p className="text-gray-700">
                                            The Consumer Protection Act does not
                                            provide for the return of this
                                            product of proper quality.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-24 bg-color-one flex items-start gap-24 border-b border-gray-100">
                                    <span className="w-44 h-44 bg-white text-main-600 rounded-[50%] flex items-center justify-center text-2xl flex-shrink-0">
                                        <i className="ph-fill ph-package"></i>
                                    </span>
                                    <div className="">
                                        <h6 className="text-sm mb-8">
                                            Packaging
                                        </h6>
                                        <p className="text-gray-700">
                                            Research &amp; development value
                                            proposition graphical user interface
                                            investor.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-80">
                        <div className="product-dContent border rounded-24">
                            <div className="product-dContent__header border-b border-gray-100 flex-between flex-wrap gap-16">
                                <ul
                                    className="nav common-tab nav-pills mb-3"
                                    id="pills-tab"
                                    role="tablist"
                                >
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link bt-tb-btn active"
                                            id="pills-description-tab"
                                            data-target="#pills-description"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-description"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-description"
                                            aria-selected="true"
                                        >
                                            Description
                                        </button>
                                    </li>
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link bt-tb-btn"
                                            id="pills-reviews-tab"
                                            data-target="#pills-reviews"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-reviews"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-reviews"
                                            aria-selected="false"
                                        >
                                            Reviews
                                        </button>
                                    </li>
                                </ul>
                                <a
                                    href="index.html"
                                    className="btn bg-color-one rounded-16 flex items-center gap-8 text-main-600 hover-bg-main-600 hover-text-white"
                                >
                                    <img
                                        src="images/satisfaction-icon.png"
                                        alt="Image"
                                    />{" "}
                                    100% Satisfaction Guaranteed
                                </a>
                            </div>
                            <div className="product-dContent__box">
                                <div
                                    className="tab-content"
                                    id="pills-tabContent"
                                >
                                    <div
                                        className="tab-pane fade show bt-tab-pane active"
                                        id="pills-description"
                                        role="tabpanel"
                                        aria-labelledby="pills-description-tab"
                                        tabIndex={0}
                                        style={{}}
                                    >
                                        <div className="mb-40">
                                            <h6 className="mb-24">
                                                Product Description
                                            </h6>
                                           {
                                                  product.description
                                           }
                                        </div>
                                        
                                    </div>
                                    <div
                                        className="tab-pane fade bt-tab-pane"
                                        id="pills-reviews"
                                        role="tabpanel"
                                        aria-labelledby="pills-reviews-tab"
                                        tabIndex={0}
                                        style={{ display: "none;" }}
                                    >
                                        <div className="row g-4">
                                            <div className="xl:w-6/12 flex-grow-0 flex-shrink-0 basis-auto">
                                                <h6 className="mb-24">
                                                    Product Reviews
                                                </h6>
                                                
                                               <Review />
                                            </div>
                                            <div className="xl:w-6/12 flex-grow-0 flex-shrink-0 basis-auto">
                                                <div className="ms-xxl-5">
                                                    <h6 className="mb-24">
                                                        Customers Feedback
                                                    </h6>
                                                    <div className="flex flex-wrap gap-44">
                                                        {/* Average Rating Card */}
                                                        <div className="border border-gray-100 rounded-8 px-40 py-52 flex items-center justify-center flex-col flex-shrink-0 text-center">
                                                            <h2 className="mb-6 text-main-600">
                                                                4.8
                                                            </h2>
                                                            <div className="flex items-center justify-center gap-8">
                                                                {[
                                                                    1, 2, 3, 4,
                                                                    5,
                                                                ].map(
                                                                    (_, i) => (
                                                                        <span
                                                                            key={
                                                                                i
                                                                            }
                                                                            className="text-15 font-[500] text-warning-600 flex"
                                                                        >
                                                                            <i className="ph-fill ph-star"></i>
                                                                        </span>
                                                                    )
                                                                )}
                                                            </div>
                                                            <span className="mt-16 text-gray-500">
                                                                Average Product
                                                                Rating
                                                            </span>
                                                        </div>

                                                        {/* Rating Bars */}
                                                        <div className="border border-gray-100 rounded-8 px-24 py-40 flex-grow">
                                                            {[
                                                                {
                                                                    rating: 5,
                                                                    percentage: 70,
                                                                    count: 124,
                                                                },
                                                                {
                                                                    rating: 4,
                                                                    percentage: 50,
                                                                    count: 52,
                                                                },
                                                                {
                                                                    rating: 3,
                                                                    percentage: 35,
                                                                    count: 12,
                                                                },
                                                                {
                                                                    rating: 2,
                                                                    percentage: 20,
                                                                    count: 5,
                                                                },
                                                                {
                                                                    rating: 1,
                                                                    percentage: 5,
                                                                    count: 2,
                                                                },
                                                            ].map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className={`flex items-center gap-8 ${
                                                                            index !==
                                                                            4
                                                                                ? "mb-20"
                                                                                : "mb-0"
                                                                        }`}
                                                                    >
                                                                        <span className="text-gray-900 flex-shrink-0">
                                                                            {
                                                                                item.rating
                                                                            }
                                                                        </span>
                                                                        <div
                                                                            className="progress w-full bg-gray-100 rounded-[50rem] h-8"
                                                                            role="progressbar"
                                                                            aria-label="Basic example"
                                                                            aria-valuenow={
                                                                                item.percentage
                                                                            }
                                                                            aria-valuemin={
                                                                                0
                                                                            }
                                                                            aria-valuemax={
                                                                                100
                                                                            }
                                                                        >
                                                                            <div
                                                                                className="progress-bar bg-main-600 rounded-[50rem]"
                                                                                style={{
                                                                                    width: `${item.percentage}%`,
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className="flex items-center gap-4">
                                                                            {[
                                                                                1,
                                                                                2,
                                                                                3,
                                                                                4,
                                                                                5,
                                                                            ].map(
                                                                                (
                                                                                    _,
                                                                                    i
                                                                                ) => (
                                                                                    <span
                                                                                        key={
                                                                                            i
                                                                                        }
                                                                                        className="text-xs font-[500] text-warning-600 flex"
                                                                                    >
                                                                                        <i className="ph-fill ph-star"></i>
                                                                                    </span>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                        <span className="text-gray-900 flex-shrink-0">
                                                                            {
                                                                                item.count
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="new-arrival pb-80">
                <div className="container container-lg">
                    <div className="section-heading">
                        <div className="flex-between flex-wrap gap-8">
                            <h5 className="mb-0">You Might Also Like</h5>
                            <div className="flex items-center gap-16">
                                <a
                                    href="shop.html"
                                    className="text-sm font-[500] text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                                >
                                    All Products
                                </a>
                                <div className="flex items-center gap-8">
                                    <button
                                        type="button"
                                        id="new-arrival-prev"
                                        className="slick-prev flex items-center justify-center rounded-[50%] border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                                        style={{}}
                                    >
                                        <i className="ph ph-caret-left"></i>
                                    </button>{" "}
                                    <button
                                        type="button"
                                        id="new-arrival-next"
                                        className="slick-next flex items-center justify-center rounded-[50%] border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1"
                                        style={{}}
                                    >
                                        <i className="ph ph-caret-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="new-arrival__slider arrow-style-two slick-initialized slick-slider">
                        <div className="slick-list draggable">
                            <div
                                className="slick-track"
                                style={{
                                    opacity: 1,
                                    width: "5580px",
                                    transform: "translate3d(-1240px, 0px, 0px)",
                                }}
                            >
                                <div
                                    className="slick-slide slick-cloned"
                                    style={{ width: "290px" }}
                                    data-slick-index="-4"
                                    id=""
                                    aria-hidden="true"
                                    tabIndex={-1}
                                >
                                    <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                                        <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                            Best Sale{" "}
                                        </span>
                                        <a
                                            href="product-details.html"
                                            className="product-card__thumb flex items-center justify-center"
                                            tabIndex={-1}
                                        >
                                            <img
                                                src="images/product-img10.png"
                                                alt="Image"
                                            />
                                        </a>
                                        <div className="product-card__content p-sm-2 w-full">
                                            <h6 className="title text-lg font-[600] mt-12 mb-8">
                                                <a
                                                    href="product-details.html"
                                                    className="link text-line-2"
                                                    tabIndex={-1}
                                                >
                                                    Whole Grains and Seeds
                                                    Organic Bread
                                                </a>
                                            </h6>
                                            <div className="flex items-center gap-4">
                                                <span className="text-main-600 text-md flex">
                                                    <i className="ph-fill ph-storefront"></i>
                                                </span>{" "}
                                                <span className="text-gray-500 text-xs">
                                                    By Lucky Supermarket
                                                </span>
                                            </div>
                                            <div className="product-card__content mt-12">
                                                <div className="product-card__price mb-8">
                                                    <span className="text-heading text-md font-[600]">
                                                        $14.99{" "}
                                                        <span className="text-gray-500 font-normal">
                                                            /Qty
                                                        </span>{" "}
                                                    </span>
                                                    <span className="text-gray-400 text-md font-[600] text-decoration-line-through">
                                                        $28.99
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-6">
                                                    <span className="text-xs font-[700] text-gray-600">
                                                        4.8
                                                    </span>{" "}
                                                    <span className="text-15 font-[700] text-warning-600 flex">
                                                        <i className="ph-fill ph-star"></i>
                                                    </span>{" "}
                                                    <span className="text-xs font-[700] text-gray-600">
                                                        (17k)
                                                    </span>
                                                </div>
                                                <a
                                                    href="cart.html"
                                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center"
                                                    tabIndex={-1}
                                                >
                                                    Add To Cart{" "}
                                                    <i className="ph ph-shopping-cart"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="slick-slide slick-cloned"
                                    style={{ width: "290px" }}
                                    data-slick-index="-3"
                                    id=""
                                    aria-hidden="true"
                                    tabIndex={-1}
                                >
                                    <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                                        <a
                                            href="product-details.html"
                                            className="product-card__thumb flex items-center justify-center"
                                            tabIndex={-1}
                                        >
                                            <img
                                                src="images/product-img11.png"
                                                alt="Image"
                                            />
                                        </a>
                                        <div className="product-card__content p-sm-2 w-full" />
                                        <h6 className="title text-lg font-[600] mt-12 mb-8">
                                            <a
                                                href="product-details.html"
                                                className="link text-line-2"
                                                tabIndex={-1}
                                            >
                                                Lucerne Yogurt, Lowfat,
                                                Strawberry
                                            </a>
                                        </h6>
                                        <div className="flex items-center gap-4">
                                            <span className="text-main-600 text-md flex">
                                                <i className="ph-fill ph-storefront"></i>
                                            </span>{" "}
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md font-[600]">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 font-normal">
                                                        /Qty
                                                    </span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md font-[600] text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <span className="text-xs font-[700] text-gray-600">
                                                    4.8
                                                </span>{" "}
                                                <span className="text-15 font-[700] text-warning-600 flex">
                                                    <i className="ph-fill ph-star"></i>
                                                </span>{" "}
                                                <span className="text-xs font-[700] text-gray-600">
                                                    (17k)
                                                </span>
                                            </div>
                                            <a
                                                href="cart.html"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center"
                                                tabIndex={-1}
                                            >
                                                Add To Cart{" "}
                                                <i className="ph ph-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="slick-slide slick-cloned"
                                style={{ width: "290px" }}
                                data-slick-index="-2"
                                id=""
                                aria-hidden="true"
                                tabIndex={-1}
                            >
                                <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%{" "}
                                    </span>
                                    <a
                                        href="product-details.html"
                                        className="product-card__thumb flex items-center justify-center"
                                        tabIndex={-1}
                                    >
                                        <img
                                            src="images/product-img12.png"
                                            alt="Image"
                                        />
                                    </a>
                                    <div className="product-card__content p-sm-2 w-full">
                                        <h6 className="title text-lg font-[600] mt-12 mb-8">
                                            <a
                                                href="product-details.html"
                                                className="link text-line-2"
                                                tabIndex={-1}
                                            >
                                                Nature Valley Whole Grain Oats
                                                and Honey Protein
                                            </a>
                                        </h6>
                                        <div className="flex items-center gap-4">
                                            <span className="text-main-600 text-md flex">
                                                <i className="ph-fill ph-storefront"></i>
                                            </span>{" "}
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md font-[600]">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 font-normal">
                                                        /Qty
                                                    </span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md font-[600] text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <span className="text-xs font-[700] text-gray-600">
                                                    4.8
                                                </span>{" "}
                                                <span className="text-15 font-[700] text-warning-600 flex">
                                                    <i className="ph-fill ph-star"></i>
                                                </span>{" "}
                                                <span className="text-xs font-[700] text-gray-600">
                                                    (17k)
                                                </span>
                                            </div>
                                            <a
                                                href="cart.html"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center"
                                                tabIndex={-1}
                                            >
                                                Add To Cart{" "}
                                                <i className="ph ph-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="slick-slide slick-cloned"
                                style={{ width: "290px" }}
                                data-slick-index="-1"
                                id=""
                                aria-hidden="true"
                                tabIndex={-1}
                            >
                                <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                                    <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
                                        Best Sale{" "}
                                    </span>
                                    <a
                                        href="product-details.html"
                                        className="product-card__thumb flex items-center justify-center"
                                        tabIndex={-1}
                                    >
                                        <img
                                            src="images/product-img10.png"
                                            alt="Image"
                                        />
                                    </a>
                                    <div className="product-card__content p-sm-2 w-full">
                                        <h6 className="title text-lg font-[600] mt-12 mb-8">
                                            <a
                                                href="product-details.html"
                                                className="link text-line-2"
                                                tabIndex={-1}
                                            >
                                                Whole Grains and Seeds Organic
                                                Bread
                                            </a>
                                        </h6>
                                        <div className="flex items-center gap-4">
                                            <span className="text-main-600 text-md flex">
                                                <i className="ph-fill ph-storefront"></i>
                                            </span>{" "}
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md font-[600]">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 font-normal">
                                                        /Qty
                                                    </span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md font-[600] text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <span className="text-xs font-[700] text-gray-600">
                                                    4.8
                                                </span>{" "}
                                                <span className="text-15 font-[700] text-warning-600 flex">
                                                    <i className="ph-fill ph-star"></i>
                                                </span>{" "}
                                                <span className="text-xs font-[700] text-gray-600">
                                                    (17k)
                                                </span>
                                            </div>
                                            <a
                                                href="cart.html"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center"
                                                tabIndex={-1}
                                            >
                                                Add To Cart{" "}
                                                <i className="ph ph-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="slick-slide slick-current slick-active"
                                style={{ width: "290px" }}
                                data-slick-index="0"
                                aria-hidden="false"
                                tabIndex={0}
                            >
                                <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                                    <a
                                        href="product-details.html"
                                        className="product-card__thumb flex items-center justify-center"
                                        tabIndex={0}
                                    >
                                        <img
                                            src="images/product-img7.png"
                                            alt="Image"
                                        />
                                    </a>
                                    <div className="product-card__content p-sm-2 w-full">
                                        <h6 className="title text-lg font-[600] mt-12 mb-8">
                                            <a
                                                href="product-details.html"
                                                className="link text-line-2"
                                                tabIndex={0}
                                            >
                                                C-500 Antioxidant Protect
                                                Dietary Supplement
                                            </a>
                                        </h6>
                                        <div className="flex items-center gap-4">
                                            <span className="text-main-600 text-md flex">
                                                <i className="ph-fill ph-storefront"></i>
                                            </span>{" "}
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md font-[600]">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 font-normal">
                                                        /Qty
                                                    </span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md font-[600] text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <span className="text-xs font-[700] text-gray-600">
                                                    4.8
                                                </span>{" "}
                                                <span className="text-15 font-[700] text-warning-600 flex">
                                                    <i className="ph-fill ph-star"></i>
                                                </span>{" "}
                                                <span className="text-xs font-[700] text-gray-600">
                                                    (17k)
                                                </span>
                                            </div>
                                            <a
                                                href="cart.html"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center"
                                                tabIndex={0}
                                            >
                                                Add To Cart{" "}
                                                <i className="ph ph-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="slick-slide slick-active"
                                style={{ width: "290px" }}
                                data-slick-index="1"
                                aria-hidden="false"
                                tabIndex={0}
                            >
                                <div className="product-card h-full p-8 border border-gray-100 hover-border-main-600 rounded-16 relative transition-2">
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                                        Sale 50%{" "}
                                    </span>
                                    <a
                                        href="product-details.html"
                                        className="product-card__thumb flex items-center justify-center"
                                        tabIndex={0}
                                    >
                                        <img
                                            src="images/product-img8.png"
                                            alt="Image"
                                        />
                                    </a>
                                    <div className="product-card__content p-sm-2 w-full">
                                        <h6 className="title text-lg font-[600] mt-12 mb-8">
                                            <a
                                                href="product-details.html"
                                                className="link text-line-2"
                                                tabIndex={0}
                                            >
                                                Marcel's Modern Pantry Almond
                                                Unsweetened
                                            </a>
                                        </h6>
                                        <div className="flex items-center gap-4">
                                            <span className="text-main-600 text-md flex">
                                                <i className="ph-fill ph-storefront"></i>
                                            </span>{" "}
                                            <span className="text-gray-500 text-xs">
                                                By Lucky Supermarket
                                            </span>
                                        </div>
                                        <div className="product-card__content mt-12">
                                            <div className="product-card__price mb-8">
                                                <span className="text-heading text-md font-[600]">
                                                    $14.99{" "}
                                                    <span className="text-gray-500 font-normal">
                                                        /Qty
                                                    </span>{" "}
                                                </span>
                                                <span className="text-gray-400 text-md font-[600] text-decoration-line-through">
                                                    $28.99
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <span className="text-xs font-[700] text-gray-600">
                                                    4.8
                                                </span>{" "}
                                                <span className="text-15 font-[700] text-warning-600 flex">
                                                    <i className="ph-fill ph-star"></i>
                                                </span>{" "}
                                                <span className="text-xs font-[700] text-gray-600">
                                                    (17k)
                                                </span>
                                            </div>
                                            <a
                                                href="cart.html"
                                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-[50rem] flex items-center gap-8 mt-24 w-full justify-center"
                                                tabIndex={0}
                                            >
                                                Add To Cart{" "}
                                                <i className="ph ph-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};
export default ProductDetails;
