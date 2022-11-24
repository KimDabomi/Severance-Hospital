import React, { memo } from 'react';

const TabInfo = memo(() => {
    return (
        <div>
            <form>
                <fieldset>
                    <div>
                        <div>
                            <input type='text' name='itemName' placeholder='제품명 및 성분을 입력하세요.' />
                            <span>
                                <button type='button'>
                                    <i className='search'></i>
                                    <span>검색</span>
                                </button>
                            </span>
                        </div>
                    </div>
                </fieldset>
            </form>
            {/* 검색결과없을 때 */}
            <div>
                <i className='nodata'></i>
                <p>선택한 조건에 맞는 의약품 검색결과가 없습니다.</p>
            </div>
        </div>
    );
});

export default TabInfo;