import React from 'react'

const Review = () => {
  return (
    <>
    <div className="flex items-start gap-24 pb-44 border-b border-gray-100 mb-44">
                                                    <img
                                                        src="images/comment-img1.png"
                                                        alt="Image"
                                                        className="w-52 h-52 object-fit-cover rounded-[50%] flex-shrink-0"
                                                    />
                                                    <div className="flex-grow">
                                                        <div className="flex-between items-start gap-8">
                                                            <div className="">
                                                                <h6 className="mb-12 text-md">
                                                                    Nicolas cage
                                                                </h6>
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
                                                            </div>
                                                            <span className="text-gray-800 text-xs">
                                                                3 Days ago
                                                            </span>
                                                        </div>
                                                        <h6 className="mb-14 text-md mt-24">
                                                            Greate Product
                                                        </h6>
                                                        <p className="text-gray-700">
                                                            There are many
                                                            variations of
                                                            passages of Lorem
                                                            Ipsum available, but
                                                            the majority have
                                                            suffered alteration
                                                            in some form, by
                                                            injected humour
                                                        </p>
                                                        <div className="flex items-center gap-20 mt-44">
                                                            <button className="flex items-center gap-12 text-gray-700 hover-text-main-600">
                                                                <i className="ph-bold ph-thumbs-up"></i>{" "}
                                                                Like
                                                            </button>{" "}
                                                            <a
                                                                href="#comment-form"
                                                                className="flex items-center gap-12 text-gray-700 hover-text-main-600"
                                                            >
                                                                <i className="ph-bold ph-arrow-bend-up-left"></i>{" "}
                                                                Replay
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
    </>
  )
}

export default Review