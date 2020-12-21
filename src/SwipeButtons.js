import {
  Close,
  Favorite,
  FlashOn,
  Replay,
  Share,
  StarRate,
} from '@material-ui/icons';
import React from 'react';
import './SwipeButtons.css';
import { IconButton } from '@material-ui/core';

const SwipeButtons = () => {
  return (
    <div className='swipeButtons'>
      <div className='left'>
        <IconButton className='swipeButtons__repeat'>
          <Replay fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__left'>
          <Close fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__star'>
          <StarRate fontSize='large' />
        </IconButton>
      </div>
      <div className='right'>
        <IconButton className='swipeButtons__right'>
          <Favorite fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__loghtening'>
          <FlashOn fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__share'>
          <Share fontSize='large' />
        </IconButton>
      </div>
    </div>
  );
};

export default SwipeButtons;
