import React from 'react'

export default React.memo(({ cb }) => {
  return <button className="button-refresh-colors" onClick={cb}>&#8634; Get new colors</button>
});
