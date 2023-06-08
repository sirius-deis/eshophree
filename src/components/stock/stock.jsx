import { useState, useEffect } from 'react';
import { StyledStock, StyledProgress } from './stock.styles';
import Row from '../row/row';

const formatTime = (number) => {
  const trunked = Math.trunc(number);
  return trunked >= 10 ? trunked : `0${trunked}`;
};

const Stock = ({ total, sold, endIn }) => {
  const progressLength = (100 / total) * (total - sold);
  const [remainingTime, setRemainingTime] = useState((endIn - Date.now()) / 1000);
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setRemainingTime((prevState) => {
          return prevState - 1;
        }),
      1000,
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [remainingTime]);
  return (
    <StyledStock>
      <div style={{ marginBottom: '1rem' }}>
        <Row>
          <span style={{ fontSize: '1.3rem', color: 'var(--text-color-additional)' }}>Available: {total - sold}</span>
          <span style={{ fontSize: '1.3rem', color: 'var(--text-color-additional)' }}>Sold: {sold}</span>
        </Row>
        <div className='progress'>
          <StyledProgress width={100} bgColor='additional-color-lighter' />
          <StyledProgress width={progressLength} bgColor='additional-color' />
        </div>
      </div>
      <Row>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h4 style={{ fontSize: '1.7rem' }}>Harry Up</h4>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-color-additional)' }}>offer end in:</p>
        </div>
        <Row gap={1}>
          <div className='clock'>
            <span className='circle'>{formatTime(remainingTime / 24 / 60 / 60)}</span>
            Days
          </div>{' '}
          :
          <div className='clock'>
            <span className='circle'>{formatTime((remainingTime / 60 / 60) % 24)}</span>
            Hours
          </div>{' '}
          :
          <div className='clock'>
            <span className='circle'>{formatTime((remainingTime / 60) % 60)}</span>
            Mins
          </div>{' '}
          :
          <div className='clock'>
            <span className='circle'>{formatTime(remainingTime % 60)}</span>
            Secs
          </div>
        </Row>
      </Row>
    </StyledStock>
  );
};

export default Stock;
