import React from 'react'

export default React.memo(({ cb }) => {
  return <button className="button-clear-colors" onClick={cb}>Clear canvas</button>
});
