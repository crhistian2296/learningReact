import React from 'react';

const JournalEntry = () => {
  return (
    <div className='journal__entry'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://images.iphonephotographyschool.com/22682/How-To-Blur-Background-On-iPhone.jpg)',
        }}
      ></div>
      <div className='journal__entry--body'>
        <p className='journal__entry--title'>Un nuevo dia</p>
        <p className='journal__entry--content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorum, eveniet
        </p>
      </div>
      <div className='journal__entry--date-box'>
        <span>Monday</span>
        <h4>20</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
