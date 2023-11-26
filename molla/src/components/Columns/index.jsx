import React from 'react'
import './index.scss'
const Columns = () => {
    return (
        <div className='row'>
            <div className='col-lg-9'>
                <div className='tool_box'>
                    <div className='tool_box_left'>
                        <div className="toolbox_info">
                            Showing
                            <span> 9 of 56 </span>
                            Products
                        </div>
                        <div className="toolbox_right">
                            <div className="toolbox_sort">
                                <label htmlFor="sortby">Sort by:</label>
                                <div className="select-custom">
                                    <select name="sortby" id="sortby" className='sort_control'>
                                        <option value="popularty">Most Popular</option>
                                        <option value="rating">Most Rated</option>
                                        <option value="date">Date</option>
                                    </select>
                                </div>
                            </div>
                            <div className="toolbox_layout">

                                <a href="category.html" class="btn-layout active">
                                    <svg width="16" height="10">
                                        <rect x="0" y="0" width="4" height="4"></rect>
                                        <rect x="6" y="0" width="4" height="4"></rect>
                                        <rect x="12" y="0" width="4" height="4"></rect>
                                        <rect x="0" y="6" width="4" height="4"></rect>
                                        <rect x="6" y="6" width="4" height="4"></rect>
                                        <rect x="12" y="6" width="4" height="4"></rect>
                                    </svg>
                                </a>
                                <a href="category-2cols.html" class="btn-layout">
                                    <svg width="10" height="10">
                                        <rect x="0" y="0" width="4" height="4"></rect>
                                        <rect x="6" y="0" width="4" height="4"></rect>
                                        <rect x="0" y="6" width="4" height="4"></rect>
                                        <rect x="6" y="6" width="4" height="4"></rect>
                                    </svg>
                                </a>

                                <a href="category.html" class="btn-layout active">
                                    <svg width="16" height="10">
                                        <rect x="0" y="0" width="4" height="4"></rect>
                                        <rect x="6" y="0" width="4" height="4"></rect>
                                        <rect x="12" y="0" width="4" height="4"></rect>
                                        <rect x="0" y="6" width="4" height="4"></rect>
                                        <rect x="6" y="6" width="4" height="4"></rect>
                                        <rect x="12" y="6" width="4" height="4"></rect>
                                    </svg>
                                </a>
                                <svg width="22" height="10">
                                    <rect x="0" y="0" width="4" height="4"></rect>
                                    <rect x="6" y="0" width="4" height="4"></rect>
                                    <rect x="12" y="0" width="4" height="4"></rect>
                                    <rect x="18" y="0" width="4" height="4"></rect>
                                    <rect x="0" y="6" width="4" height="4"></rect>
                                    <rect x="6" y="6" width="4" height="4"></rect>
                                    <rect x="12" y="6" width="4" height="4"></rect>
                                    <rect x="18" y="6" width="4" height="4"></rect>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    )
}



export default Columns