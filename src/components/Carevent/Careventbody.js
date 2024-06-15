import React from 'react';
import './Careventbody.scss';
import Careventlist from './Careventlist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Careventbody = () => {
  return (
    <>
      <div className='careverntbody'>
        <div className='eventtitle'>
          <span className='eventmain'>이벤트 / 혜택</span>
          <span className='eventsub'>
            <span className=''>Home</span>

            <FontAwesomeIcon icon={faChevronRight} />
            <span className=''>커뮤니티</span>

            <FontAwesomeIcon icon={faChevronRight} />
            <span className=''>이벤트</span>
          </span>
        </div>
        <div className='eventcontent'>
          <Careventlist />
        </div>
      </div>
    </>
  );
};

export default Careventbody;
