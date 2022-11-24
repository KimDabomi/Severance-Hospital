import React, { memo } from 'react';

const TabShape = memo(() => {
  return (
    <div>
      <fieldset>
        <div className='drugOption'>
            <dl>
                <dt><span>모양 선택</span></dt>
                <dd className='flex'>
                    <label>
                        <input type='radio' name='drugShape' id='d1' value='전체' checked />
                        <span>
                            <i className='drugIco'></i>
                            <span>전체</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='drugShape' id='d2' value='원형' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>원형</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='drugShape' id='d3' value='사각형' checked />
                        <span>
                            <i className='drugIco'></i>
                            <span>사각형</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='drugShape' id='d4' value='장방형' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>장방형</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='drugShape' id='d5' value='타원형' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>타원형</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='drugShape' id='d6' value='반원형' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>반원형</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='drugShape' id='d7' value='삼각형' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>삼각형</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='drugShape' id='d8' value='마름모형' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>마름모형</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='drugShape' id='d9' value='오각형' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>오각형</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='drugShape' id='d10' value='육각형' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>육각형</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='drugShape' id='d11' value='팔각형' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>팔각형</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='drugShape' id='d12' value='기타' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>기타</span>
                        </span>
                    </label>
                </dd>
            </dl>
            <dl>
                <dt><span>색상 선택</span></dt>
                <dd className='flex'>
                    <label>
                        <input type='radio' name='colorClass1' id='da1' value='전체' checked />
                        <span>
                            <i className='drugIco'></i>
                            <span>전체</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da2' value='하양' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>하양</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da3' value='노랑' checked />
                        <span>
                            <i className='drugIco'></i>
                            <span>노랑</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da4' value='주황' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>주황</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da5' value='분홍' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>분홍</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da6' value='빨강' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>빨강</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da7' value='갈색' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>갈색</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da8' value='연두' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>연두</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da9' value='초록' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>초록</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da10' value='청록' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>청록</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da11' value='파랑' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>파랑</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da12' value='남색' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>남색</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da13' value='자주' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>자주</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da14' value='보라' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>보라</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da15' value='회색' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>회색</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da16' value='검정' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>검정</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='colorClass1' id='da17' value='투명' checked />
                        <span className='label'>
                            <i className='drugIco'></i>
                            <span>투명</span>
                        </span>
                    </label>
                </dd>
            </dl>
            <dl>
                <dt><span>제형 선택</span></dt>
                <dd className='flex'>
                    <label>
                        <input type='radio' name='formCodeName' id='dc1' value='전체' checked />
                        <span>
                            <i className='drugIco'></i>
                            <span>전체</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='formCodeName' id='dc2' value='정제' checked />
                        <span>
                            <i className='drugIco'></i>
                            <span>정제</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='formCodeName' id='dc3' value='연질캡슐' checked />
                        <span>
                            <i className='drugIco'></i>
                            <span>연질캡슐</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='formCodeName' id='dc4' value='경질캡슐' checked />
                        <span>
                            <i className='drugIco'></i>
                            <span>경질캡슐</span>
                        </span>
                    </label>
                </dd>
            </dl>
            <dl>
                <dt><span>분할선 선택</span></dt>
                <dd className='flex'>
                    <label>
                        <input type='radio' name='lineFront' id='db1' value='전체' />
                        <span>
                            <i className='drugIco'></i>
                            <span>전체</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='lineFront' id='db2' value='' />
                        <span>
                            <i className='drugIco'></i>
                            <span>없음</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='lineFront' id='db3' value='-' />
                        <span>
                            <i className='drugIco'></i>
                            <span>-형</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='lineFront' id='db4' value='+' />
                        <span>
                            <i className='drugIco'></i>
                            <span>+형</span>
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='lineFront' id='db5' value='기타' />
                        <span>
                            <i className='drugIco'></i>
                            <span>기타</span>
                        </span>
                    </label>
                </dd>
            </dl>
            <input type='text' name='markCodeFrontAnal' className='formControl' placeholder='식별문자(약의 앞면이나 뒷면의 문자)로 검색' title='식별문자(약의 앞면이나 뒷면의 문자)로 검색' />
        </div>
        <div className="buttonCont">
          <button type="submit" className="buttonBlue">
            검색
          </button>
          <button type="reset" className="buttonWhite marginleft">
            초기화
          </button>
        </div>
      </fieldset>
    </div>
  );
});

export default TabShape;
