import React from 'react'

export default function Alert(props) {

  const capitalize = (word) => {
    const small = word.toLowerCase();
    return small.charAt(0).toUpperCase() + small.slice(1);

  }
  return (
    <div style={{ height: '55px' }}>
      {props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
      </div>}
    </div>
  )
}
