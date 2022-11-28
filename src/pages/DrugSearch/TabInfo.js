import React, { memo } from 'react';
import styled from 'styled-components';
const DrugCont = styled.div`
   .searchBox{
      display: flex;
    -webkit-box-align: center;
      padding: 15px 150px 15px 150px;
    background: #f9f9f9;
      justify-content: center;
      align-items: center;
    -webkit-box-pack: center;
   }
`;

const TabInfo = memo(() => {
   return (
      <DrugCont>
         <form>
            <fieldset>
                  <div>
                  <div className='searchBox'>
                     <input type='text' name='itemName' placeholder='제품명 및 성분을 입력하세요.' 
                     className='formControl'/>
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
         <div className='nodata'>
            <i className='nodataIcon'></i>
            <p>선택한 조건에 맞는 의약품 검색결과가 없습니다.</p>
         </div>
      </DrugCont>
   );
});

export default TabInfo;