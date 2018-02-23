import React from 'react';

export default function ButtonDwonload (props, state) {
  
  return (
    <a href={props.url}
      download="file.zip"
      target="_blank"
      onClick={props.handleDownload}>
      Download
    </a>
  )
}
