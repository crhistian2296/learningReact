import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import React from 'react';

const JournalEntry = ({ id, date, title, body, url }) => {
  const noteDate = dayjs.extend(advancedFormat)(date);

  return (
    <div className='journal__entry'>
      {url && (
        <div
          className='journal__entry-picture'
          style={{
            backgroundSize: 'cover',
            backgroundImage:
              'url(https://images.iphonephotographyschool.com/22682/How-To-Blur-Background-On-iPhone.jpg)',
          }}
        ></div>
      )}
      <div className='journal__entry--body'>
        <p className='journal__entry--title'>{title}</p>
        <p className='journal__entry--content'>{body}</p>
      </div>
      <div className='journal__entry--date-box'>
        <span>{noteDate.format('dddd')}</span>
        <h4>{noteDate.format('Do')}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
